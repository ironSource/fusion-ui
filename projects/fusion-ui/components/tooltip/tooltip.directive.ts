import {Directive, ElementRef, HostBinding, Input, OnDestroy, Renderer2} from '@angular/core';
import {ITooltipData, TooltipPosition, TooltipType} from './tooltip.entities';
import {TooltipService} from './tooltip.service';
import {Subject, fromEvent, merge, Observable} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import {IconData} from '@ironsource/fusion-ui/components/icon';

@Directive({
    selector: '[fusionTooltip]'
})
export class TooltipDirective implements OnDestroy {
    @Input() set fusionTooltip(tooltipContent: string) {
        if (!!tooltipContent) {
            this.clearTooltipContentListener$.next();
            this.fusionTooltipContent = tooltipContent;
            this.renderer.setAttribute(this.elementRef.nativeElement, 'role', 'tooltiped');
            this.onMouseEnterObservable$ = this.tooltipService.getMouseHoverObservable(this.elementRef.nativeElement);
            this.initListeners();
        }
    }
    @Input() tooltipWidth: number; // Allow custom width for tooltip
    @Input() tooltipPosition: TooltipPosition = TooltipPosition.Top;
    @Input() tooltipType: TooltipType = TooltipType.Html;
    @Input() tooltipComponentData: ITooltipData = {};
    @Input() tooltipIcon: string | IconData;
    @HostBinding('attr.title') emptyTooltip = ''; // remove existed title from parent element

    private visible = false;
    private onDestroy$ = new Subject<void>();
    private clearListeners$ = new Subject<void>();
    private clearTooltipContentListener$ = new Subject<void>();
    private clearHover$ = merge(this.clearTooltipContentListener$.asObservable(), this.onDestroy$.asObservable());
    private takeUntil$ = merge(this.clearListeners$.asObservable(), this.onDestroy$.asObservable());
    private onMouseEnterObservable$: Observable<MouseEvent>;
    private fusionTooltipContent = '';

    constructor(private elementRef: ElementRef, private tooltipService: TooltipService, private renderer: Renderer2) {}

    ngOnDestroy() {
        if (this.visible) {
            this.closeTooltip();
        }
        this.onDestroy$.next();
        this.onDestroy$.complete();
        this.clearListeners$.complete();
        this.clearTooltipContentListener$.complete();
    }

    initListeners(): void {
        this.onMouseEnterObservable$.pipe(takeUntil(this.clearHover$)).subscribe(() => {
            this.onHover();
        });
    }

    onHover(): void {
        const needToShow = this.calcTruncate();
        if (this.visible || !needToShow) {
            return;
        }
        this.visible = true;
        this.buildTooltipComponent();
        this.setMouseListeners();
    }

    private closeTooltip(): void {
        this.visible = false;
        this.tooltipService.closeTooltip();
    }

    private onHoverEnds(): void {
        if (this.visible) {
            this.closeTooltip();
        }
    }

    private onClick(event: any): void {
        if (
            (!!event && event.target.closest('fusion-icon[role="tooltiped"]') && this.visible) ||
            this.elementRef.nativeElement.offsetParent === null
        ) {
            this.closeTooltip();
        }
    }

    private buildTooltipComponent(): void {
        const tooltipData: ITooltipData = {
            parentEl: this.elementRef,
            position: this.tooltipPosition,
            content: this.fusionTooltipContent,
            icon: this.tooltipIcon,
            width: this.tooltipWidth,
            type: this.tooltipType,
            componentData: this.tooltipComponentData
        };
        this.tooltipService.showTooltip(tooltipData);
    }

    private setMouseListeners(): void {
        fromEvent(this.elementRef.nativeElement, 'click').pipe(takeUntil(this.takeUntil$)).subscribe(this.onClick.bind(this));
        fromEvent(this.elementRef.nativeElement, 'mouseleave')
            .pipe(take(1))
            .subscribe(() => {
                this.onHoverEnds();
                this.clearListeners$.next();
            });
    }

    private calcTruncate(): boolean {
        if (!this.fusionTooltipContent) {
            return false;
        }
        const nativeElement = this.elementRef.nativeElement;
        return !(nativeElement.className.includes('truncate') && nativeElement.clientWidth >= nativeElement.scrollWidth);
    }
}

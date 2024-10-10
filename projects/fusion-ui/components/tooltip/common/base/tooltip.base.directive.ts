import {Component, Directive, ElementRef, HostBinding, Inject, Input, OnDestroy, Renderer2, Type} from '@angular/core';
import {ITooltipData, TooltipPosition, TooltipType} from './tooltip.entities';
import {TooltipService} from './tooltip.base.service';
import {Subject, fromEvent, merge, Observable, of} from 'rxjs';
import {switchMap, take, takeUntil} from 'rxjs/operators';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';
import {DOCUMENT} from '@angular/common';

@Directive()
export abstract class TooltipBaseDirective implements OnDestroy {
    @Input() set fusionTooltip(tooltipContent: string | Type<Component>) {
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
    @Input() tooltipIcon: IconData;
    @Input() tooltipPreventToClose = false;
    @HostBinding('attr.title') emptyTooltip = ''; // remove existed title from parent element

    private visible = false;
    private onDestroy$ = new Subject<void>();
    private clearListeners$ = new Subject<void>();
    private clearTooltipContentListener$ = new Subject<void>();
    private clearHover$ = merge(this.clearTooltipContentListener$.asObservable(), this.onDestroy$.asObservable());
    private takeUntil$ = merge(this.clearListeners$.asObservable(), this.onDestroy$.asObservable());
    private onMouseEnterObservable$: Observable<MouseEvent>;
    private fusionTooltipContent: string | Type<Component> = '';

    constructor(
        private elementRef: ElementRef,
        private tooltipService: TooltipService,
        private renderer: Renderer2,
        @Inject(DOCUMENT) private document: Document
    ) {}

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
            .pipe(
                switchMap((event: MouseEvent) => {
                    return this.haveToBeClosed(event);
                }),
                take(1)
            )
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

    haveToBeClosed(event: MouseEvent): Observable<Event> {
        const marginSize = 10;
        const tooltipEl = this.document.querySelector('fusion-tooltip');
        let haveToBeClosed = true;
        if (this.tooltipPreventToClose && !!tooltipEl) {
            const rectTooltip = tooltipEl.getBoundingClientRect();
            haveToBeClosed = !(
                event.x >= rectTooltip.left - marginSize &&
                event.x <= rectTooltip.right + marginSize &&
                event.y >= rectTooltip.top - marginSize &&
                event.y <= rectTooltip.bottom + marginSize
            );
        }
        return haveToBeClosed ? of(event) : fromEvent(tooltipEl, 'mouseleave');
    }
}

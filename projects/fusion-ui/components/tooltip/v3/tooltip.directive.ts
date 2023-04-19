import {
    Input,
    Renderer2,
    Directive,
    ElementRef,
    ContentChild,
    OnDestroy,
    AfterViewInit,
    ComponentRef,
    ViewContainerRef
} from '@angular/core';
import {TooltipContentComponent} from './tooltip.content.component';
import {IShiftPosition, tooltipConfiguration, TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {fromEvent, Subject} from 'rxjs';
import {filter, take, takeUntil} from 'rxjs/operators';
import {TooltipContentDirective} from './tooltip-content.directive';

@Directive({selector: '[fusionTooltip]'})
export class TooltipDirective implements OnDestroy, AfterViewInit {
    //todo: Fix React not passing configuration for static mode
    @ContentChild(TooltipContentDirective, {static: true}) directiveRef!: TooltipContentDirective;
    @ContentChild('tooltipTriggerElement', {static: true}) tooltipTriggerElement!: ElementRef;
    @ContentChild('tooltipTriggerElement', {static: true, read: ViewContainerRef}) viewTriggerContainer!: ViewContainerRef;

    @Input() fusionTooltip = '';
    @Input() set configuration(config: tooltipConfiguration) {
        if (config) {
            this.width = config?.width;
            this.height = config?.height;
            this.backgroundColor = config?.backgroundColor;
            this.preventTooltipToClose = config?.preventTooltipToClose;
        }
    }

    width: number;
    height: number;
    backgroundColor: string;
    preventTooltipToClose: boolean = false;

    private visible = false;
    private onDestroy$ = new Subject<void>();
    private tooltipElement: HTMLElement;
    private position = TooltipPosition.Top;
    private tooltipPosition: {
        position: TooltipPosition;
        left: number;
        top: number;
    };
    private viewContainerRef: ViewContainerRef;
    private tooltipComponentRef: ComponentRef<TooltipContentComponent>;

    constructor(private renderer: Renderer2, private elementRef: ElementRef, private vcr: ViewContainerRef) {}

    ngAfterViewInit() {
        this.viewContainerRef = this.viewTriggerContainer ? this.viewTriggerContainer : this.vcr;
        this.tooltipElement = this.preventTooltipToClose
            ? this.elementRef.nativeElement
            : !!this.tooltipTriggerElement?.nativeElement
            ? this.tooltipTriggerElement?.nativeElement
            : this.elementRef.nativeElement;
        this.initListeners();
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    initListeners() {
        fromEvent(this.tooltipElement, 'mouseenter').pipe(takeUntil(this.onDestroy$)).subscribe(this.showTooltip.bind(this));

        fromEvent(this.tooltipElement, 'mouseleave')
            .pipe(
                takeUntil(this.onDestroy$),
                filter((event: MouseEvent) => {
                    return this.haveToBeClosed(event);
                })
            )
            .subscribe(this.hideTooltip.bind(this));
    }

    private showTooltip(): void {
        const needToShow = this.calcTruncate();
        if (!needToShow || this.visible) {
            return;
        }
        if (this.directiveRef && !this.fusionTooltip) {
            this.directiveRef.create();
            this.tooltipComponentRef = this.directiveRef.tooltipComponentRef;
        } else if (this.fusionTooltip) {
            this.tooltipComponentRef = this.viewContainerRef.createComponent(TooltipContentComponent);
            this.tooltipComponentRef.instance.tooltipTextContent = this.fusionTooltip;
        } else {
            return;
        }

        this.tooltipComponentRef.changeDetectorRef.detectChanges();
        const rectTooltip = this.tooltipComponentRef.instance.elementRef.nativeElement.getBoundingClientRect();
        this.setTooltipPosition(this.position, rectTooltip);
        this.setTooltipConfiguration();
        this.visible = true;
    }

    private hideTooltip(): void {
        if (!this.visible) {
            return;
        }
        if (this.directiveRef && !this.fusionTooltip) {
            this.directiveRef.destroy();
            this.tooltipComponentRef = null;
        } else if (this.fusionTooltip) {
            this.tooltipComponentRef.destroy();
            this.tooltipComponentRef = null;
        } else {
            return;
        }
        this.visible = false;
    }

    private adjustTooltipPosition(position: TooltipPosition, tooltipWidth: number, tooltipHeight: number, hostRect: any): TooltipPosition {
        if (position === TooltipPosition.TopFixed) {
            return TooltipPosition.Top;
        }

        const isTopPosNegative = hostRect.top + this.elementRef.nativeElement.offsetHeight / 2 - tooltipHeight / 2 >= 0;
        if (window.innerWidth - tooltipWidth - hostRect.left <= 0 && isTopPosNegative) {
            position = TooltipPosition.Left;
        } else if (hostRect.left - tooltipWidth <= 0 && isTopPosNegative) {
            position = TooltipPosition.Right;
        } else if (hostRect.top - tooltipHeight <= 0) {
            position = hostRect.left - tooltipWidth <= 0 && isTopPosNegative ? TooltipPosition.Right : TooltipPosition.Bottom;
        }
        return position;
    }

    private setTooltipPosition(position: TooltipPosition, tooltipElement: any): void {
        let shiftPosition: IShiftPosition;
        const tooltipWidth = this.width || tooltipElement.width;
        const tooltipHeight = this.height || tooltipElement.height;
        const rect = this.elementRef.nativeElement.getBoundingClientRect();
        position = this.adjustTooltipPosition(position, tooltipWidth, tooltipHeight, rect);
        switch (position) {
            case TooltipPosition.Left:
                shiftPosition = {...this.setPositionLeftRight('left', tooltipWidth, tooltipHeight)};
                break;
            case TooltipPosition.Right:
                shiftPosition = {...this.setPositionLeftRight('right', tooltipWidth, tooltipHeight)};
                break;
            case TooltipPosition.Bottom:
                shiftPosition = {...this.setPositionBottomTop('bottom', tooltipWidth, tooltipHeight)};
                break;
            default:
                shiftPosition = {...this.setPositionBottomTop('top', tooltipWidth, tooltipHeight)};
                break;
        }
        const {tooltipLeft, pos} = this.adjustArrowPos(shiftPosition.left, rect.left, position, tooltipWidth);
        this.tooltipPosition = {
            position: pos,
            left: tooltipLeft,
            top: shiftPosition.top + rect.top
        };
    }

    private setTooltipConfiguration(): void {
        this.tooltipComponentRef.instance.tooltipStyleConfiguration = {
            top: this.tooltipPosition.top.toString() + 'px',
            left: this.tooltipPosition.left.toString() + 'px',
            width: this.width?.toString() + 'px',
            height: this.height?.toString() + 'px',
            backgroundColor: this.backgroundColor
        };
        this.tooltipComponentRef.instance.tooltipPositionClass = this.tooltipPosition.position;
    }

    private setPositionLeftRight(pos: 'left' | 'right', tooltipWidth: number, tooltipHeight: number): {top: number; left: number} {
        const position = {
            top: this.elementRef.nativeElement.offsetHeight / 2 - tooltipHeight / 2,
            left: 0
        };
        if (pos === 'left') {
            position.left = 0 - tooltipWidth - 6;
        } else {
            position.left = this.elementRef.nativeElement.offsetWidth + 6;
        }
        return position;
    }

    private setPositionBottomTop(pos: 'bottom' | 'top', tooltipWidth: number, tooltipHeight: number): {top: number; left: number} {
        const position = {
            top: 0,
            left: this.elementRef.nativeElement.offsetWidth / 2 - tooltipWidth / 2
        };
        if (pos === 'bottom') {
            position.top = this.elementRef.nativeElement.offsetHeight + 6;
        } else {
            position.top = 0 - tooltipHeight - 6;
        }
        return position;
    }

    private calcTruncate(): boolean {
        const nativeElement = this.elementRef.nativeElement;
        return !(nativeElement.className.includes('truncate') && nativeElement.clientWidth >= nativeElement.scrollWidth);
    }

    private adjustArrowPos(
        tooltipLeft: number,
        rectLeft: number,
        position: TooltipPosition,
        tooltipWidth: number
    ): {tooltipLeft: number; pos: TooltipPosition} {
        let posLeft = tooltipLeft + rectLeft;
        let newPosition: TooltipPosition = position;

        if (posLeft < 0 && (position === TooltipPosition.Top || position === TooltipPosition.Bottom)) {
            newPosition = position === TooltipPosition.Top ? TooltipPosition.TopLeft : TooltipPosition.BottomLeft;
            posLeft = rectLeft + this.elementRef.nativeElement.offsetWidth / 2 - 20;
        } else if (
            window.innerWidth - Math.round(rectLeft + this.elementRef.nativeElement.offsetWidth) <= 0 &&
            (position === TooltipPosition.Top || position === TooltipPosition.Bottom)
        ) {
            newPosition = position === TooltipPosition.Top ? TooltipPosition.TopRight : TooltipPosition.BottomRight;
            posLeft = rectLeft + this.elementRef.nativeElement.offsetWidth / 2 - tooltipWidth + 20;
        }

        return {tooltipLeft: posLeft, pos: newPosition};
    }

    haveToBeClosed(event: MouseEvent): boolean {
        const marginSize = 10;
        let haveToBeClosed = true;
        const tooltipEl = this.elementRef.nativeElement.querySelector('fusion-tooltip-content');
        if (this.preventTooltipToClose && this.visible && !!tooltipEl) {
            const rectTooltip = tooltipEl.getBoundingClientRect();
            haveToBeClosed = !(
                event.x >= rectTooltip.left - marginSize &&
                event.x <= rectTooltip.right + marginSize &&
                event.y >= rectTooltip.top - marginSize &&
                event.y <= rectTooltip.bottom + marginSize
            );
            if (!haveToBeClosed) {
                fromEvent(tooltipEl, 'mouseleave')
                    .pipe(take(1))
                    .subscribe(() => {
                        this.hideTooltip();
                    });
            }
        }
        return haveToBeClosed;
    }
}

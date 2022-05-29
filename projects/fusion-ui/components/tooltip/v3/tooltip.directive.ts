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
import {takeUntil} from 'rxjs/operators';
import {TooltipContentDirective} from './tooltip-content.directive';

@Directive({selector: '[fusionTooltip]'})
export class TooltipDirective implements OnDestroy, AfterViewInit {
    //todo: Fix React not passing configuration for static mode
    @ContentChild(TooltipContentDirective, {static: true}) directiveRef!: TooltipContentDirective;
    @ContentChild('tooltipTriggerElement', {static: true}) tooltipTriggerElement!: ElementRef;
    @ContentChild('tooltipTriggerElement', {static: true}) viewTriggerContainer!: ViewContainerRef;

    @Input() fusionTooltip = '';
    @Input() set configuration(config: tooltipConfiguration) {
        if (config) {
            this.width = config.width || this.width;
            this.height = config.height || this.height;
            this.backgroundColor = config.backgroundColor || this.backgroundColor;
            this.preventTooltipToClose = config.preventTooltipToClose || this.preventTooltipToClose;
        }
    }

    width: number;
    height: number = 30;
    backgroundColor: string = '#696a6b';
    preventTooltipToClose: boolean = true;

    private onDestroy$ = new Subject<void>();
    private tooltipElementRef: HTMLElement;
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
        this.tooltipElementRef = this.preventTooltipToClose ? this.elementRef.nativeElement : this.tooltipTriggerElement.nativeElement;
        this.initListeners();
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    initListeners() {
        fromEvent(this.tooltipElementRef, 'mouseenter').pipe(takeUntil(this.onDestroy$)).subscribe(this.showTooltip.bind(this));

        fromEvent(this.tooltipElementRef, 'mouseleave').pipe(takeUntil(this.onDestroy$)).subscribe(this.hideTooltip.bind(this));
    }

    private showTooltip(): void {
        if (this.directiveRef && !this.fusionTooltip) {
            this.directiveRef.create();
            this.tooltipComponentRef = this.directiveRef.tooltipComponentRef;
        } else {
            this.tooltipComponentRef = this.viewContainerRef.createComponent(TooltipContentComponent);
            this.tooltipComponentRef.instance.tooltipTextContent = this.fusionTooltip;
        }

        this.setTooltipPosition(this.position);
        this.tooltipComponentRef.changeDetectorRef.markForCheck();
        this.setTooltipConfiguration();
    }

    private hideTooltip(): void {
        if (this.directiveRef && !this.fusionTooltip) {
            this.directiveRef.destroy();
            this.tooltipComponentRef = null;
        } else {
            this.tooltipComponentRef.destroy();
            this.tooltipComponentRef = null;
        }
    }

    private adjustTooltipPosition(position: TooltipPosition): TooltipPosition {
        const hostRect = this.elementRef.nativeElement.getBoundingClientRect();
        if (position === TooltipPosition.TopFixed) {
            return TooltipPosition.Top;
        }
        if (window.innerWidth - this.width - hostRect.left <= 0) {
            position = TooltipPosition.Left;
        } else if (hostRect.left - this.width <= 0) {
            position = TooltipPosition.Right;
        } else if (hostRect.top - this.height <= 0) {
            position = hostRect.bottom - this.height <= 0 ? TooltipPosition.Right : TooltipPosition.Bottom;
        }
        return position;
    }

    private setTooltipPosition(position: TooltipPosition): void {
        let shiftPosition: IShiftPosition;
        position = this.adjustTooltipPosition(position);
        switch (position) {
            case TooltipPosition.Left:
                shiftPosition = {...this.setPositionLeftRight('left')};
                break;
            case TooltipPosition.Right:
                shiftPosition = {...this.setPositionLeftRight('right')};
                break;
            case TooltipPosition.Bottom:
                shiftPosition = {...this.setPositionBottomTop('bottom')};
                break;
            default:
                shiftPosition = {...this.setPositionBottomTop('top')};
                break;
        }
        this.tooltipPosition = {
            position,
            left: shiftPosition.left,
            top: shiftPosition.top
        };
    }

    private setTooltipConfiguration(): void {
        this.tooltipComponentRef.instance.tooltipStyleConfiguration = {
            top: this.tooltipPosition.top.toString() + 'px',
            left: this.tooltipPosition.left.toString() + 'px',
            width: this.width?.toString() + 'px' || null,
            height: this.height?.toString() + 'px',
            backgroundColor: this.backgroundColor
        };
        this.tooltipComponentRef.instance.tooltipPositionClass = this.tooltipPosition.position;
    }

    private setPositionLeftRight(pos: 'left' | 'right'): {top: number; left: number} {
        const position = {
            top: this.elementRef.nativeElement.offsetHeight / 2 - this.height / 2,
            left: 0
        };
        if (pos === 'left') {
            position.left = 0 - this.width - 6;
        } else {
            position.left = this.elementRef.nativeElement.offsetWidth + 6;
        }
        return position;
    }

    private setPositionBottomTop(pos: 'bottom' | 'top'): {top: number; left: number} {
        const position = {
            top: 0,
            left: this.elementRef.nativeElement.offsetWidth / 2 - this.width / 2
        };
        if (pos === 'bottom') {
            position.top = this.elementRef.nativeElement.offsetHeight + 6;
        } else {
            position.top = 0 - this.height - 6;
        }
        return position;
    }
}

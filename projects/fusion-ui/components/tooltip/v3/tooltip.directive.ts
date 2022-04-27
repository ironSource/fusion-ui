import {
    Input,
    Renderer2,
    Directive,
    ElementRef,
    ContentChild,
    OnDestroy,
    OnInit,
    AfterViewInit,
    ViewContainerRef,
    ComponentFactoryResolver,
    HostBinding
} from '@angular/core';
import {TooltipComponent} from './tooltip.component';
import {IShiftPosition, TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FUSION_STYLE_VERSION_CSS_VAR_NAME, WindowService} from '@ironsource/fusion-ui';

@Directive({selector: '[fusionTooltip]'})
export class TooltipDirective implements OnInit, OnDestroy, AfterViewInit {
    @ContentChild(TooltipComponent, {read: TooltipComponent, static: false}) tooltipComponent!: TooltipComponent;

    @Input() fusionTooltip = '';
    @Input() width: number = 150;
    @Input() height: number = 30;
    @Input() backgroundColor: string = '#696a6b';

    onDestroy$ = new Subject<void>();
    toolTipVisible$ = new Subject<boolean>();

    private position = TooltipPosition.Top;
    private tooltipElement: any;
    private tooltipPosition: {
        position: TooltipPosition;
        left: number;
        top: number;
    };

    constructor(
        private renderer: Renderer2,
        private elementRef: ElementRef,
        private window: WindowService,
        public viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    ngOnInit() {
        this.initListeners();
    }

    ngAfterViewInit() {
        this.setTooltipContent();
        this.tooltipElement.style.display = 'none';
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    initListeners() {
        fromEvent(this.elementRef.nativeElement, 'mouseenter')
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(_ => {
                this.setTooltipPosition(this.position);
            });

        fromEvent(this.elementRef.nativeElement, 'mouseleave')
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(_ => {
                this.toolTipVisible$.next(false);
            });

        this.toolTipVisible$.pipe(takeUntil(this.onDestroy$)).subscribe(visible => {
            this.tooltipElement.style.display = !visible ? 'none' : 'flex';
            this.changeHostClass('fu-tooltip-show', visible, this.tooltipElement);
        });
    }

    private adjustTooltipPosition(position: TooltipPosition): TooltipPosition {
        const hostRect = this.elementRef.nativeElement.getBoundingClientRect();

        if (position === TooltipPosition.TopFixed) {
            return TooltipPosition.Top;
        }

        if (this.window.nativeWindow.innerWidth - this.width - hostRect.left <= 0) {
            position = TooltipPosition.Left;
        } else if (hostRect.left - this.width <= 0) {
            position = TooltipPosition.Right;
        } else if (hostRect.top - this.height <= 0) {
            position = hostRect.left - this.width <= 0 ? TooltipPosition.Right : TooltipPosition.Left;
        }
        return position;
    }

    private setTooltipPosition(position: TooltipPosition): void {
        let shiftPosition: IShiftPosition;
        position = this.adjustTooltipPosition(position);
        switch (position) {
            case TooltipPosition.Left:
                shiftPosition = {
                    top:
                        this.elementRef.nativeElement.getBoundingClientRect().top -
                        this.height / 2 +
                        this.elementRef.nativeElement.offsetHeight / 2,
                    left: this.elementRef.nativeElement.getBoundingClientRect().left - this.width - 6
                };
                break;
            case TooltipPosition.Right:
                shiftPosition = {
                    top:
                        this.elementRef.nativeElement.getBoundingClientRect().top -
                        this.height / 2 +
                        this.elementRef.nativeElement.offsetHeight / 2,
                    left: this.elementRef.nativeElement.getBoundingClientRect().left + this.elementRef.nativeElement.offsetWidth + 5
                };
                break;
            case TooltipPosition.Bottom:
                shiftPosition = {
                    top: this.elementRef.nativeElement.getBoundingClientRect().bottom + 6,
                    left:
                        this.elementRef.nativeElement.getBoundingClientRect().left +
                        (this.elementRef.nativeElement.offsetWidth / 2 - this.width / 2)
                };
                break;
            default:
                shiftPosition = {
                    top: this.elementRef.nativeElement.getBoundingClientRect().top - this.height - 6,
                    left:
                        this.elementRef.nativeElement.getBoundingClientRect().left +
                        (this.elementRef.nativeElement.offsetWidth / 2 - this.width / 2)
                };
                break;
        }
        this.tooltipPosition = {
            position,
            left: shiftPosition.left,
            top: shiftPosition.top
        };
        this.showTooltip();
    }

    private showTooltip(): void {
        const {position} = this.tooltipPosition;
        this.changeHostClass('fu-tooltip-' + TooltipPosition[position].toLowerCase(), true, this.tooltipElement);
        this.setTooltipConfiguration();
        this.toolTipVisible$.next(true);
    }

    private setTooltipConfiguration(): void {
        this.tooltipElement.style.top = this.tooltipPosition.top.toString() + 'px';
        this.tooltipElement.style.left = this.tooltipPosition.left.toString() + 'px';
        this.tooltipElement.style.width = this.width.toString() + 'px';
        this.tooltipElement.style.height = this.height.toString() + 'px';
        this.tooltipElement.style.setProperty('--fu-tooltip-background-color', this.backgroundColor);
    }

    private setTooltipContent(): void {
        if (this.tooltipComponent) {
            this.tooltipElement = this.tooltipComponent.elementRef.nativeElement;
        } else {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
            const componentRef = this.viewContainerRef.createComponent(componentFactory);
            this.tooltipElement = componentRef.location.nativeElement;
            this.tooltipElement.innerHTML = this.fusionTooltip;
        }
    }

    private changeHostClass(className: string, add: boolean, element: any): void {
        const classAction = add ? 'addClass' : 'removeClass';
        this.renderer[classAction](element, className);
    }
}

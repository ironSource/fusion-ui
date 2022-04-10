import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Injector,
    Input,
    OnChanges,
    Renderer2,
    SimpleChanges
} from '@angular/core';
import {IShiftPosition, ITooltipData, TooltipPosition, TooltipType} from './tooltip.entities';
import {WindowService} from '@ironsource/fusion-ui/services/window';
import {FusionBaseComponent} from '@ironsource/fusion-ui/components/style';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

const TOOLTIP_ARROW_SIZE = 6;

@Component({
    selector: 'fusion-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss', './tooltip.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent extends FusionBaseComponent implements AfterViewInit, OnChanges {
    public content: string | SafeHtml;
    public componentData: any;
    public icon: string | {iconName: string; iconVersion: string};
    private position: TooltipPosition;
    private hostEl: ElementRef;
    private type: TooltipType;
    @Input() set tooltipData(newTooltipData: ITooltipData) {
        this.hostEl = newTooltipData.parentEl;
        this.position = newTooltipData.position || TooltipPosition.Top;
        this.content =
            newTooltipData.type === TooltipType.Html
                ? this.sanitizer.bypassSecurityTrustHtml(newTooltipData.content)
                : newTooltipData.content;
        this.width = newTooltipData.width;
        this.icon = newTooltipData.icon;
        this.type = newTooltipData.type || TooltipType.Html;
        this.componentData = newTooltipData.componentData || {};
        const classToRemove = Array.from(this.tooltipElRef.nativeElement.classList).find((value: string) => value.includes('is-position-'));
        this.renderer.removeClass(this.tooltipElRef.nativeElement, classToRemove as string);
    }
    @HostBinding('style.width.px') width: number;

    public get hasIcon(): boolean {
        return !!this.icon;
    }

    public get isHtml() {
        return this.type === TooltipType.Html;
    }

    constructor(
        injector: Injector,
        private tooltipElRef: ElementRef,
        private window: WindowService,
        private renderer: Renderer2,
        private sanitizer: DomSanitizer
    ) {
        super(injector);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!changes.tooltipData.isFirstChange()) {
            this._setPosition();
        }
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
        this._setPosition();
    }

    /**
     * Reposition Tooltip Content
     */
    _setPosition() {
        if (!isNullOrUndefined(this.hostEl)) {
            const positionOffset: IShiftPosition = this._calcPosition(
                this.position,
                this.tooltipElRef.nativeElement,
                this.hostEl.nativeElement
            );

            const rect = this.hostEl.nativeElement.getBoundingClientRect();
            this.renderer.setStyle(this.tooltipElRef.nativeElement, 'top', rect.top + positionOffset.top + 'px');
            this.renderer.setStyle(this.tooltipElRef.nativeElement, 'left', rect.left + positionOffset.left + 'px');
        }
    }

    _adjustPosition(position: TooltipPosition, tooltipEl, hostEl): TooltipPosition {
        // for fixed, not calculated Position type
        if (position === TooltipPosition.TopFixed) {
            return TooltipPosition.Top;
        }

        const tooltipWidth = this.width || 250;
        const hostRect = hostEl.getBoundingClientRect();
        const tooltipRect = tooltipEl.getBoundingClientRect();

        if (this.window.nativeWindow.innerWidth - tooltipWidth - hostRect.left <= 0) {
            // tooltip host on right side of page
            position = TooltipPosition.Left;
        } else if (hostRect.left - tooltipWidth <= 0) {
            // tooltip host on left side of page
            position = TooltipPosition.Right;
        } else if (hostRect.top - tooltipRect.height <= 0) {
            position = hostRect.left - tooltipWidth <= 0 ? TooltipPosition.Right : TooltipPosition.Left;
        }

        return position;
    }

    /**
     * Calculate position
     * @param TooltipPosition position
     */
    _calcPosition(position: TooltipPosition, tooltipEl: any, hostEl: any): IShiftPosition {
        let shiftPosition: IShiftPosition;
        position = this._adjustPosition(position, tooltipEl, hostEl);

        this.renderer.addClass(this.tooltipElRef.nativeElement, 'is-position-' + TooltipPosition[position].toLowerCase());

        switch (position) {
            case TooltipPosition.Left:
                shiftPosition = {
                    top: hostEl.offsetHeight / 2 - tooltipEl.offsetHeight / 2,
                    left: 0 - tooltipEl.offsetWidth - TOOLTIP_ARROW_SIZE
                };
                break;
            case TooltipPosition.Right:
                shiftPosition = {
                    top: hostEl.offsetHeight / 2 - tooltipEl.offsetHeight / 2,
                    left: hostEl.offsetWidth + TOOLTIP_ARROW_SIZE
                };
                break;
            case TooltipPosition.Bottom:
                shiftPosition = {
                    top: hostEl.offsetHeight + TOOLTIP_ARROW_SIZE,
                    left: hostEl.offsetWidth / 2 - tooltipEl.offsetWidth / 2
                };
                break;
            default:
                // TooltipPosition.Top
                shiftPosition = {
                    top: 0 - tooltipEl.offsetHeight - TOOLTIP_ARROW_SIZE,
                    left: hostEl.offsetWidth / 2 - tooltipEl.offsetWidth / 2
                };
                break;
        }

        return shiftPosition;
    }
}

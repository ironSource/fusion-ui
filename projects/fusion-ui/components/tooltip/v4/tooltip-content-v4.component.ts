import {ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, TemplateRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipComponentStyleConfiguration, TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';

@Component({
    selector: 'fusion-tooltip-content',
    standalone: true,
    imports: [CommonModule],
    template: ` <div class="fu-tooltip-component">
        <ng-container *ngIf="!tooltipInnerText" [ngTemplateOutlet]="temp"></ng-container>
        <span *ngIf="tooltipInnerText">{{ tooltipInnerText }}</span>
        <div class="fu-tooltip-arrow"></div>
    </div>`,
    styleUrls: ['./tooltip-content-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipContentV4Component {
    /** @internal */
    tooltipInnerText: string;
    /** @internal */
    position: string;
    /** @internal */
    temp: TemplateRef<any>;

    @Input() set tooltipTextContent(text: string) {
        if (text) {
            this.tooltipInnerText = text;
        }
    }

    /** @internal */
    @Input() set templateRef(template: TemplateRef<any>) {
        this.temp = template;
    }

    @Input() set tooltipPositionClass(pos: TooltipPosition) {
        this.position = TooltipPosition[pos]?.toLowerCase();
        this.renderer.addClass(this.elementRef.nativeElement, 'fu-tooltip-' + this.position);
    }

    @Input() set tooltipStyleConfiguration(config: TooltipComponentStyleConfiguration) {
        if (config) {
            this.setTooltipStyle(config);
        }
    }

    constructor(
        /** @internal */
        public elementRef: ElementRef,
        private renderer: Renderer2
    ) {}

    private setTooltipStyle(propertyValue: {[key: string]: string}) {
        Object.keys(propertyValue).forEach(val => {
            if (val === 'backgroundColor' && !!propertyValue[val]) {
                this.elementRef.nativeElement.style.setProperty('--fu-tooltip-background-color', propertyValue[val]);
            } else {
                this.renderer.setStyle(this.elementRef.nativeElement, val, propertyValue[val]);
            }
        });
    }
}

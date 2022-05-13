import {ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, TemplateRef} from '@angular/core';
import {TooltipComponentStyleConfiguration, TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';

@Component({
    selector: 'fusion-tooltip-content',
    template: ` <div class="fu-tooltip-component" [ngClass]="'fu-tooltip-' + position">
        <ng-container [ngTemplateOutlet]="temp"></ng-container>
    </div>`,
    styleUrls: ['./tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipContentComponent {
    position: string;
    temp: TemplateRef<any>;

    @Input() set templateRef(template: TemplateRef<any>) {
        this.temp = template;
    }

    @Input() set tooltipPositionClass(pos: TooltipPosition) {
        this.position = TooltipPosition[pos].toLowerCase();
    }

    @Input() set tooltipStyleConfiguration(config: TooltipComponentStyleConfiguration) {
        if (config) {
            this.setTooltipStyle(config);
        }
    }

    constructor(public elementRef: ElementRef, private renderer: Renderer2) {}

    private setTooltipStyle(propertyValue: {[key: string]: string}) {
        Object.keys(propertyValue).forEach(val => {
            if (val === 'backgroundColor') {
                this.elementRef.nativeElement.style.setProperty('--fu-tooltip-background-color', propertyValue[val]);
            } else {
                this.renderer.setStyle(this.elementRef.nativeElement, val, propertyValue[val]);
            }
        });
    }
}

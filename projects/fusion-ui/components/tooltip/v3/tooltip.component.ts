import {ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, TemplateRef} from '@angular/core';
import {TooltipComponentStyleConfiguration, TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';

@Component({
    selector: 'fusion-tooltip',
    template: `<ng-container [ngTemplateOutlet]="templateRef"></ng-container>`,
    styleUrls: ['./tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
    constructor(public elementRef: ElementRef, private renderer: Renderer2) {}

    @Input() templateRef: TemplateRef<any>;

    @Input() set tooltipTextContent(text: string) {
        this.setTooltipInnerText(text);
    }

    @Input() set tooltipPositionClass(pos: TooltipPosition) {
        this.changeHostClass('fu-tooltip-' + TooltipPosition[pos].toLowerCase(), true, this.elementRef);
    }

    @Input() set tooltipStyleConfiguration(config: TooltipComponentStyleConfiguration) {
        if (config) {
            this.setTooltipStyle(config);
        }
    }

    private setTooltipStyle(propertyValue: {[key: string]: string | number}) {
        Object.keys(propertyValue).forEach(val => {
            if (val === 'backgroundColor') {
                this.elementRef.nativeElement.style.setProperty('--fu-tooltip-background-color', propertyValue[val]);
            } else {
                this.renderer.setStyle(this.elementRef.nativeElement, val, propertyValue[val]);
            }
        });
    }

    private setTooltipInnerText(text: string) {
        if (text) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', text);
        }
    }

    private changeHostClass(className: string, add: boolean, element: ElementRef): void {
        const classAction = add ? 'addClass' : 'removeClass';
        this.renderer[classAction](element.nativeElement, className);
    }
}

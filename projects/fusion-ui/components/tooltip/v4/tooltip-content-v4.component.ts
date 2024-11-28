import {ChangeDetectionStrategy, Component, ElementRef, Injector, Input, Renderer2, TemplateRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipComponentStyleConfiguration, TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {TooltipTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

@Component({
    selector: 'fusion-tooltip-content',
    standalone: true, // todo: just for storybook to work, will be fixed in storybook 8.5.0
    host: {class: 'fusion-v4'},
    imports: [CommonModule],
    template: ` <div class="fu-tooltip-component" [attr.data-testid]="testId">
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

    @Input() testId: string;

    @Input() set tooltipTextContent(text: string) {
        if (text) {
            this.tooltipInnerText = text;
        }
    }

    /** @internal */
    testIdTooltipModifiers: typeof TooltipTestIdModifiers = TooltipTestIdModifiers;
    /** @internal */
    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    /** @internal */
    @Input() set templateRef(template: TemplateRef<any>) {
        this.temp = template;
    }

    @Input() set tooltipPositionClass(pos: TooltipPosition) {
        this.position = TooltipPosition[pos]?.toLowerCase();
        if (!!this.position) {
            this.renderer.addClass(this.elementRef.nativeElement, 'fu-tooltip-' + this.position);
        }
    }

    @Input() set tooltipStyleConfiguration(config: TooltipComponentStyleConfiguration) {
        if (config) {
            this.setTooltipStyle(config);
        }
    }

    constructor(
        /** @internal */
        public elementRef: ElementRef,
        private renderer: Renderer2,
        private injector: Injector
    ) {}

    suppressTooltipArrow(suppressPositionArrow: boolean) {
        if (suppressPositionArrow) {
            this.renderer.addClass(this.elementRef.nativeElement, 'fu-tooltip-no-arrow');
        }
    }

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

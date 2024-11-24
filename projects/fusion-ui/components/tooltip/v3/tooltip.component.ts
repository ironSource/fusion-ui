import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {tooltipConfiguration} from '@ironsource/fusion-ui/components/tooltip/common/base';

@Component({
    selector: 'fusion-tooltip',
    template: `
        <div class="tooltip-container" [fusionTooltip]="tooltipText" [configuration]="tooltipConfig">
            <div #tooltipTriggerElement>
                <ng-content select=".fusionTooltipTrigger"></ng-content>
            </div>
            <div *fusionTooltipContent>
                <ng-content select=".fusionTooltipContent"></ng-content>
            </div>
        </div>
    `,
    styles: [
        `
            .tooltip-container {
                display: inline-block;
                position: relative;
            }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TooltipComponent {
    /** @internal */
    @Input() set fusionTooltipText(value: string) {
        this.tooltipText = value;
    }
    /** @internal */
    @Input() set tooltipConfiguration(value: tooltipConfiguration) {
        this.tooltipConfig = {...value};
    }

    /** @internal */
    tooltipConfig: tooltipConfiguration;
    /** @internal */
    tooltipText: string = '';
}

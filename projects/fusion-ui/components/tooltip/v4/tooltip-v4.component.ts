import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {tooltipConfiguration} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {TooltipV4Directive} from './tooltip-v4.directive';
import {TooltipContentV4Directive} from './tooltip-content-v4.directive';

@Component({
    selector: 'fusion-tooltip',
    standalone: true,
    imports: [CommonModule, TooltipV4Directive, TooltipContentV4Directive],
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
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipV4Component {
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

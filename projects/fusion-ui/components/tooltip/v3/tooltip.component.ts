import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TooltipBaseComponent} from '../common/v3-v4/tooltip-base.component';

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
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent extends TooltipBaseComponent {}

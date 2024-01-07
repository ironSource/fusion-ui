import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipBaseComponent} from '../common/v3-v4/tooltip-base.component';
import {TooltipV4Directive} from './tooltip-v4.directive';
import {TooltipContentV4Directive} from './tooltip-content-v4.directive';
import {TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';

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
export class TooltipV4Component extends TooltipBaseComponent {
    position = TooltipPosition.Bottom;
}

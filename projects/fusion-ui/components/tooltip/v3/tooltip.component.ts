import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TooltipComponentStyleConfiguration, tooltipConfiguration} from '@ironsource/fusion-ui/components/tooltip/common/base';

@Component({
    selector: 'fusion-tooltip',
    template: `
        <div class="tooltip-container" [fusionTooltip]="tooltipText" [configuration]="tooltipConfig">
            <div><ng-content></ng-content></div>
            <ng-container *ngIf="!tooltipText">
                <div *fusionTooltipContent>
                    <ng-content select=".tooltipContent"></ng-content>
                </div>
            </ng-container>
        </div>
    `,
    styles: [
        `
            .tooltip-container {
                display: inline-block;
            }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
    @Input() set fusionTooltip(value: string) {
        this.tooltipText = value;
    }
    @Input() set tooltipConfiguration(value: tooltipConfiguration) {
        this.tooltipConfig = value;
    }
    tooltipConfig: tooltipConfiguration;
    tooltipText: string;
}

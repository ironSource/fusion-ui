import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {tooltipConfiguration} from '@ironsource/fusion-ui/components/tooltip/common/base';

@Component({
    selector: 'fusion-tooltip',
    template: `
        <div class="tooltip-container" fusionTooltip [configuration]="tooltipConfig">
            <div #tooltipTriggerElement>
                <ng-content></ng-content>
            </div>
            <div *fusionTooltipContent>
                <ng-container *ngIf="!tooltipText">
                    <ng-content select=".fusionTooltipContent"></ng-content>
                </ng-container>
                <span *ngIf="tooltipText">{{ tooltipText }}</span>
            </div>
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
    @Input() set fusionTooltipText(value: string) {
        this.tooltipText = value;
    }
    @Input() set tooltipConfiguration(value: tooltipConfiguration) {
        this.tooltipConfig = value;
    }

    tooltipConfig: tooltipConfiguration;
    tooltipText: string = '';
}

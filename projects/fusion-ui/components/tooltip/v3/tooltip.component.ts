import {Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-tooltip',
    template: `
        <div class="tooltip-container" [fusionTooltip]="tooltipText">
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
    ]
})
export class TooltipComponent {
    @Input() set fusionTooltip(value: string) {
        this.tooltipText = value;
    }

    tooltipText: string;
}

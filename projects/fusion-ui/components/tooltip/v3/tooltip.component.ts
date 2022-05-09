import {Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-tooltip',
    template: `<div class="tooltip-container">
        <div [fusionTooltip]="tooltipText">
            <div><ng-content></ng-content></div>
            <ng-container *ngIf="!tooltipText">
                <div *fusionTooltipContent>
                    <ng-content select=".tooltipWithContent"></ng-content>
                </div>
            </ng-container>
        </div>
    </div>`,
    styles: [
        `
            .tooltip-container {
                display: flex;
                justify-content: center;
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

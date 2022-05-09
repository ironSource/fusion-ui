import {Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-tooltip',
    template: `<div [fusionTooltip]="tooltipText">
        <div><ng-content></ng-content></div>
        <ng-container *ngIf="!tooltipText">
            <div *fusionTooltipContent>
                <ng-content select=".tooltipWithContent"></ng-content>
            </div>
        </ng-container>
    </div>`
})
export class TooltipComponent {
    @Input() set fusionTooltip(value: string) {
        this.tooltipText = value;
    }

    tooltipText: string;
}

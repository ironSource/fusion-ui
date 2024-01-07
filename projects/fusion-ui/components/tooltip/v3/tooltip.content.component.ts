import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TooltipContentBaseComponent} from '../common/v3-v4/tooltip.content-base.component';

@Component({
    selector: 'fusion-tooltip-content',
    template: ` <div class="fu-tooltip-component">
        <ng-container *ngIf="!tooltipInnerText" [ngTemplateOutlet]="temp"></ng-container>
        <span *ngIf="tooltipInnerText">{{ tooltipInnerText }}</span>
    </div>`,
    styleUrls: ['./tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipContentComponent extends TooltipContentBaseComponent {}

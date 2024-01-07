import {ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, TemplateRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipContentBaseComponent} from '../common/v3-v4/tooltip.content-base.component';

@Component({
    selector: 'fusion-tooltip-content',
    standalone: true,
    imports: [CommonModule],
    template: ` <div class="fu-tooltip-component">
        <ng-container *ngIf="!tooltipInnerText" [ngTemplateOutlet]="temp"></ng-container>
        <span *ngIf="tooltipInnerText">{{ tooltipInnerText }}</span>
        <div class="fu-tooltip-arrow"></div>
    </div>`,
    styleUrls: ['./tooltip-content-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipContentV4Component extends TooltipContentBaseComponent {}

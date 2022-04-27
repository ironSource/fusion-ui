import {ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';

@Component({
    selector: 'fusion-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
    constructor(public elementRef: ElementRef) {}
}

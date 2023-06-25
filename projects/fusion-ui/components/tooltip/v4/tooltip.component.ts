import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';

@Component({
    selector: 'fusion-tooltip',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit {
    @Input() position: TooltipPosition;

    @HostBinding('attr.role') get role() {
        return 'tooltip';
    }

    get positionClass(): string {
        return TooltipPosition[this.position] ? `fu-tooltip-${TooltipPosition[this.position]}`.toLowerCase() : '';
    }

    constructor() {}

    ngOnInit(): void {}
}

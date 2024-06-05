import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SelectedPeriods} from './date-range-tooltip.entities';

@Component({
    selector: 'fusion-date-range-tooltip',
    standalone: true,
    imports: [],
    templateUrl: './date-range-tooltip.component.html',
    styleUrl: './date-range-tooltip.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateRangeTooltipComponent {
    @Input() datePeriods!: SelectedPeriods | null;
}

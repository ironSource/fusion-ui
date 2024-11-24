import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MONTH_PICKER_PLACEHOLDER, MonthPicker, MonthPickerPlaceholder} from '@ironsource/fusion-ui/components/month-picker/common/base';

@Component({
    selector: 'fusion-month-picker-placeholder',
    templateUrl: './month-picker-placeholder.component.html',
    styleUrls: ['./month-picker-placeholder.component.scss', './month-picker-placeholder-v1.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class MonthPickerPlaceholderComponent {
    @Input() placeholder: MonthPickerPlaceholder = MONTH_PICKER_PLACEHOLDER;
    @Input() selected: MonthPicker;

    arrowIconName = {iconName: 'arrow-dropdown', iconVersion: 'v1'};

    get selectedDate(): Date {
        return new Date(`${this.selected?.year}-${this.selected?.month + 1}-10`);
    }
}

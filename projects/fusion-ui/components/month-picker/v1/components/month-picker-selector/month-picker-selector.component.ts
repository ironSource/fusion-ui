import {ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {MONTH_NAMES_SHORT, MonthPicker} from '@ironsource/fusion-ui/components/month-picker/common/base';

@Component({
    selector: 'fusion-month-picker-selector',
    templateUrl: './month-picker-selector.component.html',
    styleUrls: ['./month-picker-selector.component.scss', './month-picker-selector-v1.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthPickerSelectorComponent implements OnInit {
    @Input() min: MonthPicker;
    @Input() max: MonthPicker;

    @Input() set selected(value: MonthPicker) {
        if (isNullOrUndefined(value)) {
            this.setDefaultYear();
        } else {
            this.year = value.year;
            this.selectedValue = value;
        }
    }

    @Output() selectedChange = new EventEmitter<MonthPicker>();

    monthNames = MONTH_NAMES_SHORT.en;
    year: number;
    currentMonthPicker: MonthPicker;
    selectedValue: MonthPicker;

    arrowLeftIconName = {iconName: 'arrow-right', iconVersion: 'v1'};
    arrowRightIconName = {iconName: 'arrow-right', iconVersion: 'v1'};

    ngOnInit() {
        this.setDefaultYear();
    }

    isMonthDisabled(monthIndex: number): boolean {
        return (
            (this.year === this.min?.year && monthIndex < this.min?.month) || (this.year === this.max?.year && monthIndex > this.max?.month)
        );
    }

    isMonthSelected(monthIndex: number): boolean {
        if (!isNullOrUndefined(this.selectedValue)) {
            return this.year === this.selectedValue?.year && monthIndex === this.selectedValue?.month;
        }
        return false;
    }

    onYearChange(isNext: boolean) {
        this.year = isNext ? this.year + 1 : this.year - 1;
    }

    selectMonth(idx: number) {
        this.selectedValue = {year: this.year, month: idx};
        this.selectedChange.emit(this.selectedValue);
    }

    private setDefaultYear() {
        const defaultDate = new Date(new Date().setDate(10));
        this.currentMonthPicker = {month: defaultDate.getMonth(), year: defaultDate.getFullYear()};
        this.year = this.currentMonthPicker.year;
    }
}

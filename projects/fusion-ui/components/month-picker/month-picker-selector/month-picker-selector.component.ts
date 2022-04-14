import {ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter, Injector} from '@angular/core';
import {MonthPicker} from '../month-picker';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {MONTH_NAMES_SHORT} from '../month-picker.configuration';
import {StyleBase} from '@ironsource/fusion-ui/components/style';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {StyleVersion} from '@ironsource/fusion-ui/services/version';
import {IconData} from '@ironsource/fusion-ui';

@Component({
    selector: 'fusion-month-picker-selector',
    templateUrl: './month-picker-selector.component.html',
    styleUrls: [
        './month-picker-selector.component.scss',
        './month-picker-selector-v1.component.scss',
        './month-picker-selector-v2.component.scss'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthPickerSelectorComponent extends StyleBase implements OnInit {
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

    arrowLeftIconName$: Observable<IconData> = this.selectedVersion$.pipe(
        map(styleVersion =>
            styleVersion === StyleVersion.V2 ? {iconName: 'arrow-left', iconVersion: 'v2'} : {iconName: 'arrow-right', iconVersion: 'v1'}
        ),
        startWith({iconName: 'arrow-right', iconVersion: 'v1'})
    );
    arrowRightIconName$: Observable<IconData> = this.selectedVersion$.pipe(
        map(styleVersion =>
            styleVersion === StyleVersion.V2 ? {iconName: 'arrow-right', iconVersion: 'v2'} : {iconName: 'arrow-right', iconVersion: 'v1'}
        ),
        startWith({iconName: 'arrow-right', iconVersion: 'v1'})
    );

    constructor(injector: Injector) {
        super(injector);
    }

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

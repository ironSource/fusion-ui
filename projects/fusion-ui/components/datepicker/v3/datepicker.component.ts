import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {DatepickerOptions} from './datepicker.entities';
import {DaterangeOptions} from '@ironsource/fusion-ui/components/daterange/entities/daterange-options';

const DEFAULT_OPTIONS = {
    calendarAmount: 1,
    presets: []
};

@Component({
    selector: 'fusion-datepicker',
    template: `<fusion-daterange
        [minDate]="daterangeMinDate"
        [maxDate]="daterangeMaxDate"
        [options]="daterangeOptions"
        formControl="daterangeFormControl"
    ></fusion-daterange>`,
    styles: [':host { margin: 0; padding: 0 }'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DatepickerComponent),
            multi: true
        }
    ]
})
export class DatepickerComponent implements ControlValueAccessor {
    @Input() set options(value: DatepickerOptions) {
        this.daterangeOptions = {...DEFAULT_OPTIONS, ...value};
    }
    @Input() set minDate(value: Date) {
        this.daterangeMinDate = value;
    }
    @Input() set maxDate(value: Date) {
        this.daterangeMaxDate = value;
    }

    daterangeOptions: DaterangeOptions = {...DEFAULT_OPTIONS};
    daterangeFormControl: FormControl = new FormControl({date: new Date()});
    daterangeMinDate: Date;
    daterangeMaxDate: Date;

    propagateChange = (_: any) => {};
    propagateTouched = () => {};
    writeValue(value: Date): void {
        // this.daterangeFormControl.setValue({date: value}, {emitEvent: false})
    }
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }
}

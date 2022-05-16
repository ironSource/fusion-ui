import {ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {DatepickerOptions, DatepickerSelection} from './datepicker.entities';
import {DaterangeOptions} from '@ironsource/fusion-ui/components/daterange/entities/daterange-options';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

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
        [formControl]="daterangeFormControl"
    ></fusion-daterange>`,
    styles: [':host { margin: 0; padding: 0;} fusion-daterange {width: 240px}'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DatepickerComponent),
            multi: true
        }
    ]
})
export class DatepickerComponent implements OnInit, OnDestroy, ControlValueAccessor {
    @Input() set options(value: DatepickerOptions) {
        this.daterangeOptions = {...DEFAULT_OPTIONS, ...value};
    }
    @Input() set minDate(value: Date) {
        this.daterangeMinDate = value;
    }
    @Input() set maxDate(value: Date) {
        this.daterangeMaxDate = value;
    }

    onDestroy$ = new Subject<void>();

    daterangeOptions: DaterangeOptions = {...DEFAULT_OPTIONS};
    daterangeFormControl: FormControl = new FormControl();
    daterangeMinDate: Date;
    daterangeMaxDate: Date;

    ngOnInit() {
        this.daterangeFormControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
            this.propagateChange(value);
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    propagateChange = (_: DatepickerSelection) => {};
    propagateTouched = () => {};
    writeValue(value: DatepickerSelection): void {
        this.daterangeFormControl.setValue(value, {emitEvent: false});
    }
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }
}

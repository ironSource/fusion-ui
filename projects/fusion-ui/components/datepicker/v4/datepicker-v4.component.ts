import {ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {DaterangeOptions} from '@ironsource/fusion-ui/components/daterange';
import {DaterangeComponent} from '@ironsource/fusion-ui/components/daterange/v4';
import {DatepickerOptions, DatepickerSelection} from './datepicker-v4.entities';
import {isDate} from '@ironsource/fusion-ui/utils';

const DEFAULT_OPTIONS = {
    calendarAmount: 1,
    placeholder: 'Select date',
    presets: []
};

@Component({
    selector: 'fusion-datepicker',
    host: {class: 'fusion-v4'},
    imports: [CommonModule, ReactiveFormsModule, DaterangeComponent],
    template: `<fusion-daterange
        [minDate]="daterangeMinDate"
        [maxDate]="daterangeMaxDate"
        [options]="daterangeOptions"
        [formControl]="daterangeFormControl"
        [testId]="testId"
    ></fusion-daterange>`,
    styleUrl: './datepicker-v4.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DatepickerV4Component),
            multi: true
        }
    ]
})
export class DatepickerV4Component implements OnInit, OnDestroy, ControlValueAccessor {
    @Input() set options(value: DatepickerOptions) {
        this.daterangeOptions = {...DEFAULT_OPTIONS, ...value};
    }
    @Input() set minDate(value: Date) {
        this.daterangeMinDate = new Date(value);
    }
    @Input() set maxDate(value: Date) {
        this.daterangeMaxDate = new Date(value);
    }

    @Input() testId: string;

    private onDestroy$ = new Subject<void>();

    /** @internal */
    daterangeOptions: DaterangeOptions = {...DEFAULT_OPTIONS};
    /** @internal */
    daterangeFormControl: FormControl = new FormControl();
    /** @internal */
    daterangeMinDate: Date;
    /** @internal */
    daterangeMaxDate: Date;

    /** @internal */
    ngOnInit() {
        this.daterangeFormControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
            this.propagateChange(value);
        });
    }
    /** @internal */
    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
    /** @internal */
    propagateChange = (_: DatepickerSelection) => {};
    /** @internal */
    propagateTouched = () => {};
    /** @internal */
    writeValue(value: DatepickerSelection): void {
        this.daterangeFormControl.setValue(value, {emitEvent: false});
    }
    /** @internal */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    /** @internal */
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }
}

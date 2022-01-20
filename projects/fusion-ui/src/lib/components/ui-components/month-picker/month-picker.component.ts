import {ChangeDetectionStrategy, Component, forwardRef, Injector, Input} from '@angular/core';
import {MONTH_PICKER_PLACEHOLDER} from './month-picker.configuration';
import {MonthPicker, MonthPickerConfiguration, MonthPickerPlaceholder} from './month-picker';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {isNullOrUndefined, isNumber} from '../../../utils';
import {BehaviorSubject} from 'rxjs';
import {StyleBase} from '../../style/style-base';

@Component({
    selector: 'fusion-month-picker',
    templateUrl: './month-picker.component.html',
    styleUrls: ['./month-picker.component.scss', './month-picker-v1.component.scss', './month-picker-v2.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MonthPickerComponent),
            multi: true
        }
    ]
})
export class MonthPickerComponent extends StyleBase {
    @Input() set configuration(value: MonthPickerConfiguration) {
        this.config.placeholder = this.setPlaceholder(value.placeholder);
        this.config.min = value.min;
        this.config.max = value.max;
    }
    @Input() set disabled(value: boolean) {
        this.setDisabledState(value);
    }
    @Input() error = '';

    config: MonthPickerConfiguration = {
        placeholder: this.setPlaceholder()
    };
    isOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    isDisabled = false;
    selected: MonthPicker;

    constructor(injector: Injector) {
        super(injector);
    }

    onOutsideClick() {
        if (this.isOpen$.getValue()) {
            this.isOpen$.next(false);
        }
    }

    onMonthPlaceholderClicked() {
        if (!this.isDisabled) {
            this.isOpen$.next(!this.isOpen$.getValue());
        }
        this.propagateTouched();
    }

    onSelectedChanged(selected: MonthPicker) {
        this.propagateTouched();
        this.selected = selected;
        this.propagateChange(this.selected);
    }

    propagateChange = (_: MonthPicker) => {};

    propagateTouched = () => {};

    writeValue(value: MonthPicker): void {
        if (!isNullOrUndefined(value) && isNumber(value.year) && isNumber(value.month)) {
            this.selected = {year: value.year, month: value.month};
        } else {
            this.selected = null;
        }
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    private setPlaceholder(placeholder?: MonthPickerPlaceholder | string): MonthPickerPlaceholder {
        const defaultPlaceholder = MONTH_PICKER_PLACEHOLDER;
        if (!isNullOrUndefined(placeholder)) {
            if (typeof placeholder === 'string') {
                return {...defaultPlaceholder, text: placeholder};
            } else {
                return {
                    text: placeholder.text ?? defaultPlaceholder.text,
                    prefix: placeholder.prefix ?? defaultPlaceholder.prefix,
                    format: placeholder.format ?? defaultPlaceholder.format
                };
            }
        }
        return defaultPlaceholder;
    }
}

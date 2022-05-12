import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {DaterangeBaseComponent} from '../common/base/daterange.base.component';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {DaterangeSelection} from '../../entities/daterange-selection';
import {BehaviorSubject} from 'rxjs';
import {DropdownSelectConfigurations} from '@ironsource/fusion-ui';

@Component({
    selector: 'fusion-daterange',
    templateUrl: './daterange.component.html',
    styleUrls: ['./daterange.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DaterangeComponent),
            multi: true
        }
    ]
})
export class DaterangeComponent extends DaterangeBaseComponent {
    dropdownSelectConfigurations$ = new BehaviorSubject<DropdownSelectConfigurations>({
        dropdownArrowIconName: {iconName: 'arrow-down', iconVersion: 'v2'}
    });

    pevIconName = {iconName: 'arrow-left', iconVersion: 'v2'};
    nextIconName = {iconName: 'arrow-right', iconVersion: 'v2'};

    apply() {
        super.apply();
        const valueToPropagate = this.isSingleDatePicker
            ? {date: this.originalSelection.startDate}
            : this.originalSelection?.startDate && this.originalSelection?.endDate
            ? this.originalSelection
            : null;
        this.propagateChange(valueToPropagate);
    }

    propagateChange = (_: DaterangeSelection) => {};
    writeValue(value: DaterangeSelection): void {
        this.onWriteValue(value);
    }
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    registerOnTouched(): void {}
}

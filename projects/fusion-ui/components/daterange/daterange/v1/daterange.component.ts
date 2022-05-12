import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {DaterangeBaseComponent} from '../common/base/daterange.base.component';
import {DaterangeSelection} from '../../entities/daterange-selection';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

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
    pevIconName = {iconName: 'arrow-right', iconVersion: 'v1'};
    nextIconName = {iconName: 'arrow-right', iconVersion: 'v1'};

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

import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {DaterangeBaseComponent} from '../common/base/daterange.base.component';
import {DaterangeSelection} from '../../entities/daterange-selection';
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
        dropdownArrowIconName: {iconName: 'angle-down', iconVersion: 'v3'}
    });

    pevIconName = {iconName: 'arrow-back', iconVersion: 'v3'};
    nextIconName = {iconName: 'arrow-forward', iconVersion: 'v3'};

    propagateChange = (_: DaterangeSelection) => {};
    writeValue(value: DaterangeSelection): void {
        this.onWriteValue(value);
    }
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    registerOnTouched(): void {}
}

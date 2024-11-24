import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {MonthPickerBaseComponent} from '@ironsource/fusion-ui/components/month-picker/common/base';

@Component({
    selector: 'fusion-month-picker',
    templateUrl: '../common/base/month-picker.base.component.html',
    styleUrls: ['./month-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MonthPickerComponent),
            multi: true
        }
    ],
    standalone: false
})
export class MonthPickerComponent extends MonthPickerBaseComponent {}

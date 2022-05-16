import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {DaterangeBaseComponent} from '../common/base/daterange.base.component';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

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
}

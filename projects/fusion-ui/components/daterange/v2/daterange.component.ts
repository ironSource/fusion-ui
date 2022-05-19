import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {DropdownSelectConfigurations} from '@ironsource/fusion-ui/components/dropdown';
import {DaterangeBaseComponent} from '@ironsource/fusion-ui/components/daterange/common/base';

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
}

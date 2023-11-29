import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {DropdownSelectConfigurations} from '@ironsource/fusion-ui/components/dropdown-select/entities';
import {DaterangeBaseComponent} from '@ironsource/fusion-ui/components/daterange/common/base';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';

@Component({
    selector: 'fusion-daterange',
    templateUrl: './daterange.component.html',
    styleUrls: ['./daterange.component.scss'],
    host: {'ui-version': '3'},
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {provide: ApiBase, useExisting: DaterangeComponent},
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DaterangeComponent),
            multi: true
        }
    ]
})
export class DaterangeComponent extends DaterangeBaseComponent {
    /** @internal */
    dropdownSelectConfigurations$ = new BehaviorSubject<DropdownSelectConfigurations>({
        dropdownArrowIconName: {iconName: 'angle-down', iconVersion: 'v3'}
    });
    /** @internal */
    pevIconName = {iconName: 'angle-left', iconVersion: 'v3'};
    /** @internal */
    nextIconName = {iconName: 'angle-right', iconVersion: 'v3'};
}

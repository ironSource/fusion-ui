import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DropdownOptionBaseComponent} from '@ironsource/fusion-ui/components/dropdown-option/common/base';

@Component({
    selector: 'fusion-dropdown-option',
    templateUrl: '../common/base/dropdown-option.base.component.html',
    styleUrls: ['./dropdown-option.component.scss'],
    host: {'ui-version': '2'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownOptionComponent extends DropdownOptionBaseComponent {
    dropdownArrowIconName = {
        iconName: 'arrow-down',
        iconVersion: 'v2'
    };
}

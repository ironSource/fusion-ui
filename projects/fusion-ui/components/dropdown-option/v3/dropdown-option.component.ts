import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DropdownOptionBaseComponent} from '@ironsource/fusion-ui/components/dropdown-option/common/base';

@Component({
    selector: 'fusion-dropdown-option',
    templateUrl: '../common/base/dropdown-option.component.html',
    styleUrls: ['./dropdown-option.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownOptionComponent extends DropdownOptionBaseComponent {
    dropdownArrowIconName = {
        iconName: 'arrow-down',
        iconVersion: 'v2'
    };
}

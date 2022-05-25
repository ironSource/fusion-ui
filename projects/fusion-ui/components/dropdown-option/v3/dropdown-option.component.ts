import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DropdownOptionBaseComponent} from '@ironsource/fusion-ui/components/dropdown-option/common/base';
import {IconData} from '@ironsource/fusion-ui';

const CLOSE_ICON = 'close-bold';
const dropdownArrowIcon = {
    iconName: 'arrow-down',
    iconVersion: 'v2'
};

@Component({
    selector: 'fusion-dropdown-option',
    templateUrl: './dropdown-option.component.html',
    styleUrls: ['./dropdown-option.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownOptionComponent extends DropdownOptionBaseComponent {
    dropdownArrowIconName: IconData = dropdownArrowIcon;
    closeIcon: IconData = CLOSE_ICON;
}

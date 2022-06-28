import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DropdownOptionBaseComponent} from '@ironsource/fusion-ui/components/dropdown-option/common/base';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

const CLOSE_ICON = 'close-bold';
const ARROW_ICON = {
    iconName: 'angle-down',
    iconVersion: 'v3'
};

@Component({
    selector: 'fusion-dropdown-option',
    templateUrl: './dropdown-option.component.html',
    styleUrls: ['./dropdown-option.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownOptionComponent extends DropdownOptionBaseComponent {
    dropdownArrowIconName: IconData = ARROW_ICON;
    closeIcon: IconData = CLOSE_ICON;
}

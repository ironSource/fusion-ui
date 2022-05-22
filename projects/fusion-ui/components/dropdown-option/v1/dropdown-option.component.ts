import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DropdownOptionBaseComponent} from '@ironsource/fusion-ui/components/dropdown-option/common/base/dropdown-option.base.component';

@Component({
    selector: 'fusion-dropdown-option',
    templateUrl: '../common/base/dropdown-option.component.html',
    styleUrls: ['./dropdown-option.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownOptionComponent extends DropdownOptionBaseComponent {
    dropdownArrowIconName = {
        iconName: 'arrow-dropdown',
        iconVersion: 'v1'
    };
}

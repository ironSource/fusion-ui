import {ChangeDetectionStrategy, Component, forwardRef, ViewChild} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/service';
import {DropdownBaseComponent} from '@ironsource/fusion-ui/components/dropdown/common/base';
import {DropdownSearchComponent} from '@ironsource/fusion-ui/components/dropdown-search/v1';
import {DropdownSelectComponent} from '@ironsource/fusion-ui/components/dropdown-select/v1';

@Component({
    selector: 'fusion-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        DropdownService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownComponent),
            multi: true
        }
    ]
})
export class DropdownComponent extends DropdownBaseComponent {
    dropdownArrowIconName = {
        iconName: 'arrow-dropdown',
        iconVersion: 'v1'
    };
    @ViewChild('searchComponent') searchComponent: DropdownSearchComponent;
    @ViewChild('selectComponent') selectComponent: DropdownSelectComponent;
}

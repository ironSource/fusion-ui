import {ChangeDetectionStrategy, Component, forwardRef, ViewChild} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/service';
import {DropdownBaseComponent} from '@ironsource/fusion-ui/components/dropdown/common/base';
import {DropdownSearchComponent} from '@ironsource/fusion-ui/components/dropdown-search/v3';
import {DropdownSelectComponent} from '@ironsource/fusion-ui/components/dropdown-select/v3';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';

const ARROW_ICON = {
    iconName: 'angle-down',
    iconVersion: 'v3'
};

@Component({
    selector: 'fusion-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        DropdownService,
        {provide: ApiBase, useExisting: DropdownComponent},
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownComponent),
            multi: true
        }
    ]
})
export class DropdownComponent extends DropdownBaseComponent {
    /** @ignore */
    dropdownArrowIconName = ARROW_ICON;
    /** @ignore */
    @ViewChild('searchComponent') searchComponent: DropdownSearchComponent;
    /** @ignore */
    @ViewChild('selectComponent') selectComponent: DropdownSelectComponent;
}

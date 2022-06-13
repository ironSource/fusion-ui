import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {DropdownDualMultiSelectBaseComponent} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select/common/base';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';

@Component({
    selector: 'fusion-dropdown-dual-multi-select',
    templateUrl: '../common/base/dropdown-dual-multi-select.base.component.html',
    styleUrls: ['./dropdown-dual-multi-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {provide: ApiBase, useExisting: DropdownDualMultiSelectComponent},
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownDualMultiSelectComponent),
            multi: true
        }
    ]
})
export class DropdownDualMultiSelectComponent extends DropdownDualMultiSelectBaseComponent {}

import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {DropdownSearchBaseComponent} from '@ironsource/fusion-ui/components/dropdown-search/common/base';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'fusion-dropdown-search',
    templateUrl: '../common/base/dropdown-search.base.component.html',
    styleUrls: ['./dropdown-search.component.scss'],
    host: {'ui-version': '1'},
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownSearchComponent),
            multi: true
        }
    ]
})
export class DropdownSearchComponent extends DropdownSearchBaseComponent {}

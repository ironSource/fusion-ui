import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DropdownOptionsListBaseComponent} from '@ironsource/fusion-ui/components/dropdown-options-list/common/base';

@Component({
    selector: 'fusion-dropdown-options-list',
    templateUrl: '../common/base/dropdown-options-list.base.component.html',
    styleUrls: ['./dropdown-options-list.component.scss'],
    host: {'ui-version': '2'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownOptionsListComponent extends DropdownOptionsListBaseComponent {}

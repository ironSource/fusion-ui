import {Component, ViewChild} from '@angular/core';
import {DropdownSelectBaseComponent} from '@ironsource/fusion-ui/components/dropdown-select/common/base/dropdown-select.base.component';
import {DropdownSearchComponent} from '@ironsource/fusion-ui/components/dropdown-search/v1';

@Component({
    selector: 'fusion-dropdown-select',
    templateUrl: './dropdown-select.component.html',
    styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent extends DropdownSelectBaseComponent {
    @ViewChild('searchComponent') searchComponent: DropdownSearchComponent;
}

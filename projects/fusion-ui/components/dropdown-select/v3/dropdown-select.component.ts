import {Component, ViewChild} from '@angular/core';
import {DropdownSelectBaseComponent} from '@ironsource/fusion-ui/components/dropdown-select/common/base';
import {DropdownSearchComponent} from '@ironsource/fusion-ui/components/dropdown-search/v3';

@Component({
    selector: 'fusion-dropdown-select',
    templateUrl: './dropdown-select.component.html',
    styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent extends DropdownSelectBaseComponent {
    @ViewChild('searchComponent') searchComponent: DropdownSearchComponent;

    getLabelCSSClasses(isOpen: boolean): string[] {
        const classesList = [
            this.configurations.disabled && 'dd-disabled',
            this.configurations.readonly && 'dd-readonly',
            !!this.configurations.error && 'dd-error',
            isOpen && 'dd-active',
            !!this.configurations.selectedOption && 'ss-selected',
            this.configurations.isTabMode && 'is-tab-mode',
            'dd-search-active',
            this.searchValue.value && 'dd_search-has-value'
        ].filter(Boolean);
        return classesList;
    }
}

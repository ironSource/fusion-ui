import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {DropdownOptionComponent} from '@ironsource/fusion-ui/components/dropdown-option/v4';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown';
import {SearchComponent} from '@ironsource/fusion-ui/components/search/v4';

@Component({
    selector: 'fusion-dropdown-options-list',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, DropdownOptionComponent, SearchComponent],
    providers: [DropdownService],
    templateUrl: './dropdown-options-list-v4.component.html',
    styleUrls: ['./dropdown-options-list-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownOptionsListV4Component {
    @Input() displayedOptions: DropdownOption[] = [];
    @Input() selectedOptions: DropdownOption[];
    @Input() isSearchable: boolean = false;

    formControlSearchValue = new FormControl('');

    constructor(public dropdownService: DropdownService) {}

    trackByFunc(index: number, option: DropdownOption) {
        return option?.id ? option.id : index;
    }
}

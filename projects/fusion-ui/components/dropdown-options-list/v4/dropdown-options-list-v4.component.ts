import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {DropdownOptionComponent} from '@ironsource/fusion-ui/components/dropdown-option/v4';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown';
import {SearchComponent} from '@ironsource/fusion-ui/components/search/v4';
import {isNullOrUndefined} from '@ironsource/fusion-ui';

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

    @Output() changeSelected = new EventEmitter<any>();

    constructor(public dropdownService: DropdownService) {}

    onChangeSelected(option: DropdownOption, $event: Event) {
        this.changeSelected.emit({option, $event});
    }

    isSelected(option): boolean {
        return (
            this.selectedOptions?.length &&
            this.selectedOptions.some(item => {
                if (!isNullOrUndefined(option.id) && !isNullOrUndefined(item.id)) {
                    return item.id === option.id;
                } else {
                    return item === option;
                }
            })
        );
    }

    trackByFunc(index: number, option: DropdownOption) {
        return option?.id ? option.id : index;
    }
}

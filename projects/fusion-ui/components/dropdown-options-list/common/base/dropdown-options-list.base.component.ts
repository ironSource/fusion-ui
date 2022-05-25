import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/service';

@Directive()
export abstract class DropdownOptionsListBaseComponent {
    @Input() displayedOptions: DropdownOption[];
    @Input() isMultiRawDisplay = false;
    @Input() mappingOptions: any;
    @Input() selected: DropdownOption[];
    @Input() lastSearchValue: string;
    @Input() optionRightHoverText: string;
    @Input() optionCloseIcon: boolean;

    @Output() changeSelected = new EventEmitter<any>();

    constructor(public dropdownService: DropdownService) {}

    isSelected(option): boolean {
        return (
            this.selected &&
            this.selected.length > 0 &&
            this.selected.some(item => {
                if (!isNullOrUndefined(option.id) && !isNullOrUndefined(item.id)) {
                    return item.id === option.id;
                } else {
                    return item === option;
                }
            })
        );
    }

    getOptionClasses(option: DropdownOption) {
        return {
            [option.class]: option.class,
            'is-selected': this.isSelected(option),
            'is-disabled': option.isDisabled,
            'is-with-second-line': option.subText
        };
    }

    onChangeSelected(option: DropdownOption, $event: Event) {
        this.changeSelected.emit({option, $event});
    }
}

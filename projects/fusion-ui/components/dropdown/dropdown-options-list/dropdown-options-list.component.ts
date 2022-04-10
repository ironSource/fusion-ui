import {ChangeDetectionStrategy, Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {DropdownOption} from '../entities/dropdown-option';
import {DropdownService} from '../dropdown.service';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {FusionBaseComponent} from '@ironsource/fusion-ui/components/style';

@Component({
    selector: 'fusion-dropdown-options-list',
    templateUrl: './dropdown-options-list.component.html',
    styleUrls: ['./dropdown-options-list.component.scss', './dropdown-options-list.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownOptionsListComponent extends FusionBaseComponent {
    @Input() displayedOptions: DropdownOption[];
    @Input() isMultiRawDisplay = false;
    @Input() mappingOptions: any;
    @Input() selected: DropdownOption[];
    @Input() lastSearchValue: string;
    @Input() optionRightHoverText: string;

    @Output() changeSelected = new EventEmitter<any>();

    constructor(injector: Injector, public dropdownService: DropdownService) {
        super(injector);
    }

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
            'is-selected': this.isSelected(option)
        };
    }

    onChangeSelected(option: DropdownOption, $event: Event) {
        this.changeSelected.emit({option, $event});
    }
}

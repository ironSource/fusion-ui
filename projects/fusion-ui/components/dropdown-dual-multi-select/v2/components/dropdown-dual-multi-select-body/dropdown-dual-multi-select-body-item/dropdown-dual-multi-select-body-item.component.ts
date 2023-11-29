import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';

@Component({
    selector: 'fusion-dropdown-dual-multi-select-body-item',
    templateUrl: './dropdown-dual-multi-select-body-item.component.html',
    styleUrls: ['./dropdown-dual-multi-select-body-item.component.scss'],
    host: {'ui-version': '2'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownDualMultiSelectBodyItemComponent {
    @Input() bodySide: 'left' | 'right';
    @Input() item: DropdownOption;
    @Input() isDisabled: boolean;
    @Input() isSelectedItem: boolean;

    @Output() changeSelected = new EventEmitter();
    @Output() clearSelect = new EventEmitter();

    constructor() {}

    changeSelectedItem(item: DropdownOption): void {
        this.changeSelected.emit(item);
    }

    clearSelectItem(item: DropdownOption): void {
        if (!item.isDisabled) {
            this.clearSelect.emit(item);
        }
    }
}

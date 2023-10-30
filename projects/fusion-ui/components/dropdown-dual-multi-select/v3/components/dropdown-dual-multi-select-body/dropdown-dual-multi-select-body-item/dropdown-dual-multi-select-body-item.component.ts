import {ChangeDetectionStrategy, Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {IncludeExcludeTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

@Component({
    selector: 'fusion-dropdown-dual-multi-select-body-item',
    templateUrl: './dropdown-dual-multi-select-body-item.component.html',
    styleUrls: ['./dropdown-dual-multi-select-body-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownDualMultiSelectBodyItemComponent {
    @Input() bodySide: 'left' | 'right';
    @Input() item: DropdownOption;
    @Input() isDisabled: boolean;
    @Input() isSelectedItem: boolean;
    /** @internal */
    @Input() testId: string;

    @Output() changeSelected = new EventEmitter();
    @Output() clearSelect = new EventEmitter();

    /** @internal */
    testIdIncludeExcludeModifiers: typeof IncludeExcludeTestIdModifiers = IncludeExcludeTestIdModifiers;
    /** @internal */
    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    constructor(private injector: Injector) {}

    changeSelectedItem(item: DropdownOption): void {
        this.changeSelected.emit(item);
    }

    clearSelectItem(item: DropdownOption): void {
        if (!item.isDisabled) {
            this.clearSelect.emit(item);
        }
    }
}

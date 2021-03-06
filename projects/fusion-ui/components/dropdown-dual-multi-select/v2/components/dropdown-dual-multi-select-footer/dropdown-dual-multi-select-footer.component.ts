import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'fusion-dropdown-dual-multi-select-footer',
    templateUrl: './dropdown-dual-multi-select-footer.component.html',
    styleUrls: ['./dropdown-dual-multi-select-footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownDualMultiSelectFooterComponent {
    @Output() applySelect = new EventEmitter<boolean>();
    @Output() closeSelect = new EventEmitter();

    constructor() {}

    applySelectItems(close: boolean): void {
        this.applySelect.emit(close);
    }

    closeSelectItems(): void {
        this.closeSelect.emit();
    }
}

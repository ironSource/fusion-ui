import {ChangeDetectionStrategy, Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {IncludeExcludeTestIdModifiers, TestIdsService} from '@ironsource/fusion-ui';

@Component({
    selector: 'fusion-dropdown-dual-multi-select-footer',
    templateUrl: './dropdown-dual-multi-select-footer.component.html',
    styleUrls: ['./dropdown-dual-multi-select-footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownDualMultiSelectFooterComponent {
    @Input() testId: string;
    @Output() applySelect = new EventEmitter<boolean>();
    @Output() closeSelect = new EventEmitter();

    testIdIncludeExcludeModifiers: typeof IncludeExcludeTestIdModifiers = IncludeExcludeTestIdModifiers;
    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    constructor(private injector: Injector) {}

    applySelectItems(close: boolean): void {
        this.applySelect.emit(close);
    }

    closeSelectItems(): void {
        this.closeSelect.emit();
    }
}

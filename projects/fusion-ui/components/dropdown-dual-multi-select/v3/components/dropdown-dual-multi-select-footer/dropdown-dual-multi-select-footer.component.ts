import {ChangeDetectionStrategy, Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {IncludeExcludeTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

@Component({
    selector: 'fusion-dropdown-dual-multi-select-footer',
    templateUrl: './dropdown-dual-multi-select-footer.component.html',
    styleUrls: ['./dropdown-dual-multi-select-footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class DropdownDualMultiSelectFooterComponent {
    /** @internal */
    @Input() testId: string;
    @Output() applySelect = new EventEmitter<boolean>();
    @Output() closeSelect = new EventEmitter();

    /** @internal */
    testIdIncludeExcludeModifiers: typeof IncludeExcludeTestIdModifiers = IncludeExcludeTestIdModifiers;
    /** @internal */
    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    constructor(private injector: Injector) {}

    applySelectItems(close: boolean): void {
        this.applySelect.emit(close);
    }

    closeSelectItems(): void {
        this.closeSelect.emit();
    }
}

import {Directive, HostBinding, Injector, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/service';
import {TestIdsService, DropdownTestIdModifiers} from '@ironsource/fusion-ui/services/test-ids';

@Directive()
export abstract class DropdownOptionBaseComponent implements OnInit {
    @Input() option: DropdownOption;
    /** @internal */
    @Input() mappingOptions: any;
    /** @internal */
    @Input() dropdownType: '' | 'multi' | 'tags';
    /** @internal */
    @Input() lastSearchValue: string;
    /** @internal */
    @Input() optionRightHoverText: string;

    /** @internal */
    @Input() set isMultiRawDisplay(value: boolean) {
        this.isMultiRawDisplay$.next(value);
    }

    /** @internal */
    @Input() set optionCloseIcon(value: boolean) {
        this.shownCloseIcon$.next(value);
    }

    @Input() testId: string;

    /** @internal */
    @HostBinding('class.multi-raw-display') get shouldDisplayMultiRaw(): boolean {
        return this.isMultiRawDisplay$.getValue();
    }

    /** @internal */
    @HostBinding('class.is-has-children') get hasChildren(): boolean {
        return Array.isArray(this.option?.childOptions);
    }

    /** @internal */
    @HostBinding('class.is-open') get isOpen(): boolean {
        return this.option?.isOpen;
    }

    testIdDropdownModifiers: typeof DropdownTestIdModifiers = DropdownTestIdModifiers;

    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    @HostBinding('attr.data-testid') get testAttribute(): string {
        return this.testId;
    }

    /** @internal */
    isMultiRawDisplay$ = new BehaviorSubject<boolean>(false);
    /** @internal */
    shownCloseIcon$ = new BehaviorSubject<boolean>(false);
    /** @internal */
    settings: any;
    /** @internal */
    optionToStringFunc = this.dropdownService.optionToString.bind(this.dropdownService);

    constructor(private dropdownService: DropdownService, protected injector: Injector) {}

    ngOnInit() {
        this.settings = {
            dropdownType: this.dropdownType,
            lastSearchValue: this.lastSearchValue
        };
    }
}

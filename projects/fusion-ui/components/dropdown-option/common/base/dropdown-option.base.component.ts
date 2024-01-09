import {Directive, HostBinding, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/service';

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
    /** @internal */
    @HostBinding('class.multi-raw-display') get shouldDisplayMultiRaw(): boolean {
        return this.isMultiRawDisplay$.getValue();
    }
    /** @internal */
    @HostBinding('class.is-has-children') get hasChildren(): boolean {
        return Array.isArray(this.option.childOptions);
    }
    /** @internal */
    @HostBinding('class.is-open') get isOpen(): boolean {
        return this.option.isOpen;
    }

    /** @internal */
    isMultiRawDisplay$ = new BehaviorSubject<boolean>(false);
    /** @internal */
    shownCloseIcon$ = new BehaviorSubject<boolean>(false);
    /** @internal */
    settings: any;
    /** @internal */
    optionToStringFunc = this.dropdownService.optionToString.bind(this.dropdownService);

    constructor(private dropdownService: DropdownService) {}

    ngOnInit() {
        this.settings = {
            dropdownType: this.dropdownType,
            lastSearchValue: this.lastSearchValue
        };
    }
}

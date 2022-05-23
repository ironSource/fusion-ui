import {Directive, HostBinding, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/servise';

@Directive()
export abstract class DropdownOptionBaseComponent implements OnInit {
    @Input() option: DropdownOption;
    @Input() mappingOptions: any;
    @Input() dropdownType: '' | 'multi' | 'tags';
    @Input() lastSearchValue: string;
    @Input() optionRightHoverText: string;
    @Input() set isMultiRawDisplay(value: boolean) {
        this.isMultiRawDisplay$.next(value);
    }

    @HostBinding('class.multi-raw-display') get shouldDisplayMultiRaw(): boolean {
        return this.isMultiRawDisplay$.getValue();
    }
    @HostBinding('class.is-has-children') get hasChildren(): boolean {
        return Array.isArray(this.option.childOptions);
    }
    @HostBinding('class.is-open') get isOpen(): boolean {
        return this.option.isOpen;
    }

    isMultiRawDisplay$ = new BehaviorSubject<boolean>(false);
    settings: any;
    optionToStringFunc = this.dropdownService.optionToString.bind(this.dropdownService);

    constructor(public dropdownService: DropdownService) {}

    ngOnInit() {
        this.settings = {
            dropdownType: this.dropdownType,
            lastSearchValue: this.lastSearchValue
        };
    }
}

import {ChangeDetectionStrategy, Component, HostBinding, Injector, Input, OnDestroy, OnInit} from '@angular/core';
import {DropdownService} from '../dropdown.service';
import {DropdownOption} from '../entities/dropdown-option';
import {BehaviorSubject} from 'rxjs';
import {StyleBase} from '../../../style/style-base';
import {takeUntil} from 'rxjs/operators';
import {StyleVersion} from '../../../../services/version/style-version.enum';

@Component({
    selector: 'fusion-dropdown-option',
    templateUrl: './dropdown-option.component.html',
    styleUrls: ['./dropdown-option.component.scss', './dropdown-option.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownOptionComponent extends StyleBase implements OnInit, OnDestroy {
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

    dropdownArrowIconName$ = new BehaviorSubject<string | {iconName: string; iconVersion?: string}>({
        iconName: 'arrow-dropdown',
        iconVersion: 'v1'
    });

    constructor(injector: Injector, public dropdownService: DropdownService) {
        super(injector);
    }

    ngOnInit() {
        this.settings = {
            dropdownType: this.dropdownType,
            lastSearchValue: this.lastSearchValue
        };

        this.selectedVersion$.pipe(takeUntil(this.onDestroy$)).subscribe(styleVersion => {
            this.dropdownArrowIconName$.next(
                styleVersion === StyleVersion.V2 ? 'arrow-down' : {iconName: 'arrow-dropdown', iconVersion: 'v1'}
            );
        });
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
    }
}

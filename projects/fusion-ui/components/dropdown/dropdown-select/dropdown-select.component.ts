import {ChangeDetectionStrategy, Component, EventEmitter, Injector, Input, OnInit, Output, ViewChild} from '@angular/core';
import {StyleBase} from '@ironsource/fusion-ui/components/style';
import {DropdownSelectConfigurations} from './dropdown-select-configurations';
import {StyleVersion} from '@ironsource/fusion-ui/services';
import {DropdownSearchComponent} from '../dropdown-search/dropdown-search.component';
import {FormControl} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'fusion-dropdown-select',
    templateUrl: './dropdown-select.component.html',
    styleUrls: ['./dropdown-select.component.scss', './dropdown-select.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownSelectComponent extends StyleBase implements OnInit {
    @ViewChild('searchComponent') searchComponent: DropdownSearchComponent;

    @Output() searchValueChanged = new EventEmitter<string>();
    @Input() set configurations(configurations: DropdownSelectConfigurations) {
        if (configurations.isOpen && this.searchComponent && this.searchComponent.inputComponent) {
            this.searchComponent.inputComponent.setFocus();
        }
        this._configurations = configurations || {};
    }

    get configurations() {
        return this._configurations;
    }

    private _configurations: DropdownSelectConfigurations = {};
    public placeholder: string;
    searchValue = new FormControl();

    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        this.searchValue.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => this.searchValueChanged.next(value));
    }

    getLabelCSSClasses(currentStyleVersion: StyleVersion, isOpen: boolean): string[] {
        const isV2OpenWithSearch = currentStyleVersion === this.styleVersion.V2 && this.configurations.isSearch && isOpen;
        const classesList = [
            this.configurations.disabled && 'dd-disabled',
            !!this.configurations.error && 'dd-error',
            isOpen && 'dd-active',
            !!this.configurations.selectedOption && 'ss-selected',
            this.configurations.isTabMode && 'is-tab-mode',
            isV2OpenWithSearch && 'dd-search-active',
            isV2OpenWithSearch && this.searchValue.value && 'dd_search-has-value'
        ].filter(Boolean);
        return classesList;
    }

    resetSearch(): void {
        this.searchValue.reset('', {onlySelf: true, emitEvent: false});
    }
}

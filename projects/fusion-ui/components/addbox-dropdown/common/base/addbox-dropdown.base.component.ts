import {Directive, DoCheck, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {distinctUntilChanged} from 'rxjs/operators';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {DropdownBaseComponent} from '@ironsource/fusion-ui/components/dropdown/common/base';

@Directive()
// eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
export class AddboxDropdownBaseComponent extends DropdownBaseComponent implements OnChanges, DoCheck {
    @Input() selected: DropdownOption[] = [];
    @Input() autoComplete = true;
    @Input() actionButtonText;
    @Output() itemSelected = new EventEmitter();

    @Input()
    public set options(value) {
        this.optionsState = Array.isArray(value) ? value.filter(this.isOptionShowed.bind(this)) : [];
        this.displayedOptions$.next(this.parseOptions(this.optionsState));
    }

    public get options() {
        return this.optionsState;
    }

    id: string;
    searchValue = new FormControl();
    searchError = '';
    lastSearchValue = '';
    placeholderText = '';

    private oldIsLoading = false;
    private commaSeparatedSearch = false;

    // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
    ngOnChanges(changes) {
        // showing noResults option only if options is empty
        // setting showNoResults to true only if search is finished and options = []
        if (changes.isLoading && changes.isLoading.currentValue === false && changes.options && !changes.options.firstChange) {
            if (!changes.options.currentValue || !changes.options.currentValue.length) {
                // this.showNoResults = true;
            } else if (this.commaSeparatedSearch) {
                this.options = [];
                // this.showNoResults = false;
                this.commaSeparatedSearch = false;
            }
        } else {
            // this.showNoResults = false;
        }
    }

    initListeners() {
        this.searchValue.valueChanges.pipe(distinctUntilChanged()).subscribe(value => {
            this.commaSeparatedSearch = /,/g.test(value);
            if (!this.commaSeparatedSearch) {
                this.lastSearchValue = value;
                super.onSearchChange();
                if (value) {
                    this.isOpen$.next(true);
                    setTimeout(this.calcOptionHolderPosition.bind(this), 0);
                }
            } else {
                this.optionsState = [];
            }
        });
    }

    // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
    ngDoCheck() {
        if (this.loading !== this.oldIsLoading) {
            if (!this.loading && !this.isSearchByKeyword()) {
                this.onAddItemsDone();
            }
            this.oldIsLoading = this.loading;
        }
    }

    isActionButtonDisabled(): boolean {
        return this.isSearchByKeyword();
    }

    /**
     * Check if option already in selected
     */
    private isOptionShowed(option: any): boolean {
        return this.selected.findIndex(item => item.id === option.id) === -1;
    }

    /**
     * If in search input has ',' comma, do not made search by input value (keyword)
     */
    private isSearchByKeyword(): boolean {
        return !/,/g.test(this.searchValue.value);
    }

    /**
     * Add Bulk done
     */
    private onAddItemsDone(): void {
        this.searchValue.setValue('', {emitEvent: false});
    }

    /**
     * on key enter in input pressed - if mode for bulk search do it
     */
    addList() {
        this.commaSeparatedSearch = !this.isSearchByKeyword();
        if (this.commaSeparatedSearch) {
            this.searchChange.emit(this.searchValue.value);
        }
    }

    changeSelected({option, $event}: {option: any; $event: any}): void {
        if (this.selected.findIndex(item => item === option) === -1) {
            this.selected = [...this.selected, option];
            const idx = this.optionsState.findIndex(item => item === option);
            this.optionsState.splice(idx, 1);
            this.options = [...this.optionsState];

            this.itemSelected.emit(option);
            this.propagateChange(this.selected);
            // suppress click event Propagation (fix for onOutsideClick)
            if ($event) {
                $event.stopPropagation();
            }
        }
    }

    /**
     * override parent function
     */
    setLabel() {}
}

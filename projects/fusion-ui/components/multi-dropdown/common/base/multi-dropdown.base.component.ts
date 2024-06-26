import {Directive, Input, OnChanges, OnInit, TemplateRef} from '@angular/core';
import {DROPDOWN_OPTIONS_WITHOUT_SCROLL, DropdownBaseComponent} from '@ironsource/fusion-ui/components/dropdown/common/base';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {Observable} from 'rxjs';
import {map, startWith, takeUntil} from 'rxjs/operators';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

@Directive()
export abstract class MultiDropdownBaseComponent extends DropdownBaseComponent implements OnInit, OnChanges {
    /** @ignore */
    @Input() confirm = true;
    /** @ignore */
    @Input() selectAllLabel: string;
    /** @ignore */
    @Input() templateRef: TemplateRef<any>; // todo: rename it to optionTemplate ref. Just in use in demand
    /** @ignore */
    tempSelected: DropdownOption[];
    /** @ignore */
    tempOptions: DropdownOption[];
    /** @ignore */
    optionsWithoutScroll = DROPDOWN_OPTIONS_WITHOUT_SCROLL;
    /** @ignore */
    hasSearchValue$: Observable<boolean> = new Observable<boolean>();
    /** @ignore */
    showSelectedFirst: boolean = false;
    @Input() testId: string;

    get isMulti(): boolean {
        return true;
    }

    ngOnInit() {
        this.id = `is-multi-dropdown-${this.uniqueIdService.getUniqueId()}`;
        this.tempSelected = this.selected || [];
        this.tempOptions = this.cloneArray(this.options);
        // if has "select all"
        this.optionsWithoutScroll = this.selectAllLabel ? this.optionsWithoutScroll - 1 : this.optionsWithoutScroll;
        // if has "search"
        this.optionsWithoutScroll = this.search || this.autoComplete ? this.optionsWithoutScroll - 1 : this.optionsWithoutScroll;
        super.ngOnInit();

        this.hasSearchValue$ = this.searchValue.valueChanges.pipe(
            takeUntil(this.onDestroy$),
            startWith(false),
            map(searchValue => !!searchValue)
        );

        this.resetState$
            .asObservable()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(_ => {
                this.applySelect(true, false);
            });
    }

    /**
     * Relevant only for auto complete mode.
     * If options changed outside compoenent we need to update tempOptions to
     * be the new options
     */
    ngOnChanges(changes) {
        if (changes.options && changes.options.currentValue !== changes.options.previousValue) {
            this.tempOptions = changes.options.currentValue;
            if (!changes.options.firstChange) {
                this.tempSelected = this.cloneArray(this.selected);
                this.isInSelectAllAction();
                super.setLabel();
            }
        }
        this.dropdownSelectConfigurations$.next(this.getDropdownSelectConfigurations());
    }

    /** @ignore */
    getHolderCSSClasses(): string[] {
        return [...super.getHolderCSSClasses(), ...[this.confirm && 'is-with-confirm']].filter(Boolean);
    }

    /** @ignore */
    getOptionClasses(option: DropdownOption, index?: number) {
        const isGroup = this.isGroupOption(option);
        const hideGroup = this.showSelectedFirst && isGroup ? this.hideGroup(index) : false;

        return {
            [option.class]: option.class,
            'fu-group': isGroup,
            'fu-group-first': isGroup && index === 0,
            'fu-group-hide': hideGroup
        };
    }

    /**
     * Open dropdown windows
     * @internal
     */
    openDropdown(event: MouseEvent) {
        this.tempSelected = this.cloneArray(this.selected);
        super.openDropdown(event);
        this.isInSelectAllAction();
    }

    /**
     * Set to clear / select all by the given default action button
     * @internal
     */
    selectAll(checked?: boolean) {
        if (checked) {
            this.tempOptions.forEach(option => {
                if (option.childOptions || option.isGroup) {
                    option.childOptions?.forEach(child => {
                        child.checked = true;
                    });
                } else {
                    option.checked = true;
                }
            });
            this.tempSelected = this.cloneArray(
                this.tempOptions.reduce((acc, option) => {
                    if (option.childOptions || option.isGroup) {
                        option.childOptions?.forEach(option => {
                            if (option.checked) {
                                acc.push(option);
                            }
                        });
                    } else {
                        if (option.checked) {
                            acc.push(option);
                        }
                    }
                    return acc;
                }, [])
            );
        } else {
            this.tempSelected = [];
            this.tempOptions.forEach(option => {
                if (option.childOptions || option.isGroup) {
                    option.childOptions?.forEach(child => {
                        child.checked = false;
                    });
                } else {
                    option.checked = false;
                }
            });
        }
        this.isInSelectAllAction();
        if (!this.confirm) {
            this.applySelect();
        }
    }

    clearAll() {
        this.selectAll(false);
    }

    /**
     * Saving selected options
     * @internal
     */
    applySelect(close = false, doSelectedChanged = true): void {
        this.selected = this.tempSelected;

        if (this.showSelectedFirst && this.selected.length && this.isIndeterminate) {
            this.options = this.getSelectedOptionsFirst();
        } else {
            this.options = this.tempOptions;
        }
        if (doSelectedChanged) {
            this.setLabel();
            this.selectedChange.emit(
                this.selected.map(item => {
                    item.isSelected = true;
                    return item;
                })
            );
            this.propagateChange(this.selected);
        }

        if (close) {
            this.closeDropdown();
        }
    }

    /**
     * select / remove option from selected list
     * @internal
     */
    changeSelected(option): void {
        const objSelectedIndex = this.getSelectedIndex(option);
        if (objSelectedIndex > -1) {
            this.tempSelected.splice(objSelectedIndex, 1);
        } else {
            this.tempSelected.push(option);
        }
        this.isInSelectAllAction();
        if (!this.confirm) {
            this.applySelect();
        }
    }

    /** @ignore */
    isSelected(option: DropdownOption): boolean {
        return this.tempSelected && this.tempSelected.findIndex(item => item.id === option.id) !== -1;
    }

    /**
     * Check if dropdown is in default button mode.
     * If all options selected Or if none of the options selected.
     * @internal
     */
    isInSelectAllAction() {
        const tempOptionsList = this.tempOptions.reduce((acc, option) => {
            if (option.childOptions || option.isGroup) {
                option.childOptions?.forEach(option => {
                    acc.push(option);
                });
            } else {
                acc.push(option);
            }
            return acc;
        }, []);

        this.isAllSelected = tempOptionsList.length === this.tempSelected.length;
        this.isIndeterminate = this.tempSelected.length !== 0 && this.tempSelected.length !== tempOptionsList.length;
    }

    /**
     * @returns number - index of selected in options array or -1 if not selected
     * @internal
     */
    getSelectedIndex(option) {
        let optionSelectedIndex = -1;
        let selectedList = this.confirm ? this.tempSelected : this.selected;
        selectedList = selectedList || []; // when page did not loaded yet selectedList is undefined
        selectedList.forEach((selectedOption, index) => {
            if (selectedOption[this.mappingOptions.id] === option[this.mappingOptions.id]) {
                optionSelectedIndex = index;
            }
        });

        return optionSelectedIndex;
    }

    /** @ignore */
    optionParentClicked($event, targetClass?: string, stateClass?: string) {
        const targetEl = $event.currentTarget;
        const targetClassList = targetEl.classList;
        if (targetClassList.contains(targetClass || 'is-has-children')) {
            if (targetClassList.contains(stateClass || 'is-open')) {
                this.renderer.removeClass(targetEl, stateClass || 'is-open');
            } else {
                this.renderer.addClass(targetEl, stateClass || 'is-open');
            }
        }
    }

    /**
     * selects all children in case of parent selection (relevant only to V4)
     * @ignore
     */
    handleChildrenChange(options: DropdownOption[]): void {
        const isAllSameValue = this.checkAllOptionsHaveSameSelectedValue(options);
        const isIndeterminate = this.getIsParentIndeterminate(options);
        options.forEach(option => {
            if (isAllSameValue || (isIndeterminate && !this.isSelected(option))) {
                this.changeSelected(option);
            }
        });
    }
    /**
     * get parent indeterminate state (relevant only to V4)
     * @ignore
     */
    getIsParentIndeterminate(options: DropdownOption[]): boolean {
        const isSomeChecked = options.some(this.isSelected.bind(this));
        const isAllChecked = this.getIsAllChildrenChecked(options);
        return isSomeChecked && !isAllChecked;
    }
    /**
     * get parent checked indeterminate state (relevant only to V4)
     * @ignore
     */
    getIsAllChildrenChecked(options: DropdownOption[]): boolean {
        return options.every(this.isSelected.bind(this));
    }
    private checkAllOptionsHaveSameSelectedValue(options: DropdownOption[]): boolean {
        const firstValue = this.isSelected(options[0]);
        return options.every(option => this.isSelected(option) === firstValue);
    }

    /**
     * copy arrays without reference
     */
    private cloneArray(array) {
        return [...array];
    }

    private isGroupOption(option: DropdownOption) {
        return option.isGroup && !option.childOptions;
    }

    private hideGroup(index: number): boolean {
        const nextOption = this.displayedOptions$.getValue()[index + 1];
        return (!isNullOrUndefined(nextOption) && this.isGroupOption(nextOption)) || isNullOrUndefined(nextOption);
    }

    private getSelectedOptionsFirst(): DropdownOption[] {
        return [...this.tempOptions].sort((a, b) => {
            const isASelected = this.selected.includes(a);
            const isBSelected = this.selected.includes(b);
            return isASelected === isBSelected ? 0 : isASelected ? -1 : 1;
        });
    }

    /** @ignore */
    writeValue(value: any): void {
        super.writeValue(value);
        this.tempSelected = this.selected;
        this.isInSelectAllAction();
        super.setLabel();
    }
}

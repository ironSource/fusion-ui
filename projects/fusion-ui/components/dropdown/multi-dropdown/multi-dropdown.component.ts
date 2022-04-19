import {ChangeDetectionStrategy, Component, forwardRef, Input, OnChanges, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {DropdownOption} from '../entities/dropdown-option';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {DropdownService} from '../dropdown.service';
import {DROPDOWN_OPTIONS_WITHOUT_SCROLL} from '../dropdown-config';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, startWith, takeUntil} from 'rxjs/operators';
import {IconData} from '@ironsource/fusion-ui/components/icon';

@Component({
    selector: 'fusion-multi-dropdown',
    templateUrl: './multi-dropdown.component.html',
    styleUrls: ['./multi-dropdown.component.scss', './multi-dropdown.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        DropdownService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MultiDropdownComponent),
            multi: true
        }
    ]
})
export class MultiDropdownComponent extends DropdownComponent implements OnInit, OnChanges, OnDestroy {
    @Input() confirm = true;
    @Input() selectAllLabel: string;
    @Input() templateRef: TemplateRef<any>;

    tempSelected: DropdownOption[];
    tempOptions: DropdownOption[];

    optionsWithoutScroll = DROPDOWN_OPTIONS_WITHOUT_SCROLL;
    dropdownArrowIconName$ = new BehaviorSubject<IconData>({
        iconName: 'arrow-dropdown',
        iconVersion: 'v1'
    });
    hasSearchValue$: Observable<boolean> = new Observable<boolean>();

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

        this.selectedVersion$.pipe(takeUntil(this.onDestroy$)).subscribe(styleVersion => {
            const dropdownArrowIcon =
                styleVersion === StyleVersion.V2 || styleVersion === StyleVersion.V3
                    ? {iconName: 'arrow-down', iconVersion: 'v2'}
                    : {iconName: 'arrow-dropdown', iconVersion: 'v1'};
            this.dropdownArrowIconName$.next(dropdownArrowIcon);
        });

        this.hasSearchValue$ = this.searchValue.valueChanges.pipe(
            takeUntil(this.onDestroy$),
            startWith(false),
            map(searchValue => !!searchValue)
        );
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

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    getHolderCSSClasses(): string[] {
        return [...super.getHolderCSSClasses(), ...[this.confirm && 'is-with-confirm']].filter(Boolean);
    }

    getOptionClasses(option: DropdownOption) {
        return {
            [option.class]: option.class,
            'is-selected': option.checked,
            'is-group': option.isGroup
        };
    }

    /**
     * Open dropdown windows
     */
    openDropdown(event: MouseEvent) {
        this.tempSelected = this.cloneArray(this.selected);
        this.tempOptions = this.cloneArray(this.options);
        super.openDropdown(event);
        this.isInSelectAllAction();
    }

    /**
     * Set to clear / select all by the given default action button
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

    /**
     * Saving selected options
     */
    applySelect(close = false): void {
        this.selected = this.tempSelected;
        this.options = this.tempOptions;
        this.setLabel();
        this.selectedChange.emit(
            this.selected.map(item => {
                item.isSelected = true;
                return item;
            })
        );
        this.propagateChange(this.selected);

        if (close) {
            this.closeDropdown();
        }
    }

    /**
     * select / remove option from selected list
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

    isSelected(option: DropdownOption): boolean {
        return this.tempSelected && this.tempSelected.findIndex(item => item.id === option.id) !== -1;
    }

    /**
     * Check if dropdown is in default button mode.
     * If all options selected Or if none of the options selected.
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

    optionParentClicked($event) {
        const targetEl = $event.currentTarget;
        const targetClassList = targetEl.classList;

        if (targetClassList.contains('is-has-children')) {
            if (targetClassList.contains('is-open')) {
                this.renderer.removeClass(targetEl, 'is-open');
            } else {
                this.renderer.addClass(targetEl, 'is-open');
            }
        }
    }

    /**
     * copy arrays without reference
     */
    private cloneArray(array) {
        return [...array];
    }

    writeValue(value: any): void {
        super.writeValue(value);
        this.tempSelected = this.selected;
        this.isInSelectAllAction();
        super.setLabel();
    }
}

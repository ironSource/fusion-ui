import {Directive, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, takeUntil} from 'rxjs/operators';
import {detectChangesDecorator} from '@ironsource/fusion-ui/decorators';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {InputComponent} from '@ironsource/fusion-ui/components/input/v1';
import {
    TagsInputBulkInsertOptions,
    TagsInputClearSearchOn,
    TagsInputComponentConfigurations
} from '@ironsource/fusion-ui/components/tags-input/entities';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {DropdownBaseComponent} from '@ironsource/fusion-ui/components/dropdown/common/base';
import {Tag} from '@ironsource/fusion-ui/components/tag/common/entities';

@Directive()
export abstract class TagsInputBaseComponent extends DropdownBaseComponent implements OnInit {
    @ViewChild('tagInput') set tagInput(value: InputComponent) {
        if (!!value && !!value.elementRef && !!value.elementRef.nativeElement) {
            if (this.isAddTagsAllowed || this.autoComplete) {
                this.inputElement = value.elementRef.nativeElement.querySelector('input');
            }
        }
    }

    // deprecated inputs
    @Input() id: string;
    @Input() isAddTagsAllowed = false; // define if input exist nd user can enter new tag
    @Input() isPredefinedTags = false;
    @Input() inputPlaceholder = 'Add...';
    @Input() saveSelectedAsITagObjects = false;
    @Input() generateOnlyCustomTags = false;
    @Input() placeholderPrefix: string;
    @Input() noResultMessage = 'No item matched your search...';
    @Input() generateTagsRegexPattern: string;
    @Input() isBulkInsertTags = false;
    @Input() bulkInsertOptions: TagsInputBulkInsertOptions;
    @Input() maxHeight: number;
    @Input() footer: boolean | {clearAll?: boolean | string};
    @Input() clearSearchOn?: TagsInputClearSearchOn;

    // when using input tags inside an isClickOutside directive,
    // the click from the onremove will cause isClickOutside to trigger as an outside click
    // due to the tag being already removed from the DOM tree when the click reaches isClickOutside
    // in which case we want to set suppressClickOnRemove as true
    @Input() suppressClickOnRemove = false;

    @Input()
    set loading(loading: boolean) {
        this._loading = loading;
    }
    get loading(): boolean {
        return this._loading;
    }

    @Input()
    set error(error: string) {
        this._error = error;
    }
    get error(): string {
        return this._error;
    }

    @Input()
    set tags(value: Array<any>) {
        this.tagsState = !!value
            ? value.map(item => {
                  if (typeof item === 'string') {
                      return {id: this.titleToId(item), title: item};
                  } else if (item?.tooltip) {
                      return Object.assign(item, {
                          tooltipText: item?.tooltip
                      });
                  }
                  return item;
              })
            : [];
        this.setCheckedInOptions();
        if (this.bulkInsertion) {
            this.searchValue.setValue('', {emitEvent: false});
        }

        const newTagsList =
            this.isBulkInMaxValue(this.tagsState) && this.isBulkInsertTags
                ? this.tagsState.slice(0, this.bulkInsertOptions.maxTagsShown)
                : this.tagsState;
        this.displaySelectedTags$.next(newTagsList);
    }
    @Input()
    set tagList(value: Array<any>) {
        this.options = !!value
            ? value.map(item => {
                  if (typeof item === 'string') {
                      return {
                          id: this.titleToId(item),
                          title: item,
                          checked: this.isTagSelected({title: item}),
                          displayText: item
                      };
                  }
                  return Object.assign(item, {
                      checked: this.isTagSelected({title: item.title, id: item.id}),
                      tooltipText: item?.tooltip
                  });
              })
            : [];
        this.tagListChanged.emit();
    }

    // new input configuration -----------
    @Input() set configuration(value: TagsInputComponentConfigurations) {
        if (!!value) {
            this.id = value.id;
            this.tags = value.tags;
            this.tagList = value.tagList;
            this.isPredefinedTags = value.isPredefinedTags;
            this.inputPlaceholder = value.inputPlaceholder;
            this.placeholderPrefix = value.placeholderPrefix;
            this.noResultMessage = value.noResultMessage || 'No item matched your search...';
            this.autoComplete = true;
            this.loading = value.loading;
            this.error = value.error;
            this.maxHeight = value.maxHeight;
            this.isBulkInsertTags = value.isBulkInsertTags;
            this.bulkInsertOptions = value.bulkInsertOptions;
            this.footer = value.footer;
            this.clearSearchOn = value.clearSearchOn;
            this.searchByProperties = value.searchByProperties ?? [];
        }
    }

    @Output() tagsChanged = new EventEmitter();
    @Output() addCustomTag = new EventEmitter();
    @Output() tagListChanged = new EventEmitter();
    @Output() bulkInsert = new EventEmitter<string[]>();

    get tagsSelected() {
        return this.tagsState;
    }

    get displayPlaceholder(): string {
        return this.tagsSelected && this.tagsSelected.length > 0 && this.placeholderPrefix ? this.placeholderPrefix : this.inputPlaceholder;
    }

    get tagsOptions() {
        return this.options;
    }

    get bulkInsertDelimiter(): string {
        return !!this.bulkInsertOptions && !!this.bulkInsertOptions.delimiter ? this.bulkInsertOptions.delimiter : ',';
    }

    get bulkInsertValidator(): (key: string) => boolean {
        return !!this.bulkInsertOptions && !!this.bulkInsertOptions.validateKeyMethod ? this.bulkInsertOptions.validateKeyMethod : Boolean;
    }

    get bulkInsertion(): boolean {
        return this.isBulkInsertTags && this.searchValue.value.indexOf(this.bulkInsertDelimiter) !== -1;
    }

    get isApplyByConfirm(): boolean {
        return !!this.footer;
    }

    get hasClearAll(): boolean {
        return !!this.footer && typeof this.footer !== 'boolean' && this.footer.hasOwnProperty('clearAll');
    }

    get clearAllText(): string {
        return !!this.footer &&
            typeof this.footer !== 'boolean' &&
            this.footer.hasOwnProperty('clearAll') &&
            typeof this.footer.clearAll !== 'boolean'
            ? this.footer.clearAll
            : 'Clear selection';
    }

    filteredDisplayedOptions$: Observable<DropdownOption[]>;
    searchValue = new FormControl('');
    isNotFoundPredefined = false;
    isAddCustomTag = false;
    _error = '';
    _loading = false;
    displaySelectedTags$ = new BehaviorSubject<Tag[] | string[]>([]);

    protected tagsState: Array<Tag> = [];
    protected uid: string;
    protected inputElement: any;

    protected initialSelectedTags = [];
    protected initialTagsOptions = [];

    @HostBinding('class.fu-disabled') get disabled(): boolean {
        return this.isDisabled || this.isDisabledForm;
    }

    private isBulkInMaxValue(value): boolean {
        return !!this.bulkInsertOptions?.maxTagsShown && value.length > this.bulkInsertOptions?.maxTagsShown;
    }

    private titleToId(title: string): string {
        return title.toLowerCase().replace(/ /gi, '_');
    }

    private _mapSelected(): Array<any> {
        return this.saveSelectedAsITagObjects ? this.tagsSelected : this.tagsSelected.map(item => (item.id ? item.id : item));
    }

    private isTagSelected({title, id}: {title: string; id?: number | string}): boolean {
        return this.tagsState.some(tag => tag.title === title && (!isNullOrUndefined(id) ? id === tag.id : true));
    }

    private isAddCustomTagShowed(searchVal: string): boolean {
        if (this.searchValue.value && this.searchValue.value.trim().length >= 2) {
            return this.options.filter(item => item.title.toLowerCase() === searchVal.toLowerCase()).length === 0;
        } else {
            return false;
        }
    }

    private addToTags(newTag: string): boolean {
        if (newTag.length !== 0) {
            if (
                !this.tagsState.some(tag => tag.title.toLowerCase() === newTag.toLowerCase()) &&
                this.shouldAddTagAfterRegExpValidation(newTag)
            ) {
                this.tagsState.push({id: this.titleToId(newTag), title: newTag});
                if (!!this.inputElement) {
                    this.inputElement.value = '';
                }
                if (!this.isApplyByConfirm) {
                    this.propagateChange(this._mapSelected());
                    this.tagsChanged.emit(this.tagsSelected);
                }
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    private addMultiToTags(tagsToAdd: Array<any>): void {
        if (tagsToAdd.length) {
            tagsToAdd.forEach(newVal => {
                if (!this.tagsState.some(item => ('' + item.id).toLowerCase() === newVal.trim().toLowerCase())) {
                    // find in predefined
                    const optionToAdd = this.options.find(option => option.id.toString().toLowerCase() === newVal.trim().toLowerCase());
                    if (optionToAdd) {
                        this.options[this.options.findIndex(item => item.id === optionToAdd.id)].checked = true;
                        this.tagsState.push({id: optionToAdd.id, title: optionToAdd.title, icon: optionToAdd.icon, flag: optionToAdd.flag});
                    } else if (this.generateOnlyCustomTags && this.shouldAddTagAfterRegExpValidation(newVal)) {
                        this.tagsState.push({id: this.titleToId(newVal), title: newVal});
                    }
                }
            });
            this.propagateChange(this._mapSelected());
            this.tagsChanged.emit(this.tagsSelected);
            if (!!this.inputElement) {
                this.inputElement.value = '';
            }
        }
    }

    ngOnInit() {
        this.uid = this.uniqueIdService.getUniqueId().toString();
        this.id = this.id || 'isTagsSelector_' + this.uid;

        if (typeof this.isAddTagsAllowed === 'undefined') {
            this.isAddTagsAllowed = true;
        }

        this.autoComplete = this.autoComplete || false;
        this.arrowNavigation = this.autoComplete;

        super.ngOnInit();

        this.searchValue.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(() => {
            this.onSearchChange();
        });

        this.filteredDisplayedOptions$ = this.displayedOptions$
            .asObservable()
            .pipe(map(values => values.filter(curr => !this.isTagSelected({title: curr.title, id: curr.id}))));
    }

    clearSearch() {
        this.searchValue.reset();
    }

    /**
     * set focus
     */
    setFocusToInput(): void {
        if (!this.isOpen$.getValue()) {
            this.openTagsOptions();
        }
    }

    /**
     * do blur
     */
    onOutsideClick(): void {
        if (this.isOpen$.getValue()) {
            if (this.isApplyByConfirm) {
                this.onCancelSelection();
            } else {
                this.closeTagsOptions();
            }
        }
    }

    onEnterNewTag(value: string): void {
        if (this.bulkInsertion) {
            this.bulkInsert.emit([...new Set(value.split(this.bulkInsertDelimiter).filter(this.bulkInsertValidator))]);
        } else {
            const valToAdd = value.trim();
            if ((!this.autoComplete && !this.generateOnlyCustomTags) || (this.generateOnlyCustomTags && valToAdd.indexOf(',') === -1)) {
                this.addToTags(valToAdd);
            } else if (
                ((this.autoComplete && this.isPredefinedTags) || this.generateOnlyCustomTags) &&
                ((valToAdd.length > 2 && valToAdd.indexOf(',') !== -1) || valToAdd.length === 2)
            ) {
                if (this.searchByProperties.length === 0 || this.searchByProperties.includes('id')) {
                    // add from predefined by _option.id if input delimited by ',' comma
                    this.addMultiToTags(valToAdd.length === 2 ? [valToAdd] : this.inputElement.value.split(','));
                }
            }
            this.searchValue.setValue('');
        }
    }

    onTagRemove(tagToRemove: any): void {
        const idx = this.tagsState.findIndex(tag => {
            return !isNullOrUndefined(tagToRemove.id)
                ? tag.id === tagToRemove.id
                : tag.title.toLowerCase() === tagToRemove.title.toLowerCase();
        });
        if (idx !== -1) {
            this.tagsState.splice(idx, 1);
            this.setCheckedInOptions();

            if (!this.isApplyByConfirm) {
                this.propagateChange(this._mapSelected());
                this.tagsChanged.emit(this.tagsSelected);
            }
        }
    }

    private setCheckedInOptions(): void {
        if (!!this.options) {
            this.options = this.options.map(option => {
                let newOption;
                const isChecked = this.tagsState.some(
                    tag => (tag.id ? tag.id : tag).toString().toLowerCase() === option.id.toString().toLowerCase()
                );
                if (option.checked !== isChecked) {
                    option.checked = isChecked;
                    newOption = {...option};
                } else {
                    newOption = option;
                }

                return newOption;
            });
        }
    }

    onSearchChange(): void {
        if (!this.bulkInsertion) {
            if (this.isPredefinedTags) {
                if (this.isAddTagsAllowed) {
                    this.isAddCustomTag = this.isNotFoundPredefined || this.isAddCustomTagShowed(this.searchValue.value);
                }
                this.displayedOptions$.next(this.parseOptions(this.optionsState));
            } else if (this.autoComplete && this.searchValue.value && this.searchValue.value.trim().length) {
                this.options = [];
                super.onSearchChange();
            }
        }
    }

    private _addCustomPredefinedTag(customTag: string): void {
        // add to tags list
        if (this.addToTags(customTag)) {
            this.isAddCustomTag = false;
            // add to options (as checked)
            this.options.push({id: this.options.length, displayText: customTag, title: customTag, checked: true});
            this.options.sort((a, b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();
                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                }
                return 0;
            });
            // call to parent...
            this.addCustomTag.emit(customTag);
        }
    }

    addCustomPredefinedTag(event: any): void {
        if (event) {
            event.preventDefault();
        }
        this._addCustomPredefinedTag(this.searchValue.value);
        this.searchValue.setValue('', {emitEvent: false});
    }

    @detectChangesDecorator
    changeSelected({option, $event}: {option?: any; $event?: Event}): void {
        if (option.title.length !== 0) {
            if (!this.tagsState.some(tag => tag.title.toLowerCase() === option.title.toLowerCase() && tag.id === option.id)) {
                this.options = this.options.map(item => {
                    let newItem;
                    if (item.id === option.id) {
                        item.checked = true;
                        newItem = {...item}; // trigger change detection only for clicked option
                    } else {
                        newItem = item;
                    }

                    return newItem;
                });
                this.tagsState.push({
                    id: option.id,
                    title: option.title,
                    icon: option.icon,
                    flag: option.flag,
                    tooltip: option.tooltipText
                });
                if (!this.isApplyByConfirm) {
                    this.propagateChange(this._mapSelected());
                    this.tagsChanged.emit(this.tagsSelected);
                }
                if (this.clearSearchOn === TagsInputClearSearchOn.Select) {
                    this.clearSearch();
                }
                this.displaySelectedTags$.next(this.tagsState);
                this.isAddCustomTag = false;
                this.displayedOptions$.next(this.parseOptions(this.options));
            }
            if ($event) {
                $event.stopPropagation();
            }
        }
    }

    isNoResults() {
        const firstCondition =
            this.isPredefinedTags &&
            this.isNotFoundPredefined &&
            ((this.saveSelectedAsITagObjects && !this.loading) || !this.saveSelectedAsITagObjects);

        const secondCondition = this.autoComplete && !this.loading && this.searchValue.value && this.filteredOptions.length === 0;
        return firstCondition || secondCondition;
    }

    onClearSelectionClicked($event) {
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this.tagsState = [];
        this.setCheckedInOptions();
        this.displaySelectedTags$.next(this.tagsState);
        this.displayedOptions$.next(this.parseOptions(this.options));
    }

    onCancelSelection() {
        this.options = [...this.initialTagsOptions];
        this.tagsState = [...this.initialSelectedTags];
        this.setCheckedInOptions();
        this.displaySelectedTags$.next(this.tagsState);
        this.displayedOptions$.next(this.parseOptions(this.options));
        this.closeTagsOptions();
    }

    onApplySelection() {
        if (this.hasChanges()) {
            this.propagateChange(this._mapSelected());
            this.tagsChanged.emit(this.tagsSelected);
        }
        this.closeTagsOptions();
    }

    private openTagsOptions() {
        this.isOpen$.next(true);
        if (!!this.inputElement) {
            this.inputElement.focus();
        }
        if (this.isApplyByConfirm) {
            this.initialSelectedTags = [...this.tagsState];
            this.initialTagsOptions = [...this.options];
        }
        // add calculation if need open above the input
        setTimeout(this.calcOptionHolderPosition.bind(this), 0);
        // reset options
        this.setCheckedInOptions();
    }

    private closeTagsOptions() {
        this.isOpen$.next(false);
        this.resetOptionsStyle();
        if (this.autoComplete && !this.isPredefinedTags) {
            this.searchValue.setValue('');
            if (!!this.inputElement) {
                this.inputElement.value = this.searchValue.value;
            }
            if (!this.isPredefinedTags) {
                this.options = [];
            }
        }
        if (this.clearSearchOn === TagsInputClearSearchOn.Close) {
            this.clearSearch();
        }
        this.pagination = {...this.pagination, counter: 1, lastCounter: 0};
        this.displayedOptions$.next(this.parseOptions(this.optionsState));
    }

    private getOptionById(value: Array<any>) {
        return this.options.filter(item => value.some(val => item.id === (val.id ? val.id : val)));
    }

    private isTypeOfITags(value: any): boolean {
        return value && value instanceof Array && value.length > 0 && value[0].id && value[0].title;
    }

    private shouldAddTagAfterRegExpValidation(tagName): boolean {
        if (!this.generateTagsRegexPattern) {
            return true;
        }
        const regExp = new RegExp(this.generateTagsRegexPattern);
        return regExp.test(tagName);
    }

    private hasChanges(): boolean {
        if (this.initialSelectedTags.length === this.tagsState.length) {
            // same length - compare by content
            return !this.initialSelectedTags.every(item => {
                return this.tagsState.some(tag => tag === item);
            });
        }
        return true;
    }

    // Implement ControlValueAccessor methods
    propagateChange = (_: any) => {};

    writeValue(value: string[] | Tag[]): void {
        if (isNullOrUndefined(value)) {
            this.tags = [];
        } else if (this.isTypeOfITags(value)) {
            this.tags = [...value];
        } else if (!this.bulkInsertion) {
            this.tags = this.getOptionById(Array.isArray(value) ? value : [value]);
        } else {
            this.tags = value;
        }
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
}

import {
    ChangeDetectorRef,
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Injector,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    Renderer2,
    TemplateRef,
    ViewChild
} from '@angular/core';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {ControlValueAccessor, FormControl} from '@angular/forms';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {ClonePipe} from '@ironsource/fusion-ui/pipes/clone';
import {debounceTime, distinctUntilChanged, map, switchMapTo, take, takeUntil} from 'rxjs/operators';
import {FilterByFieldPipe} from '@ironsource/fusion-ui/pipes/collection';
import {detectChangesDecorator} from '@ironsource/fusion-ui/decorators';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {SharedEventsService} from '@ironsource/fusion-ui/services/events-handler';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/service';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {DropdownSearchComponent} from '@ironsource/fusion-ui/components/dropdown-search';
import {DropdownSelectComponent} from '@ironsource/fusion-ui/components/dropdown-select';
import {DropdownSelectConfigurations} from '@ironsource/fusion-ui/components/dropdown-select/entities';
import {DROPDOWN_DEBOUNCE_TIME, DROPDOWN_OPTIONS_WITHOUT_SCROLL} from './dropdown-config';
import {
    BackendPagination,
    ClosedOptions,
    DropdownPlaceholderConfiguration,
    DropdownTriggerMode
} from '@ironsource/fusion-ui/components/dropdown/entities';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';
import {DropdownTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

@Directive()
export abstract class DropdownBaseComponent extends ApiBase implements OnInit, OnDestroy, OnChanges, ControlValueAccessor {
    @Input() testId: string;

    @Input() set options(value: DropdownOption[]) {
        this.optionsState = this.cloneOptions(value);
        this.displayedOptions$.next(this.parseOptions(this.optionsState));
    }

    /** @ignore */
    @Input() set optionsGroups(value: Array<any>) {
        if (value) {
            this.options = this.dropdownService.mapGroupedOptions(value);
        }
    }

    /** @ignore */
    @Output() optionsChange = new EventEmitter<DropdownOption[]>();
    /** @ignore */
    @Input() selected: DropdownOption[] = [];
    /** @ignore */
    @Output() selectedChange = new EventEmitter<DropdownOption[]>();
    /** @internal */
    @Input() placeholderPrefix: string;
    /** @internal */
    @Input() searchPlaceholder = 'Search';
    /** @internal */
    @Input() placeholderWidth = '';
    /** @ignore - add to story later*/
    @Input() dynamicPlaceholder: DynamicComponentConfiguration;
    /**
     * @deprecated since version 6.0.0
     * @ignore
     */
    @Input() icon: IconData;
    /** @internal */
    @Input() filterIconName: string;
    /** @internal */
    @Input() isIconRightPosition = false;
    /** @internal */
    @Input() isDisabled: boolean;
    /** @internal */
    @Input() readonly: boolean;
    /** @internal */
    @Input() search: boolean;
    /** @internal */
    @Input() autoComplete: boolean;
    /** @internal */
    @Input() mappingOptions: any;
    /** @internal */
    @Input() limitOptions = 10;

    /** @internal */
    @Input() set placeholderLocation(location: 'right' | 'left') {
        if (location) {
            this._isLocatedLeft = 'left' === location;
            this._isLocatedRight = 'right' === location;
        }
    }

    /** @internal */
    @Input() set loading(value: boolean) {
        this.isLoadingManuallyChanged = true;
        this.loadingState = value;
    }

    /** @ignore */
    @Input() strictSearch: boolean;
    /** @ignore */
    @Input() arrowNavigation: boolean;

    /** @internal */
    @Input()
    set error(error: string) {
        this._error = error;
        this.dropdownSelectConfigurations$.next(this.getDropdownSelectConfigurations());
    }

    get error(): string {
        return this._error;
    }

    /** @ignore */
    @Input()
    set optionsTitle(value: string) {
        this._optionsTitle = value;
    }

    /** @ignore */
    get optionsTitle(): string {
        return this._optionsTitle;
    }

    /** @ignore */
    @Input() optionRightHoverText;
    /** @ignore */
    @Input() changeConfirmation: () => Promise<boolean>;
    /** @ignore */
    @Input() optionCloseIcon: boolean;
    /** @ignore */
    @Input() helper: string;

    /** @ignore */
    @Input() set backendPagination(value: BackendPagination) {
        this.onBackendPaginationChanged(value);
        this.backendPaginationState = value;
    }

    /** @ignore */
    @Input() isTabMode = false;
    /** @ignore */
    @Input() isMultiRawDisplay = false;

    /** @internal */
    @Input() set placeholder(value: string | DropdownPlaceholderConfiguration) {
        if (typeof value === 'string') {
            this.placeholderText = value ?? 'Please Select';
        } else {
            this.placeholderText = value?.placeholderText ?? 'Please Select';
            this.placeholderIcon = value?.icon;
            this.forcePlaceholderOnSelection = value?.isForcedPlaceholder ? value?.isForcedPlaceholder : this.forcePlaceholderOnSelection;
        }
    }

    /** @ignore */
    @Input() optionsRenderByHover = true;
    /** @internal */
    @Input() searchByProperties?: string[] = [];
    /** @internal */
    @Output() searchChange = new EventEmitter();
    /** @internal */
    @Output() searchClear = new EventEmitter();
    /** @internal */
    @Output() optionCloseIconClicked = new EventEmitter();
    /** @internal */
    @Output() closed = new EventEmitter<ClosedOptions>();

    /** @ignore */
    @ViewChild('optionsHolder') optionsHolderElRef: ElementRef;
    /** @ignore */
    @ViewChild('searchComponent') searchComponent: DropdownSearchComponent;
    /** @ignore */
    @ViewChild('selectComponent') selectComponent: DropdownSelectComponent;
    /** @ignore */
    @ViewChild('chipContent', {static: true}) chipContent: TemplateRef<any>;
    /** @ignore */
    @ViewChild('trigger') trigger: ElementRef;

    /** @ignore */
    onDestroy$ = new Subject<void>();
    /** @ignore */
    forcePlaceholderOnSelection = false;
    /** @ignore */
    placeholderText = 'Please Select';
    /** @ignore */
    placeholderIcon: IconData;
    /** @ignore */
    isOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    /** @ignore */
    id: any = this.uniqueIdService.getUniqueId().toString();
    /** @ignore */
    searchValue = new FormControl();
    /** @ignore */
    subject = new Subject();
    /** @ignore */
    labelImageSrc: string;
    /** @ignore */
    labelFlag: string;
    /** @ignore */
    isPredefinedTags = false; // from tag-input
    /** @ignore */
    isNotFoundPredefined = false; // from tag-input
    /** @ignore */
    isLoadingManuallyChanged = false;
    /** @ignore */
    pagination = {
        latestScrollHeight: null,
        counter: 1,
        lastCounter: 0,
        percentScrollDown: 0.2,
        oneTimeFlagScroll: false
    };
    /** @ignore */
    placeholder$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    /** @ignore */
    searchPlaceholder$: BehaviorSubject<string> = new BehaviorSubject<string>(this.searchPlaceholder);
    /** @ignore */
    backendPaginationChanged$: Subject<any> = new Subject();
    /** @ignore */
    displayedOptions$ = new BehaviorSubject<DropdownOption[]>([]);
    /** @ignore */
    displayedOptionsObservable$: Observable<DropdownOption[]>;
    /** @ignore */
    dropdownArrowIconName = {
        iconName: 'arrow-dropdown',
        iconVersion: 'v1'
    };
    /** @ignore */
    isAllSelected: boolean;
    /** @ignore */
    isIndeterminate = false;
    /** @ignore */
    optionSelected$ = new BehaviorSubject<any>('');
    /** @ignore */
    chipDefaultContent: string;

    protected _triggerMode: DropdownTriggerMode = 'default';
    private _optionsTitle: string;
    protected _error: string;
    private _isLocatedRight = false;
    private _isLocatedLeft = false;
    private initPlaceholder: string;
    protected isDisabledForm: boolean;
    private initIcon: IconData;
    protected focusedLI = -1;
    private loadingState: boolean;
    private backendPaginationState: BackendPagination;
    private backendPaginationTotalResult: number;
    private backendPaginationPageNumber = 1;
    private filteredOptionsState: DropdownOption[] = [];
    protected optionsState: DropdownOption[] = [];
    /** @ignore */
    public dropdownSelectConfigurations$ = new BehaviorSubject<DropdownSelectConfigurations>(this.getDropdownSelectConfigurations());

    private parentWithOverflow: HTMLElement;

    testIdDropdownModifiers: typeof DropdownTestIdModifiers = DropdownTestIdModifiers;

    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    @HostBinding('attr.data-testid') get testAttribute(): string {
        return this.testId;
    }

    get filteredOptions(): DropdownOption[] {
        return this.filteredOptionsState;
    }

    get hasScroll(): boolean {
        if (this.options) {
            const hasSubOptions = this.options.some(option => Array.isArray(option.childOptions));
            return hasSubOptions || this.displayedOptions$.getValue().length > DROPDOWN_OPTIONS_WITHOUT_SCROLL;
        }
    }

    get isLocatedLeft() {
        return this._isLocatedLeft;
    }

    get isLocatedRight() {
        return this._isLocatedRight;
    }

    // eslint-disable-next-line
    get loading(): boolean {
        return this.loadingState;
    }

    // eslint-disable-next-line
    get options(): DropdownOption[] {
        return this.optionsState || [];
    }

    get isMulti(): boolean {
        return false;
    }

    constructor(
        /** @ignore */
        public dropdownService: DropdownService,
        protected uniqueIdService: UniqueIdService,
        protected element: ElementRef,
        protected renderer: Renderer2,
        protected filterByFieldPipe: FilterByFieldPipe,
        /** @ignore */
        public cdr: ChangeDetectorRef,
        protected clonePipe: ClonePipe,
        protected sharedEventsService: SharedEventsService,
        protected injector: Injector
    ) {
        super();
    }

    ngOnInit() {
        if (this.templateRef) {
            this.optionsRenderByHover = false;
        }
        this.contentTemplate = this.chipContent;
        this.displayedOptionsObservable$ = this.getDisplayedOptionsObservable();
        this.arrowNavigation = this.arrowNavigation || false;
        this.icon = this.icon || '';
        this.placeholder$.next(this.placeholderText);
        this.initPlaceholder = this.placeholderText;
        this.initIcon = typeof this.icon === 'string' ? this.icon : {...this.icon};
        this.search = this.search || false;
        this.strictSearch = this.strictSearch || false;
        this.selected = this.selected || [];
        this.mappingOptions = {
            id: 'id',
            title: 'title',
            displayText: 'displayText',
            ...this.mappingOptions
        };

        if (!this.autoComplete && (!this.options || !this.options.length)) {
            this.options = this.options || [];
        }

        this.setLabel();
        // debounceTime - Wait 1 second before creating another http call
        // distinctUntilChanged - Block new request if with the same request:
        // Example for distinctUntilChanged: entered '123' - generate a call,
        // clear '3' and then type again '3'. instead of '3' requests will be only 1.
        this.subject.pipe(takeUntil(this.onDestroy$), debounceTime(DROPDOWN_DEBOUNCE_TIME), distinctUntilChanged()).subscribe(() => {
            if (this.searchValue.value && this.searchValue.value.trim().length !== 0) {
                this.searchChange.emit(this.searchValue.value);
            } else {
                if (this.autoComplete) {
                    this.options = [];
                }
                this.searchClear.emit();
            }
            this.displayedOptions$.next(this.parseOptions(this.options));
        });

        this.initListeners();
    }

    /** @ignore */
    getDropdownSelectConfigurations(): DropdownSelectConfigurations {
        return {
            selectedOption: this.selected,
            dynamicContent: this.dynamicPlaceholder,
            placeholder: {
                prefix: this.placeholderPrefix,
                search: this.searchPlaceholder$.getValue(),
                value: this.placeholder$.getValue(),
                width: this.placeholderWidth,
                forcePlaceholderOnSelection: this.forcePlaceholderOnSelection,
                overlayLocation: this.placeholderLocation
            },
            disabled: this.isDisabled || this.isDisabledForm,
            readonly: this.readonly,
            isTabMode: this.isTabMode,
            isSearch: this.autoComplete || this.search,
            isOpen: this.isOpen$.getValue(),
            error: this.error,
            icon: this.icon || this.placeholderIcon,
            labelFlag: this.labelFlag,
            labelImage: this.labelImageSrc,
            dropdownArrowIconName: this.dropdownArrowIconName,
            isMultipleSelection: this.isMulti,
            filterIconName: this.filterIconName
        };
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();

        this.resetState$.complete();

        this.backendPaginationChanged$.next();
        this.backendPaginationChanged$.complete();
    }

    ngOnChanges(changes) {
        if (changes.placeholder) {
            this.placeholder$.next(this.placeholderText);
        }
        if (changes.options && !this.isLoadingManuallyChanged) {
            this.loadingState = !this.options || this.options?.length === 0;
        }
        this.dropdownSelectConfigurations$.next(this.getDropdownSelectConfigurations());
    }

    /** @ignore */
    initListeners() {
        this.dropdownSelectConfigurations$.next(this.getDropdownSelectConfigurations());
        this.searchValue.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(() => {
            this.onSearchChange();
        });
        this.dropdownService.closeAll$.pipe(takeUntil(this.onDestroy$)).subscribe(event => {
            if (!!(event.target as Element).closest('div.dropdown-arrow-container')) {
                return;
            }
            this.closeDropdown();
        });
        this.apiBaseListeners();
    }

    /**
     * Subscribe for that search text as been changed
     * @ignore
     */
    onSearchChange() {
        this.focusedLI = -1;
        if (!isNullOrUndefined(this.searchValue.value) && !this.searchValue.value.trim().length && this.autoComplete) {
            this.clearOptions();
        }
        this.subject.next(this.searchValue.value);
    }

    /**
     * Open dropdown windows
     * @ignore
     */
    openDropdown(event: MouseEvent) {
        const forceOpen = !!(event.target as Element).closest('div.dropdown-arrow-container');
        if (!(this.isDisabled || this.isDisabledForm) && !this.readonly) {
            if (!this.isTabMode || forceOpen) {
                if (this.isOpen$.getValue()) {
                    this.closeDropdown();
                } else {
                    this.isOpen$.next(true);
                    setTimeout(this._onDropdownOpened.bind(this), 0);
                }
            }
            if (forceOpen && this.isTabMode) {
                event.stopPropagation();
                this.dropdownService.emitCloseAllEvent(event);
            }
        }
        this.dropdownSelectConfigurations$.next(this.getDropdownSelectConfigurations());
    }

    private _onDropdownOpened(): void {
        this.calcOptionHolderPosition();
        this.optionsHolderElRef.nativeElement.scrollTop = 0;
        if ((this.search || this.autoComplete) && this.searchComponent && this.searchComponent.inputComponent) {
            this.searchComponent.inputComponent.setFocus();
        }
    }

    /**
     * Close dropdwn windows
     * @ignore
     */
    @detectChangesDecorator
    closeDropdown({clickOutside = false}: ClosedOptions = {clickOutside: false}) {
        this.isOpen$.next(false);
        this.searchValue.reset('');
        if (!!this.selectComponent?.resetSearch) {
            this.selectComponent.resetSearch();
        }
        this.focusedLI = -1;
        // clear options if in autoComplete mode
        if (this.autoComplete) {
            this.clearOptions();
        }
        this.pagination = {...this.pagination, counter: 1, lastCounter: 0};
        this.displayedOptions$.next(this.parseOptions(this.optionsState));
        this.dropdownSelectConfigurations$.next(this.getDropdownSelectConfigurations());
        this.resetOptionsStyle();

        this.closed.emit({clickOutside});
    }

    /**
     * Set a label to dropdown main button
     * @ignore
     */
    setLabel() {
        if (this._triggerMode === 'button-add') {
            return;
        }
        this.labelImageSrc = undefined;
        let placeholder = this.initPlaceholder;
        let placeholderForSearch = this.searchPlaceholder;
        this.icon = this.initIcon;
        this.labelFlag = '';
        if (this.selected && this.selected.length > 0 && !this.forcePlaceholderOnSelection) {
            if (this.selected.length === 1) {
                placeholder = this.getFirstSelectedLabel();
                placeholderForSearch = this.selected[0].titleText
                    ? this.selected[0].titleText
                    : this.dropdownService.optionToString(this.selected[0], this.mappingOptions, {}, true);
                if (!!this.selected[0].icon) {
                    this.icon = this.selected[0].icon;
                }
                if (!!this.selected[0].image) {
                    this.labelImageSrc = this.selected[0].image;
                }
                if (this.selected[0].flag) {
                    this.labelFlag = this.selected[0].flag;
                } else {
                    this.labelFlag = '';
                }
            } else {
                const placeholderPrefix = this.isAllSelected ? 'All' : `${this.selected.length}`;
                if (this.placeholderChipV4Mode) {
                    placeholderForSearch = placeholder =
                        placeholderPrefix === 'All' ? `${placeholderPrefix}` : this.getFirstSelectedLabel(2);
                } else {
                    placeholderForSearch = placeholder = this.placeholderPrefix
                        ? `${placeholderPrefix} ${this.placeholderPrefix} ${placeholderPrefix !== 'All' ? 'selected' : ''}`
                        : `${this.selected.length} selected`;
                }
            }
        }

        this.placeholder$.next(placeholder);
        this.searchPlaceholder$.next(placeholderForSearch);
        this.optionSelected$.next(
            placeholder !== this.initPlaceholder
                ? this.selectedTypeObject && Array.isArray(this.selected) && this.selected.length
                    ? this.selected[0]
                    : placeholder
                : null
        );
        this.dropdownSelectConfigurations$.next(this.getDropdownSelectConfigurations());
    }

    /** @ignore */
    getHolderCSSClasses(): string[] {
        return [
            this.isIconRightPosition && 'is-icon-right-position',
            this.isOpen$.getValue() && 'dd-opened',
            !!this.selected && this.selected.length && 'ss-selected',
            (this.isDisabled || this.isDisabledForm) && 'dd-disabled',
            this.readonly && 'dd-readonly',
            this.isTabMode && 'is-tab-mode'
        ].filter(Boolean);
    }

    /** @ignore */
    parseOptions(options: DropdownOption[]): DropdownOption[] {
        if (options) {
            let filteredOptions = [...options];

            if (
                (!this.autoComplete && !this.backendPaginationState && this.searchValue && this.searchValue.value) ||
                this.isPredefinedTags
            ) {
                let filterByArray: string[] = [];
                if (this.searchByProperties?.length) {
                    filterByArray = this.searchByProperties;
                } else if (this.mappingOptions) {
                    filterByArray = Object.values(this.mappingOptions);
                }
                // use filter !(item.checked && this.isPredefinedTags) because in tags-input component item.checked
                // must bot showed and in drop-down can
                filteredOptions = this.filterByFieldPipe.transform(
                    filteredOptions.filter(item => !(item.checked && this.isPredefinedTags)),
                    filterByArray,
                    this.searchValue ? this.searchValue.value : null,
                    {
                        caseSensitive: this.strictSearch,
                        ignoreKey: this.isMulti ? 'isGroup' : null
                    }
                );

                if (this.isMulti) {
                    filteredOptions = this.dropdownService.filterEmptyGroupTitle(filteredOptions);
                }

                this.isNotFoundPredefined = !filteredOptions.length;
            }
            if (this.limitOptions && this.limitOptions > 0 && this.pagination.counter * this.limitOptions < this.options.length) {
                filteredOptions = filteredOptions.slice(0, this.limitOptions * this.pagination.counter);
            }
            this.filteredOptionsState = filteredOptions;
            return filteredOptions || [];
        } else {
            return [];
        }
    }

    /** @ignore */
    isSelected(option): boolean {
        return (
            this.selected &&
            this.selected.length > 0 &&
            this.selected.some(item => {
                if (!isNullOrUndefined(option.id) && !isNullOrUndefined(item.id)) {
                    return item.id === option.id; // in case not same instance
                } else {
                    return item === option;
                }
            })
        );
    }

    /**
     * Add arrows key navigation for the drop-down
     * @ignore
     */
    @HostListener('keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (!this.arrowNavigation) {
            return;
        }

        event.stopPropagation();

        const keyCodes: string[] = ['ArrowDown', 'ArrowUp', 'Enter', 'Escape'];
        const elements: any[] = this.element.nativeElement.querySelectorAll('li.option:not(.is-hidden)');

        if (elements && elements.length !== 0 && keyCodes.indexOf(event.code) !== -1) {
            const elementLastIndex = elements.length - 1;
            switch (event.code) {
                case 'ArrowDown':
                    if (this.focusedLI < elementLastIndex) {
                        this.focusedLI++;
                    }
                    this.setLIFocused(elements[this.focusedLI]);
                    break;
                case 'ArrowUp':
                    if (this.focusedLI > 0) {
                        this.focusedLI--;
                    }
                    this.setLIFocused(elements[this.focusedLI]);
                    break;
                case 'Enter':
                    if (this.focusedLI >= 0) {
                        if (elements[this.focusedLI]) {
                            elements[this.focusedLI].click();
                        }

                        if (elements[this.focusedLI + 1]) {
                            this.setLIFocused(elements[this.focusedLI + 1]);
                        } else if (elements[this.focusedLI - 1]) {
                            this.setLIFocused(elements[this.focusedLI - 1]);
                            this.focusedLI--;
                        } else {
                            this.focusedLI = 0;
                        }
                    }
                    break;
                case 'Escape':
                    this.closeDropdown();
                    break;
            }
        }
    }

    /** @ignore */
    onScroll($event) {
        if (this.options) {
            const target = $event.target;
            if (this.pagination.counter * this.limitOptions > this.options.length) {
                if (this.isScrollReachEnd(target)) {
                    this.onScrollReachEnd();
                }
                return;
            }

            if (this.pagination.lastCounter === this.pagination.counter || this.loading) {
                // ignore scroll when data not rendered yet or data loading
                return;
            }
            if (
                target.scrollHeight - (target.offsetHeight + target.scrollTop) + 2 <
                target.scrollHeight * this.pagination.percentScrollDown
            ) {
                this.pagination.lastCounter = this.pagination.counter;
                this.pagination.counter++;
                this.pagination.oneTimeFlagScroll = true;
                this.displayedOptions$.next(this.parseOptions(this.options));
            }
        }
    }

    /**
     * select / remove option from selected list
     * @ignore
     */
    @detectChangesDecorator
    changeSelected({option, $event}: {option?: any; $event?: any}) {
        // ignore click on selected
        if (this.selected && this.selected[0] && option && this.selected[0].id === option.id) {
            return;
        }

        if ($event) {
            const subOptionId = $event.target.closest('li').dataset.id;
            if (Array.isArray(option.childOptions) && subOptionId) {
                option = option.childOptions.find(item => item.id.toString() === subOptionId);
                $event.stopPropagation();
            }
        }

        if (!isNullOrUndefined(this.changeConfirmation) && !this.selected.some(item => item.id === option.id)) {
            this.changeConfirmation().then(isReset => {
                if (isReset) {
                    this.doChanges(option);
                } else {
                    this.closeDropdown();
                }
            });
        } else {
            this.doChanges(option);
        }
    }

    /** @ignore */
    changeConfig(val: string) {
        this.element.nativeElement.style.setProperty('--fu-chip-max-width', val);
    }

    /** @ignore */
    valueSelected() {
        return this.optionSelected$.asObservable().pipe(map(value => ({value, isSelected: !!value})));
    }

    /** @ignore */
    open() {
        this.trigger.nativeElement.click();
    }

    /** @ignore */
    onCloseIconClicked(option: DropdownOption) {
        this.optionCloseIconClicked.emit(option);
    }

    private doChanges(option?: DropdownOption): void {
        if (!Array.isArray(option.childOptions)) {
            this.selected = !option ? [] : [option];
            this.propagateChange(this.selected);
            this.selectedChange.emit(this.selected);
            this.closeDropdown();
            this.setOptionsAndLabel();
        } else {
            this.options = this.optionsState.map((optionItem: DropdownOption) =>
                optionItem.id === option.id
                    ? {
                          ...option,
                          isOpen: !option?.isOpen
                      }
                    : optionItem
            );
        }
    }

    /**
     * clear all options and notify.
     * @ignore
     */
    clearOptions() {
        this.options = [];
        this.optionsChange.emit(this.options);
        this.searchClear.emit();
    }

    /**
     * event from directive on outside component click
     * @ignore
     */
    onOutsideClick(target?) {
        this.closeDropdown({clickOutside: true});
    }

    private getFirstSelectedLabel(amount = 1): string {
        const labelString = this.selected
            .slice(0, amount)
            .map(item =>
                item.titleText
                    ? item.titleText
                    : this.placeholderChipV4Mode && item.flag
                    ? item.flag.toUpperCase()
                    : this.dropdownService.optionToString(item, this.mappingOptions)
            )
            .join(', ');

        const andPlus = this.selected.length > amount ? `, +${this.selected.length - amount}` : '';

        return labelString + andPlus;
    }

    private cloneOptions(options: DropdownOption[]): DropdownOption[] {
        if (isNullOrUndefined(options)) {
            return [];
        }
        return this.optionsState && this.optionsState.length ? [...options] : this.clonePipe.transform(options);
    }

    private setLIFocused(element: any): void {
        const focusedElement = this.element.nativeElement.querySelector('li.is-focused');
        if (focusedElement) {
            this.renderer.removeClass(focusedElement, 'is-focused');
        }
        if (!!element) {
            this.renderer.addClass(element, 'is-focused');
            element.scrollIntoView(false);
        }
    }

    private setOptionsAndLabel(): void {
        if (this.selected && this.selected.length !== 0) {
            const optionsSettings = this.dropdownService.setOptionsState(this.options, this.selected);
            this.options = optionsSettings.options;
            this.setLabel();
        } else {
            this.setLabel();
        }
    }

    private onBackendPaginationChanged(backendPagination: BackendPagination): void {
        this.backendPaginationChanged$.next();
        this.backendPaginationTotalResult = null;
        this.backendPaginationPageNumber = 1;
        this.options = null;
        this.loading = true;
        if (backendPagination) {
            backendPagination
                .backendGetFunction(backendPagination.getOptions)
                .pipe(takeUntil(this.backendPaginationChanged$))
                .subscribe(val => {
                    const value = val ? [...val[backendPagination.responseDataPropertyName]] : null;
                    this.options = this.sortOptions({
                        backendPagination,
                        dropdownOptions: value
                            ? backendPagination.mappingFunction
                                ? value.map(backendPagination.mappingFunction)
                                : value
                            : null
                    });
                    this.backendPaginationTotalResult = val ? val[backendPagination.responseTotalCountPropertyName] : null;
                    this.loading = false;
                    this.cdr.markForCheck();
                });
        }
    }

    private onScrollReachEnd(): void {
        if (!this.loading) {
            if (this.backendPaginationState) {
                if (this.backendPaginationTotalResult && this.backendPaginationTotalResult > this.options.length) {
                    this.loading = true;
                    this.backendPaginationState
                        .backendGetFunction({
                            ...this.backendPaginationState.getOptions,
                            pageNumber: this.backendPaginationPageNumber + 1
                        })
                        .pipe(take(1))
                        .subscribe(val => {
                            const responseValue =
                                val && Array.isArray(val[this.backendPaginationState.responseDataPropertyName])
                                    ? val[this.backendPaginationState.responseDataPropertyName]
                                    : [];
                            const value = this.backendPaginationState.mappingFunction
                                ? responseValue.map(this.backendPaginationState.mappingFunction)
                                : responseValue;
                            const dropdownOptions = this.sortOptions({
                                backendPagination: this.backendPaginationState,
                                dropdownOptions: [...value]
                            });
                            this.options = [...this.options, ...dropdownOptions];
                            this.loading = false;
                            this.backendPaginationPageNumber++;
                            this.cdr.markForCheck();
                        });
                }
            }
        }
    }

    private sortOptions({
        backendPagination,
        dropdownOptions
    }: {
        backendPagination: BackendPagination;
        dropdownOptions: DropdownOption[];
    }): DropdownOption[] {
        if (backendPagination.sortingFunction) {
            return dropdownOptions.sort(backendPagination.sortingFunction);
        }
        return dropdownOptions;
    }

    private isScrollReachEnd(target: any): boolean {
        return target.scrollHeight - target.scrollTop <= target.clientHeight + 10;
    }

    /**
     * Calculate if need  options open above
     */
    protected calcOptionHolderPosition() {
        const hostEl = this.element.nativeElement;
        const optionsHolder = hostEl.querySelector('.options-dropdown');
        if (optionsHolder) {
            if (this.parentWithOverflow === undefined || !document.contains(this.parentWithOverflow)) {
                this.parentWithOverflow = this.getParentWithOverflow(hostEl);
            }
            if (this.parentWithOverflow !== null) {
                const parentOverflowRect = this.parentWithOverflow.getBoundingClientRect();
                const optionsHolderRect = optionsHolder.getBoundingClientRect();
                const hostHolderRect = hostEl.getBoundingClientRect();
                const hasSpaceOnUp = hostHolderRect.top - parentOverflowRect.top > optionsHolderRect.height;
                if (hasSpaceOnUp && parentOverflowRect.bottom - optionsHolderRect.bottom <= 0) {
                    this.renderer.addClass(hostEl, 'fu-options-position-up');
                }
            }
            this.renderer.setStyle(optionsHolder, 'visibility', 'visible');
        }
    }

    /**
     * Find first parent element with style overflow in 'auto', 'hidden', 'scroll'
     * - childEl
     */
    private getParentWithOverflow(childEl: HTMLElement): HTMLElement {
        const parent = childEl.parentElement;
        let retVal = null;
        if (parent) {
            const parentOverflow = window.getComputedStyle(parent).overflow;
            retVal = ['auto', 'hidden', 'scroll'].includes(parentOverflow) ? parent : this.getParentWithOverflow(parent);
        }
        return retVal;
    }

    protected resetOptionsStyle() {
        const hostEl = this.element.nativeElement;
        this.renderer.removeClass(hostEl, 'fu-options-position-up');
        const optionsHolderEl = hostEl.querySelector('.options-dropdown');
        if (optionsHolderEl) {
            this.renderer.setStyle(optionsHolderEl, 'visibility', 'hidden');
        }
    }

    // Implement ControlValueAccessor methods

    /**
     * Method to call when the component value has changes.
     * @ignore
     */
    propagateChange = (_: DropdownOption[]) => {};

    /**
     * update value from model to the component
     * @ignore
     */
    writeValue(value: any): void {
        if (isNullOrUndefined(value) || (Array.isArray(value) && value.length === 0)) {
            this.selected = [];
        } else {
            this.selected = Array.isArray(value) ? [...value] : [value];
        }
        this.setOptionsAndLabel();
    }

    /** @ignore */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /** @ignore */
    registerOnTouched(): void {}

    /** @ignore */
    setDisabledState?(isDisabled: boolean): void {
        if (isNullOrUndefined(this.isDisabled)) {
            this.isDisabledForm = isDisabled;
            this.dropdownSelectConfigurations$.next(this.getDropdownSelectConfigurations());
            this.cdr.markForCheck();
        }
    }

    private getDisplayedOptionsObservable(): Observable<DropdownOption[]> {
        if (this.optionsRenderByHover) {
            return this.sharedEventsService
                .getMouseoverObservable({
                    element: this.element.nativeElement,
                    padding: 100
                })
                .pipe(take(1), switchMapTo(this.displayedOptions$.asObservable()));
        } else {
            return this.displayedOptions$.asObservable();
        }
    }

    private apiBaseListeners() {
        this.placeholder$
            .asObservable()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(
                placeholder =>
                    (this.chipDefaultContent = this.placeholderPrefix ? this.placeholderPrefix + ': ' + placeholder : placeholder)
            );
        this.resetState$
            .asObservable()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(_ => {
                this.writeValue(null);
                this.propagateChange(null);
            });
    }
}

import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, TemplateRef, ViewChild} from '@angular/core';
import {InputSize} from '@ironsource/fusion-ui/components/input/common/base';
import {ControlValueAccessor, FormControl} from '@angular/forms';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map, take, takeUntil} from 'rxjs/operators';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {BackendPagination, SelectedItemName} from '@ironsource/fusion-ui/components/dropdown';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {AttributionService} from '@ironsource/fusion-ui/services/attribution';

const CLASS_LIST = [
    'dual-select-button',
    'fu-dual-multi-select-placeholder',
    'dropdown-dual-multi-select-button',
    'clear-all-btn',
    'fu-custom-placeholder',
    'fu-dual-multi-select-placeholder'
];

@Directive()
export abstract class DropdownDualMultiSelectBaseComponent extends ApiBase implements OnInit, ControlValueAccessor, OnDestroy {
    @Input() isDisabled: boolean = false;
    /** @internal */
    @Input() dynamicPlaceholder: DynamicComponentConfiguration;
    /** @internal */
    @Input() totalItems: number;
    /** @internal */
    @Input() suppressClickButton: boolean = false;
    /** @internal */
    @Input() autoComplete: boolean = true;
    @Input() set title(value: string) {
        this._title = value;
        this.setAttribution();
    }
    get title(): string {
        return this._title;
    }
    /** @internal */
    @Input() pendingItems: boolean = false;
    /** @internal */
    @Input() set hasSelectAll(value: boolean) {
        if (!isNullOrUndefined(value)) {
            this._hasSelectAll = value;
        }
    }
    get hasSelectAll(): boolean {
        return this._hasSelectAll;
    }

    @Input() set placeholder(data: string) {
        this.placeholder$.next(data);
        this.defaultPlaceHolder = data;
    }

    /** @internal */
    @Input() set searchByProperties(value: string[]) {
        this._searchByProperties = value;
    }

    get searchByProperties(): string[] {
        return this._searchByProperties;
    }

    /** @internal */
    @Input() set opened(data: boolean) {
        this.opened$.next(data);
    }

    @Input() set items(data: DropdownOption[]) {
        this.items$.next(data || []);
    }

    get items(): DropdownOption[] {
        return this.items$.getValue();
    }

    /**
     * item name for selected placeholder
     * like "2 Applications selected" (singular)
     * or "1 Application selected" (plural)
     * @param value
     */
    @Input() selectedItemName: SelectedItemName;

    // backend pagination same like in dropdown component
    /** @internal */
    @Input() set backendPagination(value: BackendPagination) {
        this.onBackendPaginationChanged(value);
        this.backendPaginationState = value;
    }

    get hasBackendPagination(): boolean {
        return !isNullOrUndefined(this.backendPaginationState);
    }

    @Output() scrollDown = new EventEmitter();
    @Output() searchChange = new EventEmitter();
    @Output() viewChange = new EventEmitter();
    /** @internal */
    @ViewChild('chipContent', {static: true}) chipContent: TemplateRef<any>;
    /** @internal */
    @ViewChild('trigger') trigger: ElementRef;

    /** @internal */
    preSelectedItems = new FormControl();
    /** @internal */
    searchControlTerm = new FormControl('');
    /** @internal */
    items$ = new BehaviorSubject<DropdownOption[]>([]);
    /** @internal */
    opened$ = new BehaviorSubject<boolean>(false);
    /** @internal */
    placeholder$ = new BehaviorSubject<string>('');
    /** @internal */
    confirm: boolean = false;
    /** @internal */
    defaultPlaceHolder: string;
    /** @internal */
    isPositionLeft: boolean;
    /** @internal */
    inputSize = InputSize;
    /** @internal */
    dropdownDualMultiSelectionButtonOptions = {rounded: true, size: this.inputSize.Medium};
    /** @internal */
    selected$ = new BehaviorSubject<any>('');
    /** @internal */
    chipDefaultContent: string;
    /** @internal */
    uid: string;
    /** @internal */
    backendPaginationChanged$: Subject<any> = new Subject();

    private selectedChange: DropdownOption[];
    private parentWithOverflow: HTMLElement;
    private onDestroy$ = new Subject<void>();

    private _searchByProperties: string[];

    private backendPaginationState: BackendPagination;
    private backendPaginationTotalResult: number;
    private backendPaginationPageNumber = 1;
    private _hasSelectAll = true;
    private _title: string;

    /** @internal */
    loadingLeft$ = new BehaviorSubject<boolean>(false);

    constructor(
        protected element: ElementRef,
        protected renderer: Renderer2,
        protected uidService: UniqueIdService,
        protected attributionService: AttributionService
    ) {
        super();
        this.uid = this.uidService.getUniqueId().toString();
    }

    ngOnInit(): void {
        this.selected$.next(this.defaultPlaceHolder);
        this.contentTemplate = this.chipContent;
        this.initializeListeners();
    }

    ngOnDestroy() {
        this.resetState$.complete();
        this.onDestroy$.next();
        this.onDestroy$.complete();
        this.backendPaginationChanged$.next();
        this.backendPaginationChanged$.complete();
    }

    /** @internal */
    onScrollDown(): void {
        if (this.hasBackendPagination && this.backendPaginationTotalResult && this.backendPaginationTotalResult > this.items.length) {
            this.loadingLeft$.next(true);
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
                        leftSideItems: [...value]
                    });
                    this.items = [...this.items, ...dropdownOptions];
                    this.backendPaginationPageNumber++;
                });
        } else {
            this.scrollDown.emit();
        }
    }

    /** @internal */
    changeConfig(val: string) {
        this.element.nativeElement.style.setProperty('--fu-chip-max-width', val);
    }

    /** @internal */
    valueSelected(): Observable<{
        value: string;
        isSelected: boolean;
        selectedCount?: number;
        partialSelect?: {firstSelected?: DropdownOption; totalAmount?: number};
    }> {
        return this.selected$.pipe(
            takeUntil(this.onDestroy$),
            map(value => {
                const partialSelect = {};
                if (!isNullOrUndefined(value) && !value.toString().toLowerCase().startsWith('all ') && !!this.selectedChange?.length) {
                    partialSelect['firstSelected'] = this.selectedChange[0];
                    partialSelect['totalAmount'] = this.totalItems ?? this.items$.getValue().length;
                }
                return (value !== this.defaultPlaceHolder && value !== 'All selected') || this.selectedTypeObject
                    ? {
                          value,
                          isSelected: !!this.selectedChange?.length,
                          selectedCount: this.selectedChange?.length,
                          partialSelect
                      }
                    : {value: null, isSelected: false};
            })
        );
    }

    /** @internal */
    open() {
        this.trigger.nativeElement.click();
    }

    /** @internal */
    applySelect(apply: boolean = false): void {
        this.opened$.next(!apply);
        this.confirm = true;
        this.setLabel();
        this.propagateChange(this.preSelectedItems.value);
        this.selectedChange = Array.isArray(this.preSelectedItems.value) ? [...this.preSelectedItems.value] : this.preSelectedItems.value;
        this.selected$.next(
            this.selectedChange?.length === 1
                ? this.selectedTypeObject
                    ? this.selectedChange[0]
                    : this.selectedChange[0]?.displayText || this.selectedChange[0]?.title
                : this.placeholder$.getValue()
        );
        this.searchControlTerm.setValue('');
        this.viewChange.emit(this.opened$.getValue());
    }

    /** @internal */
    closeDropdownDualSelect(): void {
        this.opened$.next(false);
        this.confirm = false;
        this.writeValue(this.selectedChange);
        this.searchControlTerm.setValue('');
        this.viewChange.emit(this.opened$.getValue());
    }

    /** @internal */
    onClickDualMultiSelectButton(): void {
        if (!this.isDisabled && !this.suppressClickButton) {
            this.opened$.next(true);
            this.isPositionLeft = this.calcDualMultiSelectHolderPosition();
            this.viewChange.emit(this.opened$.getValue());
        }
    }

    /** @internal */
    propagateChange = (_: DropdownOption[]) => {};
    /** @internal */
    propagateTouched = () => {};

    /** @internal */
    writeValue(value: DropdownOption[]): void {
        this.preSelectedItems.setValue(value);
        this.selectedChange = value;
        this.selected$.next(
            value?.length === 1
                ? this.selectedTypeObject
                    ? value[0]
                    : value[0]?.displayText || value[0]?.title
                : this.placeholder$.getValue()
        );
    }

    /** @internal */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /** @internal */
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    /** @internal */
    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    /** @internal */
    onOutsideClick($event): void {
        const regularButtonClicked = !this.dynamicPlaceholder
            ? !($event.closest(`.dual-select-button`)?.id === `${this.uid}-button-regular`)
            : !($event.closest(`.dual-select-button`)?.id === `${this.uid}-button-dynamic`);

        const isClickOutSide = this.templateRef
            ? !$event.closest('fusion-dropdown-dual-multi-select') || !($event.closest(`.is-dropdown-dual-multi-select`)?.id === this.uid)
            : regularButtonClicked;

        const addFilterOptionClicked = !$event.closest('fusion-dropdown-option');

        if (isClickOutSide && addFilterOptionClicked && !$event.closest('.clear-all-btn') && !$event.closest('.icon-clear')) {
            this.closeDropdownDualSelect();
            this.viewChange.emit(this.opened$.getValue());
        }
    }

    protected calcDualMultiSelectHolderPosition(): boolean {
        const hostElement = this.element.nativeElement;
        if (this.parentWithOverflow === undefined || !document.contains(this.parentWithOverflow)) {
            this.parentWithOverflow = this.getParentWithOverflow(hostElement);
        }
        if (this.parentWithOverflow !== null) {
            const parentOverflowRect = this.parentWithOverflow.getBoundingClientRect();
            const hostHolderRect = hostElement.getBoundingClientRect();
            const hasSpaceOnLeft = hostHolderRect.right - parentOverflowRect.left >= 528;

            return hasSpaceOnLeft && parentOverflowRect.right - hostHolderRect.left < 528;
        }
        return false;
    }

    private getParentWithOverflow(childEl: HTMLElement): HTMLElement {
        const parent = childEl.parentElement;
        let retVal = null;
        if (parent) {
            const parentOverflow = window.getComputedStyle(parent).overflow;
            retVal = ['auto', 'hidden', 'scroll'].includes(parentOverflow) ? parent : this.getParentWithOverflow(parent);
        }
        return retVal;
    }

    private changeTerm(term: string): void {
        this.searchChange.emit(term);
    }

    private initializeListeners(): void {
        this.searchControlTerm.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(this.changeTerm.bind(this));
        this.preSelectedItems.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(this.checkSelectItemsChanged.bind(this));
        this.resetState$
            .asObservable()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(_ => {
                this.writeValue(null);
                this.propagateChange(null);
            });
        this.selected$
            .asObservable()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(selected => (this.chipDefaultContent = this.title + ': ' + selected));
    }

    private checkSelectItemsChanged(item: any): void {
        // commented bny fix https://ironsrc-mobile.atlassian.net/browse/FU-484
        // if (JSON.stringify(item) !== JSON.stringify(this.selectedChange) && this.confirm) {
        //     this.selectedChange = item;
        // }
        this.setLabel();
    }

    private setLabel(): void {
        let placeholder = this.defaultPlaceHolder;
        if (this.preSelectedItems.value && this.preSelectedItems.value.length > 0 && this.items$.getValue().length > 0) {
            const itemName = !!this.selectedItemName
                ? this.preSelectedItems.value.length === 1
                    ? this.selectedItemName.singular
                    : this.selectedItemName.plural
                : '';

            const placeholderPrefix =
                this.preSelectedItems.value.length === this.items$.getValue().length ? 'All' : `${this.preSelectedItems.value.length}`;

            placeholder = `${placeholderPrefix + (itemName ? ' ' + itemName : '')} selected`;
        }
        this.placeholder$.next(placeholder);
    }

    private onBackendPaginationChanged(backendPagination: BackendPagination): void {
        this.backendPaginationChanged$.next();
        this.backendPaginationTotalResult = null;
        this.backendPaginationPageNumber = 1;
        this.items = null;
        this.loadingLeft$.next(true);
        if (backendPagination) {
            backendPagination
                .backendGetFunction(backendPagination.getOptions)
                .pipe(takeUntil(this.backendPaginationChanged$))
                .subscribe(val => {
                    const value = val ? [...val[backendPagination.responseDataPropertyName]] : null;
                    this.items = this.sortOptions({
                        backendPagination,
                        leftSideItems: value
                            ? backendPagination.mappingFunction
                                ? value.map(backendPagination.mappingFunction)
                                : value
                            : null
                    });
                    this.backendPaginationTotalResult = val ? val[backendPagination.responseTotalCountPropertyName] : null;
                    this.totalItems = this.backendPaginationTotalResult;
                    this.loadingLeft$.next(false);
                });
        }
    }

    private sortOptions({
        backendPagination,
        leftSideItems
    }: {
        backendPagination: BackendPagination;
        leftSideItems: DropdownOption[];
    }): DropdownOption[] {
        if (backendPagination.sortingFunction) {
            return leftSideItems.sort(backendPagination.sortingFunction);
        }
        return leftSideItems;
    }

    private setAttribution() {
        this.attributionService.prefix = 'dual-multi-select-v3';
        this.attributionService.name = this._title;

        this.attributionName = this.attributionService.name;
    }
}

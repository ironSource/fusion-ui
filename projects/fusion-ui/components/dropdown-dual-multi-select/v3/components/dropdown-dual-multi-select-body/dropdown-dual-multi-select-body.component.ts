import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {BehaviorSubject, combineLatest, fromEvent, Observable, of, Subject} from 'rxjs';
import {debounceTime, filter, map, scan, takeUntil, tap} from 'rxjs/operators';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

const PAGINATION_CHUNK = 20;
@Component({
    selector: 'fusion-dropdown-dual-multi-select-body',
    templateUrl: './dropdown-dual-multi-select-body.component.html',
    styleUrls: ['./dropdown-dual-multi-select-body.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownDualMultiSelectBodyComponent),
            multi: true
        }
    ]
})
export class DropdownDualMultiSelectBodyComponent implements OnInit, OnDestroy, ControlValueAccessor {
    @ViewChild('wrapperLeft', {read: ElementRef, static: true})
    wrapperLeftRef: ElementRef;

    @ViewChild('containerLeft', {read: ElementRef, static: true})
    containerLeftRef: ElementRef;

    @ViewChild('wrapperRight', {read: ElementRef, static: true})
    wrapperRightRef: ElementRef;

    @ViewChild('containerRight', {read: ElementRef, static: true})
    containerRightRef: ElementRef;

    @Input() totalItems: number;
    @Input() isPendingItems: boolean;

    @Input() set items(data: DropdownOption[]) {
        this.options$.next(data || []);
        this.isDisplayOptionAllDisabled(data);
    }
    @Input() set searchTerm(data: string) {
        this.searchTerm$.next(data);
    }

    @Input() set autoComplete(value: boolean) {
        this.autoComplete$.next(value);
    }

    @Output() scrollDown = new EventEmitter();

    isSelectAllDisabled$ = new BehaviorSubject<boolean>(false);
    selectedItemsNumber: number;
    selectedControl = new FormControl([]);
    displayOptions$: Observable<DropdownOption[]>;
    selectedOptions$: Observable<DropdownOption[]>;
    options$ = new BehaviorSubject<DropdownOption[]>([]);
    selectedItemsWorker$ = new BehaviorSubject<DropdownOption[]>([]);
    loadingLeft$ = new BehaviorSubject<boolean>(false);
    selectedItemsMapping = {};
    isAllSelected = false;
    isIndeterminate = false;
    isNoFoundDataToDisplay = false;

    private displayItemsAmount: number;
    private selectedItemsAmount: number;
    private leftPagePagination$ = new BehaviorSubject<number>(1);
    private rightPagePagination$ = new BehaviorSubject<number>(1);
    private onDestroy$ = new Subject<void>();
    private searchTerm$ = new BehaviorSubject<string>('');
    private autoComplete$ = new BehaviorSubject<boolean>(true);
    private propagateChange = (_: DropdownOption[]) => {};
    private propagateTouched = () => {};

    constructor() {}

    ngOnInit(): void {
        this.displayOptions$ = this.generateOptions('left').pipe(
            tap(val => {
                this.displayItemsAmount = val.length;
                this.isDisplayOptionsEmpty(val);
            })
        );
        this.selectedOptions$ = this.generateOptions('right').pipe(
            tap(val => {
                this.selectedItemsAmount = val?.length;
            })
        );
        this.initializeListeners();
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    selectAll(checked?: boolean): void {
        this.isAllSelected = checked;
        this.isIndeterminate = false;
        this.selectedControl.setValue(this.options$.getValue().filter(item => !item.isDisabled || this.selectedItemsMapping[item.id]));

        if (!checked) {
            this.clearAll();
        }
    }

    changeSelected(item: DropdownOption): void {
        if (!item.isDisabled) {
            const objSelectedIndex = this.getSelectedIndex(item);
            const tempSelected = this.selectedControl.value ? [...this.selectedControl.value] : [];
            if (objSelectedIndex > -1) {
                tempSelected.splice(objSelectedIndex, 1);
            } else {
                tempSelected.push(item);
            }
            this.selectedControl.setValue(tempSelected);
        }
    }

    clearSelect(item: DropdownOption): void {
        this.changeSelected(item);
    }

    clearAll(): void {
        const clearedList = this.selectedControl.value.filter(item => {
            return !!item.isDisabled;
        });

        this.selectedControl.setValue(clearedList);
    }

    showClearAllButton(): boolean {
        return (
            this.selectedItemsWorker$.getValue() && this.selectedItemsWorker$.getValue().length !== 0 && this.options$.getValue().length > 0
        );
    }
    trackById(index, item): any {
        return item.id;
    }

    writeValue(value: DropdownOption[]): void {
        this.selectedControl.setValue(value);
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {}

    private generateOptions(optionToDisplay: string): Observable<DropdownOption[]> {
        const options$ = this.options$.asObservable();
        const term$ = this.autoComplete$.getValue() ? this.searchTerm$.asObservable() : of('');
        const leftPagePagination$ = this.getPaginationObservable('left');
        const rightPagePagination$ = this.getPaginationObservable('right');
        const selected$ = this.selectedItemsWorker$.asObservable();
        let conditionToDisplayOptions =
            optionToDisplay === 'left'
                ? {items$: options$, term$, pagination$: leftPagePagination$}
                : {items$: selected$, term$, pagination$: rightPagePagination$};
        return this.getOptionsDisplayObservable(conditionToDisplayOptions);
    }

    private isItemsSelected(items: DropdownOption[]): void {
        this.selectedItemsMapping = items?.reduce((acc: {[key: number]: boolean}, crr: DropdownOption) => {
            acc[crr.id] = true;
            return acc;
        }, {});
    }

    private isDisplayOptionAllDisabled(items: DropdownOption[]): void {
        this.isSelectAllDisabled$.next(items.filter(item => item.isDisabled).length === items.length);
    }

    private isDisplayOptionsEmpty(items: DropdownOption[]): void {
        this.isNoFoundDataToDisplay = items.length === 0 && this.options$.getValue()?.length !== 0;
    }

    private getSelectedIndex(item: DropdownOption): number {
        let optionSelectedIndex = -1;
        let selectedList = this.selectedControl.value || [];
        selectedList.forEach((selectedItem: DropdownOption, index: number) => {
            if (selectedItem.id === item.id) {
                optionSelectedIndex = index;
            }
        });
        return optionSelectedIndex;
    }

    private initializeListeners(): void {
        const scrollLeft$ = this.onScrollChange({wrapper: this.wrapperLeftRef, container: this.containerLeftRef});
        const scrollRight$ = this.onScrollChange({wrapper: this.wrapperRightRef, container: this.containerRightRef});
        scrollLeft$.subscribe(this.onLeftScrollReachBottom.bind(this));
        scrollRight$.subscribe(this.onRightScrollReachBottom.bind(this));
        this.selectedControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(this.onSelectedControlValueChange.bind(this));
    }

    private onScrollChange({wrapper, container}: {wrapper: ElementRef; container: ElementRef}): Observable<any> {
        return fromEvent(wrapper.nativeElement, 'scroll').pipe(
            filter(_ => {
                const top = wrapper.nativeElement.scrollTop;
                const space = container.nativeElement.offsetHeight - this.wrapperLeftRef.nativeElement.offsetHeight - 10;
                return top >= space;
            }),
            debounceTime(10)
        );
    }

    private onSelectedControlValueChange(items: DropdownOption[]): void {
        this.isItemsSelected(items || []);
        this.selectedItemsWorker$.next(items || []);
        this.isIndeterminate = items?.length > 0 && items?.length < this.options$?.getValue().length;
        this.isAllSelected = this.isSelectAllDisabled$.getValue() ? this.isAllSelected : items?.length === this.options$?.getValue().length;
        this.propagateChange(items || []);
    }

    private onLeftScrollReachBottom(): void {
        const isInputLengthLessThanTotalItem = this.options$.getValue()?.length < this.totalItems;
        const isDisplayLengthEqualInputLength = this.displayItemsAmount === this.options$?.getValue().length;
        const isDisplayLengthLessThanInputLength = this.displayItemsAmount < this.options$?.getValue().length;
        const isLoadingLeft = isDisplayLengthEqualInputLength && isInputLengthLessThanTotalItem;
        this.loadingLeft$.next(isLoadingLeft);

        if (isDisplayLengthLessThanInputLength) {
            this.leftPagePagination$.next(1);
        }
        if (isDisplayLengthEqualInputLength) {
            this.scrollDown.emit();
        }
    }

    private onRightScrollReachBottom(): void {
        const isDisplaySelectedLengthLessThanSelectedWorkerLength = this.selectedItemsAmount < this.selectedItemsWorker$?.getValue().length;
        if (isDisplaySelectedLengthLessThanSelectedWorkerLength) {
            this.rightPagePagination$.next(1);
        }
    }

    private getOptionsDisplayObservable({items$, term$, pagination$}): Observable<DropdownOption[]> {
        return combineLatest([items$, term$, pagination$]).pipe(map(this.filterOptions.bind(this)));
    }

    private filterOptions([items, term, pagination]): DropdownOption[] {
        let response = items;
        if (term && items) {
            const searchTerm = term.toLowerCase();
            response = items.filter(item => {
                if (item.title) {
                    return item.title.toLowerCase().indexOf(searchTerm) !== -1;
                } else {
                    return item.displayText.toLowerCase().indexOf(searchTerm) !== -1;
                }
            });
        }
        return response?.slice(0, pagination * PAGINATION_CHUNK);
    }

    private getPaginationObservable(side: 'left' | 'right'): Observable<number> {
        return (side === 'left' ? this.leftPagePagination$ : this.rightPagePagination$).asObservable().pipe(
            scan((acc: number, curr: number) => {
                return curr ? (acc += curr) : 1;
            }, 0)
        );
    }
}

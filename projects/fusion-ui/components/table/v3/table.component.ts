import {
    Input,
    Output,
    OnInit,
    EventEmitter,
    ViewChild,
    HostBinding,
    ElementRef,
    ChangeDetectorRef,
    Component,
    ChangeDetectionStrategy,
    OnDestroy,
    Injector
} from '@angular/core';
import {BehaviorSubject, defer, fromEvent, Subject} from 'rxjs';
import {debounceTime, takeUntil, tap} from 'rxjs/operators';
import {isNullOrUndefined, isUndefined} from '@ironsource/fusion-ui/utils';
import {TableService} from '@ironsource/fusion-ui/components/table/common/services';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {
    TableRowsGrouped,
    TableColumn,
    TableColumnTypeEnum,
    TableOptions,
    TableRowExpandEmitter,
    CONFIG_TABLE_BY_UI_STYLE,
    ROW_CLICK_SUPPRESS_FOR_PARENT_SELECTORS,
    TableIconsConfigByStyle,
    TableRow
} from '@ironsource/fusion-ui/components/table/common/entities';
import {TableBasicComponent} from './components/table-basic/table-basic.component';
import {MenuDropItem} from '@ironsource/fusion-ui/components/menu-drop';
import {FormControl} from '@angular/forms';
import {TableTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

@Component({
    selector: 'fusion-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TableService]
})
export class TableComponent implements OnInit, OnDestroy {
    /** @internal */
    @Input() id: string;
    /**
     * Table Options (configuration)
     * @param value: TableOptions
     */
    @Input() set options(value: TableOptions) {
        if (!isNullOrUndefined(value)) {
            this._options = value;
            this.tableService.hasRowspanRows = value.hasRowSpan ?? false;
            this.tableService.rowsExpandableKey = value.rowsExpandableOptions?.key;
        }
    }
    get options(): TableOptions {
        return this._options;
    }
    /**
     * Table columns configuration
     * columns: TableColumn[]
     */
    @Input() set columns(value: TableColumn[]) {
        if (Array.isArray(value)) {
            this._columns = value;
            this.subHeader = this.getSubHeaders(this._columns);
        }
    }

    /**
     * Table rows data
     * rows: {[key: string]: any}[]
     */
    @Input() set rows(value: any[] | TableRowsGrouped) {
        if (Array.isArray(value)) {
            this._rows = this.tableService.setRowsMetadata([...value]);
            this.initRows();
        }
    }
    @Input() loading: boolean;
    /** @internal */
    @Input() sortTableOnDataChanges = false;
    /** @internal */
    @Input() set expandedRows(value: {[key: string]: boolean}) {
        this.onExternalExpandRowChanged(value);
        this._expandedRows = value;
    }

    /** @internal */
    @Input() testId: string;

    /**
     * On Sort changed
     */
    @Output() sortChanged: EventEmitter<any> = new EventEmitter();
    /**
     * On rows selection changed
     */
    @Output() selectionChanged = this.tableService.selectionChanged;
    /**
     * On Row model (data) changed
     */
    @Output() rowModelChange = this.tableService.rowModelChange;
    /**
     * On Row clicked
     */
    @Output() rowClicked = new EventEmitter<{$event: MouseEvent; rowIndex: string; rowEl: Element; rowData: any}>();
    /**
     * On scroll down. Used for get new paged data portion
     */
    @Output() scrollDown: EventEmitter<any> = new EventEmitter();
    /**
     * On Row action clicked
     */
    @Output() rowActionClicked: EventEmitter<{action: MenuDropItem; rowIndex: string | number; row: TableRow}> =
        this.tableService.rowActionClicked;
    /**
     * on expand icon clicked. No need in case static data and one expand level
     * @internal
     */
    @Output() expandRow: EventEmitter<TableRowExpandEmitter> = new EventEmitter();
    /**
     * two-way binding for expandedRows map used in case no expandRow subscription in host for sync this value
     * @internal
     */
    @Output() expandedRowsChange = new EventEmitter<{[key: string]: boolean}>();

    /** @internal */
    @ViewChild('stringCell') stringCell;
    /** @internal */
    @ViewChild('checkboxCell') checkboxCell;
    /** @internal */
    @ViewChild('templateCell') templateCell;
    /** @internal */
    @ViewChild('table') tableElement: ElementRef;
    /** @internal */
    @ViewChild('tableWrapper', {static: true}) tableWrapperElement: ElementRef;
    /** @internal */
    @ViewChild('tableBody') tableBodyComponent: TableBasicComponent;

    @HostBinding('class.fixed-table') get isFixedHeader(): boolean {
        return !isNullOrUndefined(this.options) && !isNullOrUndefined(this.options.stickyHeader) && this.options.stickyHeader;
    }

    @HostBinding('class.fu-no-table-frame') get noTableFrame(): boolean {
        return !(!!this.options?.tableLabel || !!this.options?.searchOptions);
    }

    @HostBinding('class.fu-no-table-footer') get noTableFooter(): boolean {
        return !this.noTableFrame && this.options?.noTableFooter;
    }

    @HostBinding('class.is-empty') get isEmpty(): boolean {
        return this.tableService.isTableEmpty(this.rows, this.options.isGroupedTable, this.options.hasTotalsRow);
    }

    @HostBinding('class.is-loading') get isLoading(): boolean {
        return this.loading;
    }
    /** @internal */
    @HostBinding('class.on-scroll-right') isScrollRight: boolean;

    @HostBinding('class.on-vertical-scroll') get onVerticalScroll(): boolean {
        if (this.tableWrapperElement) {
            return this.tableWrapperElement.nativeElement.scrollTop > 0;
        }
    }

    /** @internal */
    isRowsInit = false;
    /** @internal */
    noDataMessage: string;
    /** @internal */
    noDataSubMessage: string;
    /** @internal */
    hideHeaderOnEmpty: boolean;
    /** @internal */
    isAllRowsSelectable: boolean;
    /** @internal */
    configIconNames: TableIconsConfigByStyle;
    /** @internal */
    wrapperClasses: string[];
    /** @internal */
    tableMainError = false;
    /** @internal */
    shownGoTopButton$ = new BehaviorSubject(false);
    /** @internal */
    subHeader: {name: string; colspan: number}[] = [];
    /** @internal */
    searchFormControl: FormControl<string>;

    /** @internal */
    tableTestIdModifiers: typeof TableTestIdModifiers = TableTestIdModifiers;
    /** @internal */
    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    get isCheckboxTitleShown(): boolean {
        return this.columns ? this.columns.some(column => column.type === TableColumnTypeEnum.Checkbox && column.title !== '') : false;
    }

    get isLoadingOverlay(): boolean {
        return (
            isNullOrUndefined(this.options) || // default - true
            isNullOrUndefined(this.options.isLoadingOverlayMode) || // default - true
            this.options.isLoadingOverlayMode // get from options
        );
    }

    get tableRows(): any[] {
        return this.rows as any[];
    }

    get groupedTableRows(): TableRowsGrouped {
        return this.rows as TableRowsGrouped;
    }

    get colsCount(): number {
        let columnsCount = Array.isArray(this.columns) ? this.columns.length : 1;
        if (!!this.options && this.options.rowsExpandableOptions) {
            columnsCount += !!this.options.rowsExpandableOptions.expandLevels ? this.options.rowsExpandableOptions.expandLevels : 1;
        }
        return columnsCount;
    }

    get expandedRows(): {[key: string]: boolean} {
        return this._expandedRows;
    }

    get scrollElement(): HTMLElement {
        const scrollElement = this.tableWrapperElement.nativeElement;
        if (this.options.scrollElementSelector) {
            return document.querySelector(this.options.scrollElementSelector) || scrollElement;
        }
        return scrollElement;
    }

    get rows(): any[] | TableRowsGrouped {
        return this._rows;
    }

    get columns(): TableColumn[] {
        return this._columns;
    }

    private lastScrollLeftValue: number;
    private _expandedRows: {[key: string]: boolean} = {};
    private currentExpandedMap: {[key: string]: boolean} = {};
    private ignoredParentSelectorsRowClickEvent: string[];
    private onDestroy$ = new Subject<void>();
    private _options: TableOptions = {};
    private _rows: any[] | TableRowsGrouped = [];
    private _columns: TableColumn[] = [];

    constructor(
        /** @internal */
        public tableService: TableService,
        private uniqueService: UniqueIdService,
        private cdr: ChangeDetectorRef,
        private injector: Injector
    ) {
        this.tableService.clearSelectedRows();
    }

    ngOnInit() {
        this.searchFormControl = new FormControl(this.options?.searchOptions?.initalValue || '');

        if (!!this.options.rowsExpandableOptions) {
            try {
                this.tableService.setExpandLevelByExpandOptions(this.options.rowsExpandableOptions);
            } catch (e) {
                this.tableMainError = true;
                throw new Error(e);
            }
        }
        const uniqueId = this.uniqueService.getUniqueId();
        this.id = this.id || `isTable${uniqueId}`;
        this.options.tableId = this.id;
        this.noDataMessage = isNullOrUndefined(this.options.noDataMessage) ? 'No Data to Display' : this.options.noDataMessage;
        this.noDataSubMessage = this.options.noDataSubMessage || '';
        this.hideHeaderOnEmpty = !isNullOrUndefined(this.options.hideHeaderOnEmpty) ? this.options.hideHeaderOnEmpty : false;
        this.isAllRowsSelectable = typeof this.options.isAllRowsSelectable === 'undefined' ? true : this.options.isAllRowsSelectable;
        this.scrollListeners();
        this.configIconNames = CONFIG_TABLE_BY_UI_STYLE[`style_v2`];
        this.wrapperClasses = this.getWrapperClasses();

        this.ignoredParentSelectorsRowClickEvent = ROW_CLICK_SUPPRESS_FOR_PARENT_SELECTORS.concat(
            this.options.rowsOptions?.ignoredParentSelectorsRowClickEvent ?? []
        );

        if (this.sortTableOnDataChanges && this.columns.find(col => !!col.sort)) {
            this.doLocalSorting();
        }

        this.searchFormControl.valueChanges.pipe(takeUntil(this.onDestroy$), debounceTime(500)).subscribe(value => {
            this.options?.searchOptions.onSearch.emit(value);
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
    /** @internal */
    onHeaderClicked(col: any): void {
        if (!this.tableService.isColumnSortable(col)) {
            return;
        }
        const sortKey: string = col.key;
        if (!(this.options && this.options.sortingType && this.options.sortingType === 'external')) {
            this.localSorting(sortKey);
        }
        this.sortChanged.emit(sortKey);
    }

    /** @internal */
    filterColumn(column, filterIn) {
        if (column.filter.changed && column.filter.options) {
            const isAllFiltered = column.filter.options.length === filterIn.length || filterIn.length === 0;
            column.filter.changed.emit(isAllFiltered ? [] : filterIn);
        }
    }
    /** @internal */
    replaceSelectedRows({selectedTableRows, iditicationFunc}: {selectedTableRows: any[]; iditicationFunc: (row: any) => number}): void {
        this.tableService.replaceSelectedRows({selectedTableRows, iditicationFunc});
    }
    /** @internal */
    doExpandRow({rowIndex, row, isExpanded, successCallback, failedCallback, updateMap}: TableRowExpandEmitter) {
        if (!!this.expandRow.observers.length) {
            // has expandRow event subscription in host
            if (Array.isArray(this.rows)) {
                this.expandRow.emit({rowIndex, row, isExpanded, successCallback, failedCallback, updateMap});
                this.currentExpandedMap = {...this.currentExpandedMap, [rowIndex]: isExpanded};
            }
        } else {
            successCallback();
            this.updateExpandedRowsMap(rowIndex, isExpanded);
        }
    }
    /** @internal */
    trackByFunc(index, column) {
        return column && column.key ? column.key : index;
    }
    /** @internal */
    getTableClientWidth(): number {
        if (this.tableWrapperElement) {
            return this.tableWrapperElement.nativeElement.clientWidth;
        }
    }
    /** @internal */
    onTableBodyClicked($event: MouseEvent) {
        if (!this.isElementChildOfSuppressed($event.target as Element)) {
            const rowEl = ($event.target as Element).closest('tr');
            if (!isNullOrUndefined(rowEl)) {
                const rowIndex = rowEl.dataset.rowIdx;
                const rowData = this.rows[rowIndex];
                this.rowClicked.emit({$event, rowIndex, rowEl, rowData});
            }
        }
    }
    /** @internal */
    onClickReturnTop() {
        const viewPortElement = this.scrollElement || document.documentElement;
        const currentScroll = viewPortElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            (function smoothScroll() {
                let currentScroll = viewPortElement.scrollTop || document.body.scrollTop;
                if (currentScroll > 0) {
                    window.requestAnimationFrame(smoothScroll);
                    viewPortElement.scrollTo(0, currentScroll - currentScroll / 8);
                }
            })();
        }
    }

    private initRows() {
        if (!this.options?.isGroupedTable && (this.rows as any[])?.length) {
            this.tableService.initSelectedRows(this.rows as any[]);
        }
        this.doLocalSorting();

        // check for rowspan columns
        this.tableService.setRowspanColumnsData(
            this.rows as [],
            this._columns.map(col => col.key)
        );
    }

    private getSubHeaders(columns: TableColumn[]): {name: string; colspan: number}[] {
        if (columns.some(item => !!item.groupName)) {
            return columns.reduce((groups, column, idx, columns) => {
                if (column.groupName) {
                    groups.push({name: column.groupName ?? '&nbsp;', colspan: 1});
                } else {
                    if (groups[groups.length - 1] && groups[groups.length - 1].name) {
                        groups[groups.length - 1].colspan++;
                    } else {
                        groups.push({name: ' ', colspan: 1});
                    }
                }
                return groups;
            }, []);
        } else {
            return [];
        }
    }

    private doLocalSorting() {
        if (Array.isArray(this.rows) && this.columns && this.sortTableOnDataChanges) {
            const sortedColumn = this.columns.find(col => !!col.sort);
            if (sortedColumn) {
                sortedColumn.sort = sortedColumn.sort === 'asc' ? 'desc' : 'asc';
                this.localSorting(sortedColumn.key);
            }
        }
    }

    private isElementChildOfSuppressed(element: Element): boolean {
        return this.ignoredParentSelectorsRowClickEvent.some((selector: string) => {
            return element.closest(selector);
        });
    }

    private updateExpandedRowsMap(rowIndex: string | number, isExpanded: boolean): void {
        this._expandedRows = {...this._expandedRows, [rowIndex]: isExpanded};
        this.expandedRowsChange.emit(this._expandedRows);
    }

    private onExternalExpandRowChanged(newValue: {[key: string]: boolean}) {
        const diffMap = this.getRowsToExpandToggle(this.currentExpandedMap, newValue);
        this.currentExpandedMap = newValue;

        if (diffMap.includes('default')) {
            const rowsInTable = (this.rows as any[]).length;
            [...Array(rowsInTable).keys()].forEach(rowIndex => {
                this.callOnExpandRow({
                    rowIndex: rowIndex,
                    row: this.rows[rowIndex],
                    isExpanded: newValue['default']
                });
            });
        } else {
            diffMap.forEach(rowIndex => {
                this.callOnExpandRow({
                    rowIndex: parseInt(rowIndex, 10),
                    row: this.rows[rowIndex],
                    isExpanded: newValue[rowIndex]
                });
            });
        }
    }

    private callOnExpandRow({rowIndex, row, isExpanded}) {
        this.tableBodyComponent.onExpandRow({rowIndex, row, isExpanded}, false);
    }

    private getRowsToExpandToggle(curValue: {[key: string]: boolean}, newValue: {[key: string]: boolean}): string[] {
        return Object.keys(newValue)
            .map(key => {
                if (newValue[key] !== curValue[key]) {
                    return key;
                }
                return null;
            })
            .filter(Boolean);
    }

    private getWrapperClasses(): string[] {
        const classes: string[] = [];
        if (!!this.options && !!this.options.rowHeight) {
            classes.push(`is-row-height-${this.options.rowHeight}`);
        }
        if (this.options?.stickyHeader && this.options?.scrollElementSelector) {
            classes.push(`fu-stocky-to-external`);
        }
        return classes;
    }

    private scrollListeners(): void {
        defer(() =>
            fromEvent(this.scrollElement, 'scroll').pipe(
                takeUntil(this.onDestroy$),
                tap(_ => {
                    const scrollLeft = this.scrollElement.scrollLeft;
                    if (this.lastScrollLeftValue !== scrollLeft) {
                        this.isScrollRight = scrollLeft > 0;
                        this.lastScrollLeftValue = scrollLeft;
                        this.cdr.markForCheck();
                    }
                }),
                debounceTime(10)
            )
        ).subscribe(this.onScroll.bind(this));
    }

    private localSorting(sortKey: string): void {
        let isAscSort: boolean;
        const tableRows = [...(this.rows as any[])];
        // reset header sort options
        this.columns.forEach(col => {
            if (col.key !== sortKey) {
                if (!isUndefined(col.sort)) {
                    col.sort = '';
                }
            } else {
                col.sort = col.sort === '' ? 'asc' : col.sort === 'asc' ? 'desc' : 'asc';
                isAscSort = col.sort === 'asc';
            }
        });

        let totalRow = [];
        let otherRows = [];
        if (!isNullOrUndefined(this.options.hasTotalsRow) && this.options.hasTotalsRow) {
            totalRow = tableRows.slice(0, 1);
            otherRows = tableRows.slice(1);
        } else {
            otherRows = tableRows;
        }
        otherRows.sort((a: any, b: any): number => {
            if (isNullOrUndefined(a[sortKey]) || isNullOrUndefined(b[sortKey])) {
                return 0;
            }

            // if data type - numeric
            if (!Array.isArray(a[sortKey]) && !isNaN(a[sortKey]) && !isNaN(b[sortKey]) && a[sortKey] - parseFloat(a[sortKey]) + 1 >= 0) {
                return isAscSort ? a[sortKey] - b[sortKey] : (a[sortKey] - b[sortKey]) * -1;
            }

            // if it string;
            const strA: string = a[sortKey].toString().toUpperCase();
            const strB: string = b[sortKey].toString().toUpperCase();

            if (strA < strB) {
                return isAscSort ? -1 : 1;
            }
            if (strA > strB) {
                return isAscSort ? 1 : -1;
            }
            return 0;
        });

        this._rows = [...totalRow, ...otherRows].filter(Boolean);
    }

    private onScroll($event) {
        if (this.options.hasReturnToTopButton) {
            this.shownGoTopButton$.next(this.scrollElement.scrollTop > this.tableElement.nativeElement.offsetTop);
        }

        const target = $event.target || $event;
        if (!this.options.pagination || this.options.pagination.loading || !this.options.pagination.enable) {
            return;
        }

        const top = this.scrollElement.scrollTop;
        if (top >= this.tableElement.nativeElement.offsetHeight - this.scrollElement.offsetHeight - 100) {
            if (!this.options.pagination.handleLoadingFromHost) {
                this.options.pagination.loading = true;
            }
            this.scrollDown.emit(target);
        }
    }
}

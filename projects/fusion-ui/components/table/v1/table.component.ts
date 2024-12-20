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
    OnDestroy
} from '@angular/core';
import {defer, fromEvent, Subject} from 'rxjs';
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
    TableIconsConfigByStyle
} from '@ironsource/fusion-ui/components/table/common/entities';
import {TableBasicComponent} from './components/table-basic/table-basic.component';
import {TooltipType} from '@ironsource/fusion-ui/components/tooltip/common/base';

@Component({
    selector: 'fusion-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TableService]
})
export class TableComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Input() options: TableOptions = {};
    @Input() columns: TableColumn[] = [];
    @Input() set rows(value: any[] | TableRowsGrouped) {
        this._rows = (value as any[]).map(row => ({...row})) ?? [];
        this.initRows();
    }
    @Input() loading: boolean;
    @Input() sortTableOnDataChanges = false;
    @Input() set expandedRows(value: {[key: string]: boolean}) {
        this.onExternalExpandRowChanged(value);
        this._expandedRows = value;
    }

    @Output() sortChanged: EventEmitter<any> = new EventEmitter();
    @Output() selectionChanged = this.tableService.selectionChanged;
    @Output() rowModelChange = this.tableService.rowModelChange;
    @Output() rowClicked = new EventEmitter<{$event: MouseEvent; rowIndex: string; rowEl: Element; rowData: any}>();
    @Output() scrollDown: EventEmitter<any> = new EventEmitter();
    // on expand icon clicked. No need in case static data and one expand level
    @Output() expandRow: EventEmitter<TableRowExpandEmitter> = new EventEmitter();
    // two-way binding for expandedRows map used in case no expandRow subscription in host for sync this value
    @Output() expandedRowsChange = new EventEmitter<{[key: string]: boolean}>();

    @ViewChild('stringCell') stringCell;
    @ViewChild('checkboxCell') checkboxCell;
    @ViewChild('templateCell') templateCell;
    @ViewChild('table') tableElement: ElementRef;
    @ViewChild('tableWrapper', {static: true}) tableWrapperElement: ElementRef;
    @ViewChild('tableBody') tableBodyComponent: TableBasicComponent;

    @HostBinding('class.fixed-table') get isFixedHeader(): boolean {
        return !isNullOrUndefined(this.options) && !isNullOrUndefined(this.options.stickyHeader) && this.options.stickyHeader;
    }

    @HostBinding('class.is-empty') get isEmpty(): boolean {
        return this.tableService.isTableEmpty(this.rows, this.options.isGroupedTable, this.options.hasTotalsRow);
    }

    @HostBinding('class.is-loading') get isLoading(): boolean {
        return this.loading;
    }

    @HostBinding('class.on-scroll-right') isScrollRight: boolean;

    @HostBinding('class.on-vertical-scroll') get onVerticalScroll(): boolean {
        if (this.tableWrapperElement) {
            return this.tableWrapperElement.nativeElement.scrollTop > 0;
        }
    }

    isRowsInit = false;
    noDataMessage: string;
    noDataSubMessage: string;
    hideHeaderOnEmpty: boolean;
    isAllRowsSelectable: boolean;

    configIconNames: TableIconsConfigByStyle;

    wrapperClasses: string[];

    tableMainError = false;
    tooltipTypeComponent = TooltipType.Component;

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

    get rows(): any[] | TableRowsGrouped {
        return this._rows;
    }

    private lastScrollLeftValue: number;
    private _expandedRows: {[key: string]: boolean} = {};
    private currentExpandedMap: {[key: string]: boolean} = {};
    private ignoredParentSelectorsRowClickEvent: string[];
    private onDestroy$ = new Subject<void>();
    private _rows: any[] | TableRowsGrouped = [];

    constructor(public tableService: TableService, private uniqueService: UniqueIdService, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
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
        this.noDataMessage = isNullOrUndefined(this.options.noDataMessage) ? 'No Data to Display' : this.options.noDataMessage;
        this.noDataSubMessage = this.options.noDataSubMessage || '';
        this.hideHeaderOnEmpty = !isNullOrUndefined(this.options.hideHeaderOnEmpty) ? this.options.hideHeaderOnEmpty : false;
        this.isAllRowsSelectable = typeof this.options.isAllRowsSelectable === 'undefined' ? true : this.options.isAllRowsSelectable;
        this.tableService.clearSelectedRows();
        this.scrollListeners();
        this.configIconNames = CONFIG_TABLE_BY_UI_STYLE[`style_v1`];
        this.wrapperClasses = this.getWrapperClasses();

        this.ignoredParentSelectorsRowClickEvent = ROW_CLICK_SUPPRESS_FOR_PARENT_SELECTORS.concat(
            this.options.rowsOptions?.ignoredParentSelectorsRowClickEvent ?? []
        );

        if (this.sortTableOnDataChanges && this.columns.find(col => !!col.sort)) {
            this.doLocalSorting();
        }
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

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

    filterColumn(column, filterIn) {
        if (column.filter.changed && column.filter.options) {
            const isAllFiltered = column.filter.options.length === filterIn.length || filterIn.length === 0;
            column.filter.changed.emit(isAllFiltered ? [] : filterIn);
        }
    }

    replaceSelectedRows({selectedTableRows, iditicationFunc}: {selectedTableRows: any[]; iditicationFunc: (row: any) => number}): void {
        this.tableService.replaceSelectedRows({selectedTableRows, iditicationFunc});
    }

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

    trackByFunc(index, column) {
        return column && column.key ? column.key : index;
    }

    getTableClientWidth(): number {
        if (this.tableWrapperElement) {
            return this.tableWrapperElement.nativeElement.clientWidth;
        }
    }

    onTableBodyClicked($event: MouseEvent) {
        if (!this.isElementChildOfSuppressed($event.target as Element)) {
            const rowEl = ($event.target as Element).closest('tr');
            const rowIndex = rowEl.dataset.rowIdx;
            const rowData = this.rows[rowIndex];
            this.rowClicked.emit({$event, rowIndex, rowEl, rowData});
        }
    }

    private initRows() {
        if (!this.options?.isGroupedTable && (this.rows as any[])?.length) {
            this.tableService.initSelectedRows(this.rows as any[]);
        }
        this.doLocalSorting();
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
        return classes;
    }

    private scrollListeners(): void {
        defer(() =>
            fromEvent(this.tableWrapperElement.nativeElement, 'scroll').pipe(
                takeUntil(this.onDestroy$),
                tap(_ => {
                    const scrollLeft = this.tableWrapperElement.nativeElement.scrollLeft;
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
        const target = $event.target || $event;
        if (!this.options.pagination || this.options.pagination.loading || !this.options.pagination.enable) {
            return;
        }

        const top = this.tableWrapperElement.nativeElement.scrollTop;
        if (top >= this.tableElement.nativeElement.offsetHeight - this.tableWrapperElement.nativeElement.offsetHeight - 100) {
            if (!this.options.pagination.handleLoadingFromHost) {
                this.options.pagination.loading = true;
            }
            this.scrollDown.emit(target);
        }
    }
}

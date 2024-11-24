import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {BehaviorSubject, defer, fromEvent, Subject} from 'rxjs';
import {debounceTime, takeUntil, tap} from 'rxjs/operators';
import {isNullOrUndefined, isUndefined} from '@ironsource/fusion-ui/utils';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {CheckboxComponent} from '@ironsource/fusion-ui/components/checkbox/v4';
import {MenuDropItem} from '@ironsource/fusion-ui/components/menu-drop';
import {TooltipComponent, TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TableService} from '@ironsource/fusion-ui/components/table/common/services';
import {
    CONFIG_TABLE_BY_UI_STYLE,
    ROW_CLICK_SUPPRESS_FOR_PARENT_SELECTORS,
    TableColumn,
    TableColumnTypeEnum,
    TableIconsConfigByStyle,
    TableOptions,
    TableRow,
    TableRowExpandEmitter,
    TableRowsGrouped
} from '@ironsource/fusion-ui/components/table/common/entities';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';
import {TableTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TableEmptyComponent} from './components/table-empty/table-empty.component';
import {TableBasicComponent} from './components/table-basic/table-basic.component';
import {TableLoadingComponent} from './components/table-loading/table-loading.component';
import {SearchComponent} from '@ironsource/fusion-ui/components/search/v4';

@Component({
    selector: 'fusion-table',
    host: {class: 'fusion-v4'},
    imports: [
        CommonModule,
        GenericPipe,
        ReactiveFormsModule,
        IconModule,
        CheckboxComponent,
        SearchComponent,
        TooltipDirective,
        TooltipComponent,
        TableEmptyComponent,
        TableLoadingComponent,
        TableBasicComponent
    ],
    providers: [TableService],
    templateUrl: './table-v4.component.html',
    styleUrl: './table-v4.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableV4Component implements OnInit, OnDestroy, AfterViewInit {
    // region public props
    /** @internal */
    tableService: TableService = inject(TableService);
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
    iconArrowUp = 'ph/arrow-up';
    /** @internal */
    iconArrowDown = 'ph/arrow-down';
    /** @internal */
    iconTooltip = 'ph/question';
    // endregion

    // region E2E test id
    /** @internal */
    testIdsService: TestIdsService = inject(TestIdsService);
    /** @internal */
    tableTestIdModifiers: typeof TableTestIdModifiers = TableTestIdModifiers;
    /** @internal */
    @Input() testId: string;
    // endregion

    // region inputs
    // region table element id
    private uniqueService: UniqueIdService = inject(UniqueIdService);
    @Input() id: string = `fuDataGrid_${this.uniqueService.getUniqueId()}`;
    // endregion

    // region options
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

    private _options: TableOptions = {};
    // endregion

    // region columns
    @Input() set columns(value: TableColumn[]) {
        if (Array.isArray(value)) {
            this._columns = value;
            this.subHeader = this.getSubHeaders(this._columns);
        }
    }

    get columns(): TableColumn[] {
        return this._columns;
    }

    private _columns: TableColumn[] = [];
    // endregion

    // region rows
    @Input() set rows(value: any[] | TableRowsGrouped) {
        if (Array.isArray(value)) {
            this._rows = this.tableService.setRowsMetadata([...value]);
            this.initRows();
        }
    }

    get rows(): any[] | TableRowsGrouped {
        return this._rows;
    }

    private _rows: any[] | TableRowsGrouped = [];
    // endregion

    // region expandedRows
    /** @internal */
    @Input() set expandedRows(value: {[key: string]: boolean}) {
        this.onExternalExpandRowChanged(value);
        this._expandedRows = value;
    }

    get expandedRows(): {[key: string]: boolean} {
        return this._expandedRows;
    }

    private _expandedRows: {[key: string]: boolean} = {};
    // endregion

    @Input() loading: boolean;
    @Input() sortTableOnDataChanges = false;
    @Input() hasCustomHeader = false;
    @Input() hasCustomFooter = false;
    // endregion

    // region outputs
    @Output() sortChanged: EventEmitter<any> = new EventEmitter();
    @Output() selectionChanged = this.tableService.selectionChanged;
    @Output() rowModelChange = this.tableService.rowModelChange;
    @Output() rowClicked = new EventEmitter<{$event: MouseEvent; rowIndex: string; rowEl: Element; rowData: any}>();
    @Output() scrollDown: EventEmitter<any> = new EventEmitter();
    @Output() rowActionClicked: EventEmitter<{action: MenuDropItem; rowIndex: string | number; row: TableRow}> =
        this.tableService.rowActionClicked;
    @Output() expandRow: EventEmitter<TableRowExpandEmitter> = new EventEmitter();
    @Output() expandedRowsChange = new EventEmitter<{[key: string]: boolean}>();
    // endregion

    // region ViewChild
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
    // endregion

    // region HostBindings
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

    @HostBinding('class.on-scroll-right') isScrollRight: boolean;

    @HostBinding('class.on-vertical-scroll') get onVerticalScroll(): boolean {
        if (this.tableWrapperElement) {
            return this.tableWrapperElement.nativeElement.scrollTop > 0;
        }
    }

    // endregion

    // region getters
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

    get scrollElement(): HTMLElement {
        const scrollElement = this.tableWrapperElement.nativeElement;
        if (this.options.scrollElementSelector) {
            return document.querySelector(this.options.scrollElementSelector) || scrollElement;
        }
        return scrollElement;
    }

    // endregion

    // region  private props
    private lastScrollLeftValue: number;
    private currentExpandedMap: {[key: string]: boolean} = {};
    private ignoredParentSelectorsRowClickEvent: string[];
    private onDestroy$ = new Subject<void>();

    // endregion

    ngOnInit(): void {
        this.tableService.clearSelectedRows();
        this.searchFormControl = new FormControl(this.options?.searchOptions?.initalValue || '');
        if (!!this.options.rowsExpandableOptions) {
            try {
                this.tableService.setExpandLevelByExpandOptions(this.options.rowsExpandableOptions);
            } catch (e) {
                this.tableMainError = true;
                throw new Error(e);
            }
        }
        this.options.tableId = this.id;
        this.noDataMessage = isNullOrUndefined(this.options.noDataMessage) ? 'No Data to Display' : this.options.noDataMessage;
        this.noDataSubMessage = this.options.noDataSubMessage ?? '';
        this.hideHeaderOnEmpty = !isNullOrUndefined(this.options.hideHeaderOnEmpty) ? this.options.hideHeaderOnEmpty : false;
        this.isAllRowsSelectable = typeof this.options.isAllRowsSelectable === 'undefined' ? true : this.options.isAllRowsSelectable;
        this.scrollListeners();
        this.configIconNames = CONFIG_TABLE_BY_UI_STYLE[`style_v2`];
        this.wrapperClasses = this.getWrapperClasses();
        this.initColumns();

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

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    ngAfterViewInit() {
        const columns = this.tableElement.nativeElement.querySelectorAll('thead tr td');
        columns.forEach((column: HTMLElement, index: number) => {
            if (!column.style.width && column?.dataset?.editable === 'true') {
                column.style.width = `${column.clientWidth}px`;
            }
        });
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
                const innerEntityType = this.options.rowsExpandableOptions?.innerEntityType ?? 'innerRows';
                this.expandRow.emit({rowIndex, row, isExpanded, successCallback, failedCallback, updateMap, innerEntityType});
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

    private initColumns() {
        if (this.options.rowActionsMenu?.stickyActionButton) {
            this._columns = [...this.columns, {key: 'row_actions_column', title: '', width: '52px'}];
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

    private getRowsToExpandToggle(
        curValue: {[key: string]: boolean},
        newValue: {
            [key: string]: boolean;
        }
    ): string[] {
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
        if (this.options.stickyHeader || this.options?.pagination?.enable) {
            classes.push(`fu-table-sticky-header`);
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
        this.tableService.tableScrolled.emit($event);

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

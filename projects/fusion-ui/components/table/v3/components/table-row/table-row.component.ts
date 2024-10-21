import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    HostBinding,
    Injector,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import {TableColumn, TableOptions, TableRowExpandEmitter, TableRowMetaData} from '@ironsource/fusion-ui/components/table/common/entities';
import {TableService} from '@ironsource/fusion-ui/components/table/common/services';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {Observable, of} from 'rxjs';
import {TableRow, ColumnData} from '@ironsource/fusion-ui/components/table/common/entities';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';
import {TableTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

@Component({
    // eslint-disable-next-line
    selector: '[fusionTableRow]',
    templateUrl: './table-row.component.html',
    styleUrls: ['./table-row.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableRowComponent implements OnInit, OnChanges {
    @Input() rowIndex: string | number;
    @Input() rowSpanIndex: number;
    @Input() row: TableRow;
    @Input() options: TableOptions;
    @Input() columns: TableColumn[];
    @Input() isRemovableOnHover: boolean;
    @Input() isRowSelected: boolean;
    @Input() isExpanded: boolean;
    @Input() isInnerRow: boolean;
    @Input() hasAfterSticky: boolean;

    /** @internal */
    @Input() testId: string;

    @Output() rowRemoved = new EventEmitter();
    @Output() selectedChange = new EventEmitter();
    @Output() expandRow = new EventEmitter<TableRowExpandEmitter>();

    @HostBinding('attr.data-row-idx') dataRowIndex: string | number;

    @HostBinding('class.is-row-expanded') get isRowExpanded(): boolean {
        return this.isExpanded;
    }

    @HostBinding('class.is-inner-row-expandable') get isInnerRowExpandable(): boolean {
        return (
            this.options &&
            this.options.rowsExpandableOptions &&
            this.tableService.expandLevels &&
            this.tableService.getExpandLevelByRowIndex(this.rowIndex) <= this.tableService.expandLevels
        );
    }

    @HostBinding('class.is-with-totals') get isRowTotal(): boolean {
        return !isNullOrUndefined(this.options.hasTotalsRow) && this.options.hasTotalsRow && this.rowIndex === 0;
    }

    @HostBinding('class.is-row-readonly') get isRowReadOnly(): boolean {
        return this.tableService.isRowReadOnly(this.row);
    }

    expandArrowIconName: IconData;
    columnsData: ColumnData[] = [];

    cellShown = this.showCell.bind(this);
    attrRowspan = this.getAttrRowspan.bind(this);

    /** @internal */
    tableTestIdModifiers: typeof TableTestIdModifiers = TableTestIdModifiers;
    /** @internal */
    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    get expandCellCount(): Observable<number[]> {
        if (!!this.options && !!this.options.rowsExpandableOptions && !!this.tableService.expandLevels) {
            const expandLevelsByIndex = this.tableService.getExpandLevelByRowIndex(this.rowIndex);
            const expandLevels =
                expandLevelsByIndex <= this.tableService.expandLevels ? expandLevelsByIndex : this.tableService.expandLevels;

            return of([...Array(expandLevels).keys()]);
        }
        return of([]);
    }

    hasTooltip(key: string, row: TableRow): boolean {
        return !isNullOrUndefined(this.getCellTooltip(key, row));
    }

    getCellTooltip(key: string, row): string {
        // eslint-disable-next-line
        const rowMetaData: TableRowMetaData = row['rowMetaData'];
        return !!rowMetaData && !!rowMetaData.cellToolTip ? rowMetaData.cellToolTip[key] : null;
    }

    infoIconOnHooverToolTip(options: TableOptions, row: TableRow): string {
        return options?.infoIconForRowOnHover ? options?.infoIconForRowOnHover(row) : '';
    }

    rowRemoveIconOptions(options: TableOptions, row: TableRow): {hideRemoveIcon: boolean} {
        return {
            hideRemoveIcon: options?.remove && options?.isRemoveIconHiddenForRow && options?.isRemoveIconHiddenForRow(row)
        };
    }

    constructor(public tableService: TableService, private cdRef: ChangeDetectorRef, private injector: Injector) {}

    ngOnInit(): void {
        this.dataRowIndex = this.rowIndex;
        this.expandArrowIconName = {iconName: 'arrow-right', iconVersion: 'v3'};
        if (this.isRowTotal) {
            Object.assign(this.row, {isRowTotal: true});
        }
    }

    ngOnChanges({options, columns, row}: SimpleChanges) {
        const activeOptions = options?.currentValue || this.options;
        const activeColumns = columns?.currentValue || this.columns;
        const activeRow = row?.currentValue || this.row;
        if (options?.currentValue || columns?.currentValue || row?.currentValue) {
            this.columnsData = this.getColumnsData(activeColumns, activeOptions, activeRow);
        }
    }

    onDataChange(options: any, rowKey): void {
        this.tableService.toggleRowInRequest(this.row, true);
        this.tableService.rowModelChange.emit({
            rowIndex: this.rowIndex,
            rowSpanIndex: this.rowSpanIndex ?? 0,
            rowModel: this.row,
            keyChanged: rowKey,
            newValue: options.newValue,
            prevValue: options.prevValue,
            onRequestDone: (state: boolean, error: {message: string; status: number}, stayInEditOnCancel = false) => {
                this.tableService.toggleRowInRequest(this.row, false);
                if (options.onCellRequestDone) {
                    options.onCellRequestDone(state, error, stayInEditOnCancel);
                }
                this.cdRef.markForCheck();
            }
        });
    }

    trackByFn(index, item) {
        if (!item) {
            return null;
        }
        return item.key ? item.key : index;
    }

    showExpandIcon(): boolean {
        const hasKeyToIgnore = this.options && this.options.rowsExpandableOptions && this.options.rowsExpandableOptions.keyToIgnore;
        if (!hasKeyToIgnore) {
            return this.isInnerRow ? this.isInnerRowExpandable : !this.isRowTotal;
        }
        return !this.isRowTotal && !this.row[this.options.rowsExpandableOptions.keyToIgnore] && this.isInnerRowExpandable;
    }

    getCellColspan(isFirstDataCell: boolean, cellColspan?: number, expandLevel?: number): number | undefined {
        if (isFirstDataCell && expandLevel) {
            if (this.isInnerRow) {
                const colspan = !isNullOrUndefined(cellColspan) ? cellColspan : 0;
                return colspan + (expandLevel + 1 - this.tableService.getExpandLevelByRowIndex(this.rowIndex));
            }
            return expandLevel + 1 - this.tableService.getExpandLevelByRowIndex(this.rowIndex);
        }
        return cellColspan;
    }

    getAttrRowspan(columnKey: string): number {
        let rowSpan = 0;
        const maxRowspan = this.tableService.getMaxRowspanInColumn(this.row);
        if (columnKey === 'cell-expand') {
            rowSpan = maxRowspan;
        } else {
            const multiRowsKeys = this.tableService.getRowspanColumnsData(this.row);
            if (!isNullOrUndefined(multiRowsKeys) && isNullOrUndefined(this.rowSpanIndex)) {
                rowSpan = maxRowspan - multiRowsKeys[columnKey];
            }
        }
        return rowSpan > 0 ? rowSpan : null;
    }

    /**
     * Show regular cell "isNullOrUndefined(this.rowSpanIndex)"
     * or if cell has rowspan index "!isNullOrUndefined(this.rowSpanIndex)" and key for multirow
     * @internal
     */
    showCell(columnKey: string): boolean {
        if (columnKey.startsWith('cell-expand')) {
            return isNullOrUndefined(this.rowSpanIndex);
        }
        const multiRowsKeys = this.tableService.getRowspanColumnsData(this.row);
        return isNullOrUndefined(this.rowSpanIndex) || (!isNullOrUndefined(this.rowSpanIndex) && multiRowsKeys[columnKey] !== 0);
    }

    private getColumnsData(columns: TableColumn[], options: TableOptions, row: TableRow): ColumnData[] {
        return columns.map((column, index) => {
            const isLast = index === columns.length - 1;
            const isFirst = index === 0;
            return {
                classes: this.tableService.getColumnClasses(column),
                tooltip: this.getCellTooltip(column.key, row),
                hasTooltip: this.hasTooltip(column.key, row),
                isRemove: this.tableService.isRemove(isLast, options, this.rowRemoveIconOptions(options, row)),
                infoIconOnHoverTooltip: isLast ? this.infoIconOnHooverToolTip(options, row) : '',
                styles: this.tableService.getColumnStyle(column),
                colspan: this.getCellColspan(isFirst, column.colspan, this.tableService.expandLevels),
                width: this.tableService.setWidth(isLast, column.width)
            };
        });
    }
}

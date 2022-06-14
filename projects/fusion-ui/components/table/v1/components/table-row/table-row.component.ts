import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    HostBinding,
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
import {ColumnData} from './column-data';
import {TableRow} from '@ironsource/fusion-ui/components/table/common/entities';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';

@Component({
    // eslint-disable-next-line
    selector: '[fusionTableRow]',
    templateUrl: './table-row.component.html',
    styleUrls: ['./table-row.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableRowComponent implements OnInit, OnChanges {
    @Input() rowIndex: string | number;
    @Input() row: TableRow;
    @Input() options: TableOptions;
    @Input() columns: TableColumn[];
    @Input() isRemovableOnHover: boolean;
    @Input() isRowSelected: boolean;
    @Input() isExpanded: boolean;
    @Input() isInnerRow: boolean;
    @Input() hasAfterSticky: boolean;
    @Output() rowRemoved = new EventEmitter();
    @Output() selectedChange = new EventEmitter();
    @Output() expandRow = new EventEmitter<TableRowExpandEmitter>();

    @HostBinding('attr.data-row-idx') dataRowIndex: string | number;

    @HostBinding('class.is-row-in-request') get isRowInRequest(): boolean {
        return this.inRequest;
    }

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

    private inRequest = false;
    expandArrowIconName: IconData;
    columnsData: ColumnData[] = [];

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

    constructor(public tableService: TableService, private cdRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.dataRowIndex = this.rowIndex;
        this.expandArrowIconName = {iconName: 'arrow-right', iconVersion: 'v1'};
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
        this.inRequest = true;
        this.tableService.rowModelChange.emit({
            rowIndex: this.rowIndex,
            rowModel: this.row,
            keyChanged: rowKey,
            newValue: options.newValue,
            prevValue: options.prevValue,
            onRequestDone: (state: boolean, error: {message: string; status: number}, stayInEditOnCancel = false) => {
                this.inRequest = false;
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

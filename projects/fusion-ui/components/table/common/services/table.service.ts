import {EventEmitter, Injectable} from '@angular/core';
import {isNullOrUndefined, isNumber, isUndefined} from '@ironsource/fusion-ui/utils';
import {DomSanitizer} from '@angular/platform-browser';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {
    TableColumn,
    TableColumnTypeEnum,
    TableOptions,
    TableRow,
    TableRowChangedData,
    TableRowsExpandableOptions
} from '@ironsource/fusion-ui/components/table/common/entities';
import {DEFAULT_EXPANDABLE_LEVEL, MAXIMUM_EXPANDABLE_LEVEL} from '@ironsource/fusion-ui/components/table/common/entities';
import {MenuDropItem} from '@ironsource/fusion-ui/components/menu-drop';

@Injectable()
export class TableService {
    private selectedRows: any[] = [];
    public selectionChanged = new EventEmitter();
    public rowModelChange: EventEmitter<TableRowChangedData> = new EventEmitter();
    public rowActionClicked = new EventEmitter<{action: MenuDropItem; rowIndex: string | number; row: TableRow}>();
    public expandLevels: number;
    public hasRowspanRows = false;

    constructor(private sanitizer: DomSanitizer, private logService: LogService) {}

    onRowsSelectChanged(isGroupedTable, rows, isChecked: boolean): void {
        if (isGroupedTable) {
            this.selectionChanged.emit({isAllSelected: isChecked});
        } else {
            this.selectedRows = [];
            rows.forEach(row => {
                if (!row.isRowTotal) {
                    row.checkbox = isChecked;
                    if (isChecked) {
                        this.selectedRows.push(row);
                    }
                }
            });
            this.selectionChanged.emit(this.selectedRows);
        }
    }

    onRowSelectChanged(isChecked: boolean, row: any): void {
        this.setRowSelectionState(isChecked, row);
        this.selectionChanged.emit(this.selectedRows);
    }

    removeRow({rows, rowIndex, row, options = {}}: {rows?: any; rowIndex?: number; row?: any; options?: TableOptions}): void {
        if (options.remove && options.remove.active) {
            if (rowIndex !== -1) {
                let rowToRemove = row;
                if (options.isGroupedTable) {
                    // in grouped table we emit the data until the main parent
                    let rowLevel = row.data.length;
                    for (let i = rowIndex - 1; i >= 0; i--) {
                        if (rows[i].data.length > rowLevel) {
                            rowLevel = rows[i].data.length;
                            rowToRemove = {parent: rows[i], child: rowToRemove};
                        }
                    }
                }

                // if onRemove event emitter is set we emit event to subscribers
                if (options.remove.onRemove) {
                    options.remove.onRemove.emit({rowIndex, rowToRemove});
                } else if (!options.isGroupedTable) {
                    rows.splice(rowIndex, 1);
                }
            } else {
                this.logService.error(new Error('Row Not found'));
            }
        }
    }

    initSelectedRows(rows: any[]) {
        this.selectedRows = [];
        rows.forEach(row => {
            this.setRowSelectionState(row.checkbox, row);
        });
    }

    clearSelectedRows(): void {
        this.selectedRows.forEach(row => {
            row.checkbox = false;
        });
        this.selectedRows = [];
    }

    replaceSelectedRows({selectedTableRows, iditicationFunc}: {selectedTableRows: any[]; iditicationFunc: (row: any) => number}): void {
        if (Array.isArray(selectedTableRows)) {
            selectedTableRows.forEach(row => {
                const id = iditicationFunc(row);
                const selectedRowIndex = this.selectedRows.findIndex(selectedRow => iditicationFunc(selectedRow) === id);
                if (selectedRowIndex !== -1) {
                    this.selectedRows.splice(selectedRowIndex, 1);
                    this.selectedRows.push(row);
                }
            });
        }
    }

    isAllRowsSelected(rows): boolean {
        return rows.length === this.selectedRows.length;
    }

    isPartialSelected(rows): boolean {
        return this.selectedRows.length && rows.length !== this.selectedRows.length;
    }

    getColumnStyle(col: any): any {
        const style = col.style || {};
        if (col.stickyLeftMargin) {
            style.left = col.stickyLeftMargin;
        }
        return style;
    }

    getColumnClasses(col: any, isHeader = false): string[] {
        const classes = [];
        classes.push(!!col.groupName ? 'fu-border-left' : '');
        if (isHeader) {
            classes.push(this.isColumnSortable(col) ? `is-sort ${col.sort}` : '');
            classes.push(this.getHeaderStickyClass(col));
            classes.push(this.isTypeCheckbox(col) ? 'is-checkbox-holder' : '');
        } else {
            classes.push(`${col.class || ''} ${this.isColumnSortable(col) ? 'is-sorted' : ''}`);
        }
        return classes.filter(Boolean);
    }

    isRowSelected(row: any): boolean {
        return this.isInSelected(row) !== -1;
    }

    isColumnSortable(col: any): boolean {
        return !isUndefined(col.sort);
    }

    isTableEmpty(rows, isGroupedTable, hasTotalRow = false): boolean {
        return !isGroupedTable ? rows.length - (!!hasTotalRow ? 1 : 0) < 1 : !rows.value && (!rows.children || !rows.children.length);
    }

    isTypeComponent(column): boolean {
        return TableColumnTypeEnum.Component === column.type;
    }

    isTypeString(column): boolean {
        return !column.type || TableColumnTypeEnum.String === column.type;
    }

    isTypeCurrency(column): boolean {
        return column.type && TableColumnTypeEnum.Currency === column.type;
    }

    isTypeNumber(column): boolean {
        return column.type && TableColumnTypeEnum.Number === column.type;
    }

    isTypePercent(column): boolean {
        return column.type && TableColumnTypeEnum.Percent === column.type;
    }

    isTypeDate(column): boolean {
        return TableColumnTypeEnum.Date === column.type;
    }

    isTypeCheckbox(column): boolean {
        return TableColumnTypeEnum.Checkbox === column.type;
    }

    isTypeToggleButton(column): boolean {
        return TableColumnTypeEnum.ToggleButton === column.type;
    }

    isTypeInputEdit(column): boolean {
        return TableColumnTypeEnum.InputEdit === column.type;
    }

    isInTotalTypeString(column): boolean {
        let defaultAsString = false;
        if (isNullOrUndefined(column.totalRowTypeAsString)) {
            switch (column.type) {
                case TableColumnTypeEnum.Component:
                case TableColumnTypeEnum.Checkbox:
                case TableColumnTypeEnum.ToggleButton:
                case TableColumnTypeEnum.InputEdit:
                    defaultAsString = true;
            }
        }
        return defaultAsString || column.totalRowTypeAsString;
    }

    isRemove(isLast: boolean, tableOptions: TableOptions, rowOptions: any = {}) {
        return tableOptions?.remove?.active && isLast && !rowOptions.hideRemoveIcon;
    }

    setWidth(isLast: boolean, width: string) {
        return !isLast && width ? width : '';
    }

    getWidth(columns, column) {
        if (column.width) {
            return column.width;
        } else {
            let columnToCalc = columns.length;
            const widthToReduce = columns.reduce((sum, currentColumn) => {
                if (currentColumn.width) {
                    columnToCalc--;
                    return (sum ? `${sum} -` : '') + currentColumn.width;
                } else {
                    return sum;
                }
            }, '');

            return this.sanitizer.bypassSecurityTrustStyle(`calc((100% - ${widthToReduce}) / ${columnToCalc})`);
        }
    }

    getHeaderStickyClass(col: TableColumn): string {
        let headerClass = '';
        if (col.sticky) {
            headerClass += ' sticky-left';
        }
        if (col.class && col.class.indexOf('display-shadow-on-scroll') !== -1) {
            headerClass += ' display-shadow-on-scroll';
        }
        return headerClass;
    }

    setExpandLevelByExpandOptions(expandOptions: TableRowsExpandableOptions): void {
        if (!!expandOptions.expandLevels) {
            // check that it <= 2 or throw exception
            if (expandOptions.expandLevels > MAXIMUM_EXPANDABLE_LEVEL) {
                throw new Error(`Maximum table rows expandable level is: ${MAXIMUM_EXPANDABLE_LEVEL}`);
            } else {
                this.expandLevels = expandOptions.expandLevels;
            }
        } else {
            this.expandLevels = DEFAULT_EXPANDABLE_LEVEL;
        }
    }

    getExpandLevelByRowIndex(rowIndex: number | string): number {
        if (isNumber(rowIndex)) {
            return 1;
        }
        return (rowIndex as string).split('_').length;
    }

    isRowReadOnly(row: any): boolean {
        return !!row.rowMetaData?.readonly;
    }

    isRowInRequest(row: any): boolean {
        return row.rowMetaData?.inRequest;
    }

    toggleRowInRequest(row: any, isInRequest) {
        this.insureRowMetaData(row);
        row.rowMetaData.inRequest = isInRequest;
    }

    setRowspanColumnsData(rows: any[], columnsKeys: string[]) {
        rows.forEach(row => {
            this.insureRowMetaData(row);
            if (Object.values(row).some(val => Array.isArray(val))) {
                // set rowspan row metadata
                this.hasRowspanRows = true;
                row.rowMetaData.rowspanColumnsData = this.getRowspanColumns(row, columnsKeys);
                row.rowMetaData.maxRowspanInColumn = Math.max(...(Object.values(row.rowMetaData.rowspanColumnsData) as number[]));
            }
        });
    }

    getRowspanColumnsData(row: any): {[key: string]: number} {
        return row.rowMetaData?.rowspanColumnsData;
    }

    getMaxRowspanInColumn(row: any): number {
        return row.rowMetaData.maxRowspanInColumn ?? 0;
    }

    private insureRowMetaData(row: any) {
        if (isNullOrUndefined(row.rowMetaData)) {
            row.rowMetaData = {};
        }
    }

    private getRowspanColumns(row: any, columnsKeys: string[]): {[key: string]: number} {
        const multiRows = {};
        let maxRowspan = 2;
        columnsKeys.forEach(cell => {
            if (Array.isArray(row[cell])) {
                multiRows[cell] = (row[cell] as []).length;
                if (multiRows[cell] > maxRowspan) {
                    maxRowspan = multiRows[cell];
                }
            } else {
                multiRows[cell] = 0;
            }
        });
        return multiRows;
    }

    private setRowSelectionState(isChecked: boolean, row: any) {
        const idx = this.isInSelected(row);
        if (isChecked && idx === -1) {
            row.checkbox = true;
            this.selectedRows.push(row);
        }
        if (!isChecked && idx !== -1) {
            row.checkbox = false;
            this.selectedRows.splice(idx, 1);
        }
    }

    private isInSelected(row: any) {
        if (row.hasOwnProperty('checkbox')) {
            return this.selectedRows.findIndex(item => {
                return Object.keys(row).every(key => {
                    if (key !== 'checkbox') {
                        return row[key] == item[key];
                    }
                    return true;
                });
            });
        }
        return this.selectedRows.indexOf(row);
    }
}

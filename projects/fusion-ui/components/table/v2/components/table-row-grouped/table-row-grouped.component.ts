import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {TableService} from '@ironsource/fusion-ui/components/table/common/services';

@Component({
    // eslint-disable-next-line
    selector: '[fusionTableRowGrouped]',
    templateUrl: './table-row-grouped.component.html',
    styleUrls: ['./table-row-grouped.component.scss']
})
export class TableRowGroupedComponent {
    @Input() row: any;
    @Input() columns: any;

    @Input() rowIndex: number;
    @Input() options: any;
    @Output() rowRemoved = new EventEmitter();
    @Output() selectedChanged = new EventEmitter();
    @HostBinding('class.is-selected') isRowSelected = false;
    constructor(public tableService: TableService) {}

    getCellRowspan(cell) {
        return typeof cell === 'object' && cell ? cell.rowspan : undefined;
    }

    getCellValue(cell, column) {
        if (!cell) {
            return cell;
        } else if (typeof cell !== 'object') {
            return cell;
        } else if (this.tableService.isTypeComponent(column)) {
            return cell.value ? cell.value : cell;
        } else {
            return cell.value;
        }
    }

    getColumnIndex(row, cellIndex) {
        return this.columns.length - row.length + cellIndex;
    }

    onRowSelectedChange(value: boolean) {
        this.selectedChanged.emit(value);
        this.isRowSelected = value;
    }
}

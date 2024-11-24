import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {TableColumn, TableOptions, TableRowsGrouped} from '@ironsource/fusion-ui/components/table/common/entities';
import {TableService} from '@ironsource/fusion-ui/components/table/common/services';
import {isUndefined} from '@ironsource/fusion-ui/utils';

@Component({
    // eslint-disable-next-line
    selector: '[fusionTableGrouped]',
    templateUrl: './table-grouped.component.html',
    styleUrls: ['./table-grouped.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TableGroupedComponent implements OnChanges {
    @Input() rows: TableRowsGrouped;
    @Input() columns: TableColumn[];
    @Input() options: TableOptions = null;
    // eslint-disable-next-line
    @Output() rowSelected = new EventEmitter();
    tableBody: any[] = [];

    constructor(public tableService: TableService) {}

    ngOnChanges(changes) {
        this.tableBody = [];
        if (changes.rows.currentValue) {
            const initArray = !isUndefined(this.rows.value)
                ? [
                      {
                          value: this.rows.value,
                          rowspan: this.rows.children.length
                      }
                  ]
                : [];
            this._buildTable(this.rows.children, initArray);
        }
    }

    _buildTable(rows, parentValues, options?: any) {
        let values;
        for (let index = 0; index < rows.length; index++) {
            const row = rows[index];
            if (!row.children) {
                const rowData = row.data || row;
                values = index === 0 ? [...parentValues, ...rowData] : rowData;
                const rowOptions = (index === 0 ? options : row.options) || {};
                this.tableBody.push({data: values, options: rowOptions});
            } else {
                if (index === 0) {
                    const newParentValues = parentValues.map(obj => {
                        return {
                            value: obj.value,
                            rowspan: obj.rowspan * row.children.length
                        };
                    });
                    values = [...newParentValues, {value: row.value, rowspan: row.children.length}];
                } else {
                    values = [{value: row.value, rowspan: row.children.length}];
                }
                this._buildTable(row.children, values, row.options);
            }
        }
    }

    getClass(row) {
        return row.options && row.options.class;
    }

    onRowSelectChanged(isSelected, row) {
        this.rowSelected.emit({isSelected, row});
    }
}

import {Injectable} from '@angular/core';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {TableOptions, TableRowChangedData, TableRowClassesEnum} from '@ironsource/fusion-ui/components/table/common/entities';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TableUtils {
    public onTableRowDataChanged(options, tableOptions: TableOptions, tableRows$: BehaviorSubject<any[]>): TableRowChangedData {
        const rowIndex = options.cellPosition.x;
        const tableRowOptions = !isNullOrUndefined(tableOptions.rowsOptions) ? tableOptions.rowsOptions : (tableOptions.rowsOptions = {});

        tableRowOptions[rowIndex] = {class: TableRowClassesEnum.Loading};
        return {
            rowIndex,
            rowModel: tableRows$.getValue()[rowIndex],
            keyChanged: options.keyChanged,
            newValue: options.newValue,
            prevValue: options.prevValue,
            onRequestDone: (state: boolean, error: {message: string; status: number}, stayInEditOnCancel = false) => {
                const rowOptionsByIndex = tableRowOptions[rowIndex];
                if (!!rowOptionsByIndex) {
                    delete rowOptionsByIndex.class;
                    if (!Object.keys(rowOptionsByIndex).length) {
                        delete tableRowOptions[rowIndex];
                    }
                }
                // callback to cell
                if (options.onCellRequestDone) {
                    options.onCellRequestDone(state, error, stayInEditOnCancel);
                }
            }
        };
    }
}

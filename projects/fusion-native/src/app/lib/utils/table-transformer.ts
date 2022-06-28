import {Transformer} from '../components/wrapper/wrapper-entities';
import {TableColumnTypeEnum} from '@ironsource/fusion-ui/components/table/common/entities';
import {FormControl} from '@angular/forms';

export class TableTransformer implements Transformer {
    transform(config: any): any {
        if (config && Array.isArray(config.columns) && Array.isArray(config.rows)) {
            const inputEditColumn = config.columns.find(col => col.type === TableColumnTypeEnum.InputEdit);
            if (inputEditColumn) {
                const key = inputEditColumn.key;
                const rows = config.rows.map(row => ({...row, [key]: new FormControl(row[key])}));
                return {...config, rows};
            }
        }
        return config;
    }
}

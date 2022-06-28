import {EventEmitter} from '@angular/core';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

export interface TableRowRemoveAction {
    active?: boolean;
    icon?: IconData;
    tooltip?: {text: string; width?: string};
    onRemove?: EventEmitter<{rowIndex: number; rowToRemove: any}>;
}

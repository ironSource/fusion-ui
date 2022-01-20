import {EventEmitter} from '@angular/core';

export interface TableRowRemoveAction {
    active?: boolean;
    icon?: string;
    tooltip?: {text: string; width?: string};
    onRemove?: EventEmitter<{rowIndex: number; rowToRemove: any}>;
}

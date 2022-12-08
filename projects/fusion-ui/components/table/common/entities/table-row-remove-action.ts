import {EventEmitter} from '@angular/core';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';
import {MenuDropItem} from '@ironsource/fusion-ui/components/menu-drop/v3/menu-drop.entities';

export interface TableRowRemoveAction {
    active?: boolean;
    icon?: IconData;
    tooltip?: {text: string; width?: string};
    onRemove?: EventEmitter<{rowIndex: number; rowToRemove: any}>;
}

export interface TableMultipleActions {
    active?: boolean;
    icon?: IconData;
    actions: MenuDropItem[];
}

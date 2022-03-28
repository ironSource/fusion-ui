import {Component, Type} from '@angular/core';

export interface TableRowsGrouped {
    value: number | string | Type<Component>;
    options?: {class?: string; hideRemoveIcon?: boolean};
    children: TableRowsGrouped[] | any[];
}

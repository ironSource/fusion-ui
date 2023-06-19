import {Type} from '@angular/core';

export interface HeaderState {
    title?: string;
    subtitle?: string;
    actionComponent?: Type<any>;
    actionData?: any;
    element?: Node;
}

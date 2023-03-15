import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {PrimaryMenuItem} from '@ironsource/fusion-ui/components/navigation-menu/v4';
import {Type} from '@angular/core';

export interface LayoutConfiguration {
    navigationMenuItems?: PrimaryMenuItem[];
    layoutUser?: LayoutUser;
}

export interface HeaderState {
    title?: string;
    actionComponent?: Type<any>;
    actionData?: any;
    element?: Node;
}

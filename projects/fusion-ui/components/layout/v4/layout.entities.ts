import {Type} from '@angular/core';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {PrimaryMenuItem} from '@ironsource/fusion-ui/components/navigation-menu/v4';

export interface LayoutConfiguration {
    navigationMenuItems?: PrimaryMenuItem[];
    layoutUser?: LayoutUser;
}

export interface TeleportWrapperElement {
    id: string; // must be unique value
    isOnRight?: boolean; // will align to right
}

export interface HeaderContent {
    hasBackButton?: boolean | Function;
    title?: string;
    subTitle?: string;
    actionComponent?: Type<any>;
    actionData?: any;
    actionAlignRight?: boolean;

    multiline?: boolean;
    drilldown?: boolean;
    topRowContent?: {
        teleportElements?: TeleportWrapperElement[];
    };
    bottomRowContent?: {
        teleportElements?: TeleportWrapperElement[];
    };
}

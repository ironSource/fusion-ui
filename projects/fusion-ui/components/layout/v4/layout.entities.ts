import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {PrimaryMenuItem} from '@ironsource/fusion-ui/components/navigation-menu/v4';
import {Type} from '@angular/core';

export interface LayoutConfiguration {
    navigationMenuItems?: PrimaryMenuItem[];
    layoutUser?: LayoutUser;
}

export interface TeleportWrapperElement {
    id: string; // must be unique value
    isOnRight?: boolean; // will align to right
}

export interface HeaderContent {
    hasBackButton?: boolean;
    title?: string;
    subTitle?: string;
    actionComponent?: Type<any>;
    actionData?: any;
    teleportElements?: TeleportWrapperElement[];
}

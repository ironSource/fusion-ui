import {Type} from '@angular/core';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {PrimaryMenuItem} from '@ironsource/fusion-ui/components/navigation-menu/v4';

export interface LayoutConfiguration {
    navigationMenuItems?: PrimaryMenuItem[];
    layoutUser?: LayoutUser;
}

export interface TeleportWrapperElement {
    id: string;
    isOnRight?: boolean;
}

export interface HeaderAdditionalRowContent {
    show: boolean;
    teleportElements?: TeleportWrapperElement[];
}

export interface HeaderContent {
    hasBackButton?: boolean | Function;
    title?: string;
    subTitle?: string;
    actionComponent?: Type<any>;
    actionData?: any;
    actionAlignRight?: boolean;

    multiline?: boolean;
    topRowContent?: HeaderAdditionalRowContent;
    bottomRowContent?: HeaderAdditionalRowContent;
}

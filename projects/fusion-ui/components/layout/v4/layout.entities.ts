import {Type} from '@angular/core';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {PrimaryMenuItem, PrimaryMenuMode} from '@ironsource/fusion-ui/components/navigation-menu/v4';
import {SkeletonShapeType} from '@ironsource/fusion-ui/components/skeleton';

export interface LayoutConfiguration {
    navigationMenuItems?: PrimaryMenuItem[];
    primaryMenuItemMode?: PrimaryMenuMode;
    layoutUser?: LayoutUser;
}

export interface TeleportWrapperElement {
    id: string;
    isOnRight?: boolean;
    skeletons?: TeleportSkeleton[];
    skeletonsGap?: string;
}

export interface HeaderAdditionalRowContent {
    show: boolean;
    teleportElements?: TeleportWrapperElement[];
    skeletons?: TeleportSkeleton[];
    skeletonsGap?: string;
}

export interface TeleportSkeleton {
    width: string;
    height: string;
    borderRadius?: string;
    shape?: SkeletonShapeType;
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

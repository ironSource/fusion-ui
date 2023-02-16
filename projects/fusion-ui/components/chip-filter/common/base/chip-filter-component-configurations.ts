import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

export interface ChipIcon {
    icon: IconData;
    tooltipText?: string;
}

export interface ChipFilterComponentConfigurations {
    id: number | string;
    disabled?: boolean;
    mode?: ChipFilterMode;
    close?: boolean;
    maxWidth?: number;
    leftIcon?: ChipIcon;
    rightIcon?: ChipIcon;
}

export enum ChipTypeToClass {
    UnRemoveAbleSelect = 'fu-un-removable-filter',
    AddFilter = 'fu-add-filter',
    RemoveAbleSelect = 'fu-removable-filter',
    ChipFilter = 'fu-chip-filter',
    ChipSelect = 'fu-select-filter'
}

export type ChipType = 'UnRemoveAbleSelect' | 'AddFilter' | 'RemoveAbleSelect' | 'ChipFilter' | 'ChipSelect';
export type ChipFilterMode = 'static' | 'dynamic' | 'add';

export interface ChipFilterComponentConfigurations {
    id?: number | string;
    close?: boolean;
    disabled?: boolean;
    selected?: boolean;
}

export enum ChipTypeToClass {
    UnRemoveAbleSelect = 'fu-un-removable-filter',
    AddFilter = 'fu-add-filter',
    RemoveAbleSelect = 'fu-removable-filter',
    ChipDropdown = 'fu-chip-dropdown'
}

export type ChipType = 'UnRemoveAbleSelect' | 'AddFilter' | 'RemoveAbleSelect' | 'ChipDropdown';

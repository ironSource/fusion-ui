export interface ChipFilterComponentConfigurations {
    id?: number | string;
    close?: boolean;
    disabled?: boolean;
    selected?: boolean;
    type?: ChipType;
}

export enum ChipTypeToClass {
    DateFilter = 'fu-date-filter',
    AddFilter = 'fu-add-filter',
    ChipSelect = 'fu-chip-select',
    ChipDropdown = 'fu-chip-dropdown'
}

export type ChipType = 'DateFilter' | 'AddFilter' | 'ChipSelect' | 'ChipDropdown';

export interface ChipFilterComponentConfigurations {
    id?: number | string;
    close?: boolean;
    disabled?: boolean;
    selected?: boolean;
    type?: ChipType;
    tooltipContent?: string;
    tooltipWidth?: number;
}

export enum ChipTypeToClass {
    DateFilter = 'fu-date-filter',
    AddFilter = 'fu-add-filter',
    ChipSelect = 'fu-chip-select'
}

export type ChipType = 'DateFilter' | 'AddFilter' | 'ChipSelect';

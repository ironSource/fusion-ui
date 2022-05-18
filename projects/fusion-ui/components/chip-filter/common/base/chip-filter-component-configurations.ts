export interface ChipFilterComponentConfigurations {
    id?: number | string;
    disabled?: boolean;
    selected?: boolean;
    type?: ChipFilterType;
}

export enum ChipTypeToClass {
    UnRemoveAbleSelect = 'fu-un-removable-filter',
    AddFilter = 'fu-add-filter',
    RemoveAbleSelect = 'fu-removable-filter',
    ChipFilter = 'fu-chip-filter'
}

export type ChipType = 'UnRemoveAbleSelect' | 'AddFilter' | 'RemoveAbleSelect' | 'ChipFilter';
export type ChipFilterType = 'static' | 'dynamic';

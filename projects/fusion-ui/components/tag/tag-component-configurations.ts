export enum TagRole {
    Filter = 'filter'
}

export interface TagComponentConfigurations {
    id?: number | string;
    icon?: string | {iconName: string; iconVersion: string};
    flag?: string;
    title: string;
    close?: boolean;
    disabled?: boolean;
    selected?: boolean;
    role?: TagRole;
    tooltipContent?: string;
    tooltipWidth?: number;
}

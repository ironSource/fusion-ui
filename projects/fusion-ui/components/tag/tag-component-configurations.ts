import {IconData} from '@ironsource/fusion-ui/components/icon';

export enum TagRole {
    Filter = 'filter'
}

export interface TagComponentConfigurations {
    id?: number | string;
    icon?: IconData;
    flag?: string;
    title: string;
    close?: boolean;
    disabled?: boolean;
    selected?: boolean;
    role?: TagRole;
    tooltipContent?: string;
    tooltipWidth?: number;
}

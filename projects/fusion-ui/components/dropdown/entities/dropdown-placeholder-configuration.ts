import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

export interface DropdownPlaceholderConfiguration {
    icon?: IconData;
    isForcedPlaceholder?: boolean;
    placeholderText: string;
}

export interface SelectedItemName {
    singular: string;
    plural: string;
}

export type DropdownTriggerMode = 'button' | 'button-text' | 'button-add' | 'button-icon' | 'default';

import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';

export interface DropdownPlaceholder {
    search?: string;
    prefix?: string;
    value?: string;
    width?: string;
    forcePlaceholderOnSelection?: boolean;
    overlayLocation?: string;
}

export interface DropdownSelectConfigurations {
    selectedOption?: DropdownOption[];
    dynamicContent?: DynamicComponentConfiguration;
    placeholder?: DropdownPlaceholder;
    disabled?: boolean;
    readonly?: boolean;
    isTabMode?: boolean;
    isSearch?: boolean;
    isOpen?: boolean;
    isMultipleSelection?: boolean;
    error?: string;
    icon?: IconData;
    labelFlag?: string;
    labelImage?: string;
    dropdownArrowIconName?: IconData;
    filterIconName?: IconData;
}

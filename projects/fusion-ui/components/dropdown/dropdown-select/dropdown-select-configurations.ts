import {DropdownOption} from '../entities/dropdown-option';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components';

export interface DropdownSelectConfigurations {
    selectedOption?: DropdownOption[];
    dynamicContent?: DynamicComponentConfiguration;
    placeholder?: {
        search?: string;
        prefix?: string;
        value?: string;
        width?: string;
        forcePlaceholderOnSelection?: boolean;
        overlayLocation?: string;
    };
    disabled?: boolean;
    isTabMode?: boolean;
    isSearch?: boolean;
    isOpen?: boolean;
    isMultipleSelection?: boolean;
    error?: string;
    icon?: string | {iconName: string; iconVersion?: string};
    labelFlag?: string;
    labelImage?: string;
    dropdownArrowIconName?: string | {iconName: string; iconVersion?: string};
    filterIconName?: string | {iconName: string; iconVersion?: string};
}

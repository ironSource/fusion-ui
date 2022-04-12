import {DropdownOption} from '../entities/dropdown-option';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components';
import {IconData} from '@ironsource/fusion-ui/components/icon';

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
    icon?: string | IconData;
    labelFlag?: string;
    labelImage?: string;
    dropdownArrowIconName?: string | IconData;
    filterIconName?: string | IconData;
}

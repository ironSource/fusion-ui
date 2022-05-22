import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components';
import {IconData} from '@ironsource/fusion-ui/components/icon';
import {DropdownOption} from '@ironsource/fusion-ui';

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
    icon?: IconData;
    labelFlag?: string;
    labelImage?: string;
    dropdownArrowIconName?: IconData;
    filterIconName?: IconData;
}

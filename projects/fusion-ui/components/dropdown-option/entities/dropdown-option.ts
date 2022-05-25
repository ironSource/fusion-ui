import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components';
import {IconData} from '@ironsource/fusion-ui/components/icon';

export interface DropdownOption {
    icon?: IconData;
    flag?: string;
    title?: string;
    displayText?: string;
    titleText?: string;
    image?: string;
    id: number | string;
    class?: string;
    checked?: boolean;
    groupId?: number | string;
    isGroup?: boolean;
    isOpen?: boolean; // used for sub-group state storing open/closed
    isSelected?: boolean;
    childOptions?: DropdownOption[];
    permissions?: string[]; // if user can see option by his permission
    subText?: {text: string; icon?: string} | string;
    indicationStatus?: boolean;
    tooltipText?: string;
    isDisabled?: boolean;
    content?: DynamicComponentConfiguration; // dynamic content as option
}

import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';
import {CountryCode} from '@ironsource/fusion-ui/components/flag/v4';
import {TooltipCustom} from '@ironsource/fusion-ui/components/tooltip/common/base';

export interface DropdownOption {
    icon?: IconData;
    flag?: string | CountryCode;
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
    subText?: {text: string; icon?: string};
    indicationStatus?: boolean;
    tooltipText?: string;
    tooltipCustom?: TooltipCustom;
    isDisabled?: boolean;
    content?: DynamicComponentConfiguration; // dynamic content as option
    /**
     * This property for option in component v1
     */
    tooltipedIcon?: {
        iconName: string;
        tooltipText: string;
    };
}

/*
 * Created on 2020.12.2 By Andy Kononenko (andyk@ironsrc.com)
 */

import {PopupComponentContent} from '@ironsource/fusion-ui/components/popup';

export interface TabConfiguration {
    text?: string;
    icon?: string | {iconName: string; iconVersion: string}; // tab icon
    infoIcon?: string | {iconName: string; iconVersion: string}; // icon on right from text - "info, question, etc..." for tooltip / popup
    tooltipContent?: string;
    popupContent?: PopupComponentContent;
    disabled?: boolean;
}

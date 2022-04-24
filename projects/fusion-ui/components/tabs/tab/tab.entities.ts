/*
 * Created on 2020.12.2 By Andy Kononenko (andyk@ironsrc.com)
 */

import {PopupComponentContent} from '@ironsource/fusion-ui/components/popup';
import {IconData} from '@ironsource/fusion-ui/components/icon';

export interface TabConfiguration {
    text?: string;
    icon?: IconData; // tab icon
    infoIcon?: IconData; // icon on right from text - "info, question, etc..." for tooltip / popup
    tooltipContent?: string;
    popupContent?: PopupComponentContent;
    disabled?: boolean;
}

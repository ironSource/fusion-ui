/*
 * Created on 2020.12.2 By Andy Kononenko (andyk@ironsrc.com)
 */

import {PopupComponentContent} from '../../popup/popup.entity';

export interface TabConfiguration {
    text?: string;
    icon?: string; // tab icon
    infoIcon?: string; // icon on right from text - "info, question, etc..." for tooltip / popup
    tooltipContent?: string;
    popupContent?: PopupComponentContent;
    disabled?: boolean;
}

/*
 * Created on 2020.12.2 By Andy Kononenko (andyk@ironsrc.com)
 */

import {TabConfiguration} from './tab/tab.entities';

export interface TabsConfiguration {
    tabs: TabConfiguration[];
    verticalDisplay?: boolean; // tab icon position if true - tab text will be placed under icon
    tabWidth?: number; // tab width in pixel
}

/*
 * Created on 2020.11.17 By Andy Kononenko (andyk@ironsrc.com)
 */

import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {SidebarMenuItem} from './sidebar-menu.entity';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';

export interface SidebarConfiguration {
    menuItems?: SidebarMenuItem[];
    user?: LayoutUser;
    sidebarDynamicContent?: DynamicComponentConfiguration;
    pathNameNormalizeRegex?: RegExp;
    logoClickable?: boolean;
}

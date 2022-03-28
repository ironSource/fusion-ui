/*
 * Created on 2020.11.17 By Andy Kononenko (andyk@ironsrc.com)
 */

import {LayoutUser} from '@ironsource/fusion-ui/entities/layout-user';
import {SidebarMenuItem} from './sidebar-menu/sidebar-menu.entity';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components';

export interface SidebarConfiguration {
    menuItems?: SidebarMenuItem[];
    user?: LayoutUser;
    sidebarDynamicContent?: DynamicComponentConfiguration;
    pathNameNormalizeRegex?: RegExp;
    logoClickable?: boolean;
}

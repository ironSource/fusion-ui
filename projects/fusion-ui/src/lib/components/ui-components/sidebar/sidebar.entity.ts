/*
 * Created on 2020.11.17 By Andy Kononenko (andyk@ironsrc.com)
 */

import {LayoutUser} from '../layout/layout.entity';
import {SidebarMenuItem} from './sidebar-menu/sidebar-menu.entity';
import {DynamicComponentConfiguration} from '../dynamic-components/dynamic-component';

export interface SidebarConfiguration {
    menuItems?: SidebarMenuItem[];
    user?: LayoutUser;
    sidebarDynamicContent?: DynamicComponentConfiguration;
    pathNameNormalizeRegex?: RegExp;
    logoClickable?: boolean;
}

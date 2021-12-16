/*
 * Created on 2020.11.25 By Andy Kononenko (andyk@ironsrc.com)
 */

import {LayoutUser} from '../../layout.entity';
import {SidebarMenuItem} from '../../../sidebar/sidebar-menu/sidebar-menu.entity';

export interface LayoutHeaderMenuConfiguration {
    user?: LayoutUser;
    menuItems?: SidebarMenuItem[];
}

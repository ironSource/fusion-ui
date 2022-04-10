/*
 * Created on 2020.11.25 By Andy Kononenko (andyk@ironsrc.com)
 */

import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {SidebarMenuItem} from '@ironsource/fusion-ui/components/sidebar';

export interface LayoutHeaderMenuConfiguration {
    user?: LayoutUser;
    menuItems?: SidebarMenuItem[];
}

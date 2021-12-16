/*
 * Created on 2020.11.16 By Andy Kononenko (andyk@ironsrc.com)
 */

import {DynamicComponentConfiguration} from '../../dynamic-components/dynamic-component';
import {LayoutUser} from '../layout.entity';
import {SidebarMenuItem} from '../../sidebar/sidebar-menu/sidebar-menu.entity';

export interface LayoutHeaderContentTitle {
    text: string;
    content?: DynamicComponentConfiguration;
    type?: 'static' | 'page' | 'fixed';
}

export enum PageHeaderPosition {
    OnTopPageContent,
    OnLayoutHeader
}

export interface LayoutHeaderComponentConfiguration {
    title?: LayoutHeaderContentTitle;
    content?: DynamicComponentConfiguration; // header dynamic content
    menuItems?: SidebarMenuItem[];
    user?: LayoutUser;
}

/*
 * Created on 2020.11.16 By Andy Kononenko (andyk@ironsrc.com)
 */

import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {SidebarMenuItem} from '@ironsource/fusion-ui/components/sidebar/common/entities';

export interface LayoutHeaderContentTitle {
    text?: string;
    subtitle?: string;
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

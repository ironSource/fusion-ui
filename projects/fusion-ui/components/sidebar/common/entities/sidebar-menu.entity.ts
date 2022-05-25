/*
 * Created on 2020.12.10 By Andy Kononenko (andyk@ironsrc.com)
 */

import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {IconData} from '@ironsource/fusion-ui/components/icon';

export interface SidebarMenuItem {
    icon?: IconData;
    name?: string; // not in use if has content
    route?: string;
    routeConfigurations?: {
        triggerHrefEvent?: boolean; // triggerHrefEvent - if true will not suppress default click event;  href - deprecated; target - where open link, default "_self"
        /**
         * @deprecated use SidebarMenuItem.route instead href
         */
        href?: string;
        target?: string;
    };
    class?: string;
    children?: SidebarMenuItem[];
    additionalAction?: SidebarMenuItem;
    data?: any;
    content?: DynamicComponentConfiguration;
}

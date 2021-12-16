/*
 * Created on 2020.12.10 By Andy Kononenko (andyk@ironsrc.com)
 */

import {DynamicComponentConfiguration} from '../../dynamic-components/dynamic-component';

export interface SidebarMenuItem {
    icon?: string;
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

/*
 * Created on 2020.11.19 By Andy Kononenko (andyk@ironsrc.com)
 */

import {LayoutHeaderComponentConfiguration} from './layout-header/layout-header-entity';
import {SidebarMenuItem} from '../sidebar/sidebar-menu/sidebar-menu.entity';
import {SvgOptions} from '../svg/svg-entities';

export interface LayoutComponentConfiguration {
    sidebarMenuItems?: SidebarMenuItem[];
    headerConfiguration?: LayoutHeaderComponentConfiguration;
    user?: LayoutUser;
    pathNameNormalizeRegex?: RegExp;
    logoClickable?: boolean;
}

export interface LayoutUser {
    icon?: string;
    name?: string;
    email?: string;
}

export enum LayoutMediaType {
    Desktop,
    Tablet,
    Mobile
}

// for using in this module without imports from v1
export interface LayoutModuleOptions {
    svgOptions: SvgOptions;
}

// FU-89: force modes for using in documentation
export type LayoutForceScreenMode = 'desktop' | 'tablet' | 'mobile';

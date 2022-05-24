/*
 * Created on 2020.11.19 By Andy Kononenko (andyk@ironsrc.com)
 */
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {LayoutHeaderComponentConfiguration} from './layout-header/layout-header-entity';
import {SidebarMenuItem} from '@ironsource/fusion-ui/components/sidebar/common/entities';
import {SvgOptions} from '@ironsource/fusion-ui/components/svg';

export interface LayoutComponentConfiguration {
    sidebarMenuItems?: SidebarMenuItem[];
    headerConfiguration?: LayoutHeaderComponentConfiguration;
    user?: LayoutUser;
    pathNameNormalizeRegex?: RegExp;
    logoClickable?: boolean;
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

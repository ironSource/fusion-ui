import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

/**
 * default mode is 'clickToOpenSecondaryMenu'
 */
export type PrimaryMenuMode = 'clickToOpenSecondaryMenu' | 'clickToDefaultSecondaryItem' | 'hoverToShowSecondaryItems';

export enum NavigationBarItemType {
    Home = 'home',
    Main = 'main',
    Bottom = 'bottom',
    User = 'user'
}

export interface PrimaryMenuItem {
    id?: string;
    type: NavigationBarItemType;
    menuIcon?: IconData;
    menuIconPath?: string; // instead menuIcon it use fusion-svg component
    menuLogoSrc?: string; // url to image that will be used as logo on top of secondary menu
    menuTitle?: string;
    menuTooltip?: string;
    menuItems?: MenuItem[];
    customClick?: Function; // for custom click event handling in BOTTOM menu item type
    route?: string;
    redirect?: string; // url to navigate in case has value here - route will be suppressed
    target?: string; // for open in new tab named as target
    cssTheme?: {[key: string]: string}; // for type - main css color theme
    cssStyle?: string;
}

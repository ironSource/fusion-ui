import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

export enum NavigationBarItemType {
    Home = 'home',
    Main = 'main',
    Bottom = 'bottom',
    User = 'user'
}

export interface PrimaryMenuItem {
    type: NavigationBarItemType;
    menuIcon?: IconData;
    menuIconPath?: string; // instead menuIcon it use fusion-svg component
    menuLogoSrc?: string; // url to image that will be used as logo on top of secondary menu
    menuTitle?: string;
    menuTooltip?: string;
    menuItems?: MenuItem[];
    route?: string;
    redirect?: string; // url to navigate in case has value here - route will be suppressed
    target?: string; // for open in new tab named as target
    cssTheme?: {[key: string]: string}; // for type - main css color theme
}

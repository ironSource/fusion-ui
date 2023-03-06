import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

export type NavigationBarItemType = 'home' | 'network' | 'bottom';

export interface NavigationMenuBarItem {
    type: NavigationBarItemType;
    menuIcon?: IconData;
    menuTitle?: string;
    menuTooltip?: string;
    menuItems?: MenuItem[];
    route?: string;
}

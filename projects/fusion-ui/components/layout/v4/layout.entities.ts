import {LayoutUser} from '@ironsource/fusion-ui';
import {NavigationMenuBarItem} from '@ironsource/fusion-ui/components/navigation-menu/v4/navigation-menu.entities';

export interface LayoutConfiguration {
    navigationMenuItems?: NavigationMenuBarItem[];
    layoutUser?: LayoutUser;
}

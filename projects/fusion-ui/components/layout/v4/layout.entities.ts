import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {NavigationMenuBarItem} from '@ironsource/fusion-ui/components/navigation-menu/v4';

export interface LayoutConfiguration {
    navigationMenuItems?: NavigationMenuBarItem[];
    layoutUser?: LayoutUser;
}

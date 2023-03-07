import {NavigationBarItemType, NavigationMenuBarItem} from '@ironsource/fusion-ui/components/navigation-menu/v4/navigation-menu.entities';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';

export const USER_PROFILE_MENU_ITEMS: MenuItem[] = [
    {
        cssClass: 'item-in-group_first',
        name: 'Account',
        route: '/'
    },
    {
        cssClass: 'item-in-group',
        name: 'User Management',
        route: '/'
    },
    {
        cssClass: 'item-in-group_last',
        name: 'Company Info',
        route: '/'
    },
    {
        name: 'Payment',
        route: '/'
    },
    {
        name: 'Contact Us',
        route: '/'
    },
    {
        name: 'Logout',
        route: '/'
    }
];

export const NAVIGATION_MENU_MOCK: NavigationMenuBarItem[] = [
    {
        type: NavigationBarItemType.Home,
        menuIcon: {iconName: 'house', iconVersion: 'v4'},
        menuTooltip: 'Dashboard',
        route: '/'
    },
    {
        type: NavigationBarItemType.Main,
        menuIcon: {iconName: 'unity', iconVersion: 'v4'},
        menuTitle: 'LevelPlay',
        menuTooltip: 'Unity LevelPlay',
        cssTheme: {
            'fu-navbar-background-color': '#202020'
        }
    },
    {
        type: NavigationBarItemType.Main,
        menuIcon: {iconName: 'ironSource', iconVersion: 'v4'},
        menuTitle: 'Network',
        menuTooltip: 'ironSource network',
        cssTheme: {
            'fu-navbar-background-color': '#0D148C'
        }
    },
    {
        type: NavigationBarItemType.Bottom,
        menuIcon: {iconName: 'question', iconVersion: 'v4'},
        menuTooltip: 'Knowledge Center',
        redirect: 'https://platform.ironsrc.com/',
        target: '_blank'
    },
    {
        type: NavigationBarItemType.User,
        menuIcon: {iconName: 'userCircle', iconVersion: 'v4'},
        menuTooltip: 'Account',
        menuItems: USER_PROFILE_MENU_ITEMS
    }
];

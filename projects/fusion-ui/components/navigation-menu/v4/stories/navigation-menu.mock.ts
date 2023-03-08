import {NavigationBarItemType, NavigationMenuBarItem} from '../navigation-menu.entities';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';

export const USER_PROFILE_MENU_ITEMS: MenuItem[] = [
    {
        name: 'Account',
        route: '/'
    },
    {
        name: 'User Management',
        route: '/'
    },
    {
        name: 'Company Info',
        route: '/'
    },
    {
        withTopDelimiter: true,
        name: 'Payment',
        route: '/'
    },
    {
        withTopDelimiter: true,
        icon: {iconName: 'mail-outline', iconVersion: 'v4'},
        name: 'Contact Us',
        route: '/'
    },
    {
        name: 'Logout',
        icon: {iconName: 'logout', iconVersion: 'v4'},
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

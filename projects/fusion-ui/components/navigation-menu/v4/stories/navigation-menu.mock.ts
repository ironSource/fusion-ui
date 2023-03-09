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
        icon: {iconName: 'mail_outline', iconVersion: 'v4'},
        name: 'Contact Us',
        route: '/'
    },
    {
        name: 'Logout',
        icon: {iconName: 'logout', iconVersion: 'v4'},
        route: '/'
    }
];

export const UNITY_MENU_ITEMS: MenuItem[] = [
    {
        icon: {iconName: 'add', iconVersion: 'v4'},
        name: 'Add App'
    },
    {
        name: 'Mediation',
        cssClass: 'fu-nav-menu-title-item'
    },
    {
        icon: {iconName: 'chart_line_up', iconVersion: 'v4'},
        name: 'Reports',
        children: [
            {
                name: 'Performance',
                route: '/performance'
            },
            {
                name: 'User Activity',
                route: '/User+Activity'
            },
            {
                name: 'Real Time Pivot',
                redirect: 'https:/google.com',
                target: '_blank'
            }
        ]
    }
];

export const NAVIGATION_MENU_MOCK: NavigationMenuBarItem[] = [
    {
        type: NavigationBarItemType.Home,
        menuIcon: {iconName: 'house', iconVersion: 'v4'},
        menuTooltip: 'Dashboard',
        route: '/',
        cssTheme: {
            'fu-navbar-background-color': '#202020'
        }
    },
    {
        type: NavigationBarItemType.Main,
        menuIcon: {iconName: 'unity', iconVersion: 'v4'},
        menuTitle: 'LevelPlay',
        menuTooltip: 'Unity LevelPlay',
        menuLogoSrc: 'https://fusion.ironsrc.net/assets/images/v4/unionLevelPlay.png',
        cssTheme: {'fu-navbar-background-color': '#202020'},
        menuItems: UNITY_MENU_ITEMS
    },
    {
        type: NavigationBarItemType.Main,
        menuIcon: {iconName: 'ironSource', iconVersion: 'v4'},
        menuTitle: 'Network',
        menuTooltip: 'ironSource network',
        menuLogoSrc: 'https://fusion.ironsrc.net/assets/images/v4/isNetwork.png',
        cssTheme: {'fu-navbar-background-color': '#0D148C'}
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

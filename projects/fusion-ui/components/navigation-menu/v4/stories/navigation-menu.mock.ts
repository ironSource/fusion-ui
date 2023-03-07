import {NavigationBarItemType, NavigationMenuBarItem} from '@ironsource/fusion-ui/components/navigation-menu/v4/navigation-menu.entities';

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
        type: NavigationBarItemType.Bottom,
        menuIcon: {iconName: 'userCircle', iconVersion: 'v4'},
        menuTooltip: 'Account'
    }
];

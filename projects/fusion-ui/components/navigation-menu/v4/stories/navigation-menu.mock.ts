import {NavigationMenuBarItem} from '@ironsource/fusion-ui/components/navigation-menu/v4/navigation-menu.entities';

export const NAVIGATION_MENU_MOCK: NavigationMenuBarItem[] = [
    {
        type: 'home',
        menuIcon: {iconName: 'house', iconVersion: 'v4'},
        menuTooltip: 'Dashboard',
        route: '/'
    },
    {
        type: 'network',
        menuIcon: {iconName: 'unity', iconVersion: 'v4'},
        menuTitle: 'LevelPlay',
        menuTooltip: 'Unity LevelPlay'
    },
    {
        type: 'network',
        menuIcon: {iconName: 'ironSource', iconVersion: 'v4'},
        menuTitle: 'Network',
        menuTooltip: 'ironSource network'
    },
    {
        type: 'bottom',
        menuIcon: {iconName: 'question', iconVersion: 'v4'},
        menuTooltip: 'Knowledge Center',
        route: '/'
    },
    {
        type: 'bottom',
        menuIcon: {iconName: 'userCircle', iconVersion: 'v4'},
        menuTooltip: 'Account'
    }
];

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
        name: 'Add App',
        route: '/Add+app'
    },
    {
        name: 'Mediation',
        isGroupName: true
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
            },
            {
                name: 'Cohort',
                route: '/cohort'
            },
            {
                name: 'Report Generator',
                route: '/Report+Generator'
            },
            {
                name: 'Activity Logs',
                route: '/Activity+Logs'
            }
            // region for scroll ----------------------------
            /*{
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
            },
            {
                name: 'Cohort',
                route: '/cohort'
            },
            {
                name: 'Report Generator',
                route: '/Report+Generator'
            },
            {
                name: 'Activity Logs',
                route: '/Activity+Logs'
            },
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
            },
            {
                name: 'Cohort',
                route: '/cohort'
            },
            {
                name: 'Report Generator',
                route: '/Report+Generator'
            },
            {
                name: 'Activity Logs',
                route: '/Activity+Logs'
            },
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
            },
            {
                name: 'Cohort',
                route: '/cohort'
            },
            {
                name: 'Report Generator',
                route: '/Report+Generator'
            },
            {
                name: 'Activity Logs',
                route: '/Activity+Logs'
            },
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
            },
            {
                name: 'Cohort',
                route: '/cohort'
            },
            {
                name: 'Report Generator',
                route: '/Report+Generator'
            },
            {
                name: 'Activity Logs',
                route: '/Activity+Logs'
            },
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
            },
            {
                name: 'Cohort',
                route: '/cohort'
            },
            {
                name: 'Report Generator',
                route: '/Report+Generator'
            },
            {
                name: 'Activity Logs',
                route: '/Activity+Logs'
            }*/
            // endregion
        ]
    },
    {
        icon: {iconName: 'mediation', iconVersion: 'v4'},
        name: 'Management',
        children: [
            {
                name: 'Mediation',
                route: '/mediation'
            },
            {
                name: 'A/B',
                route: '/ab'
            }
        ]
    },
    {
        icon: {iconName: 'wrench', iconVersion: 'v4'},
        name: 'Setup',
        children: [
            {
                name: 'Ad Units',
                route: '/Ad+Units'
            },
            {
                name: 'SDK Networks',
                route: '/SDK+Networks'
            },
            {
                name: 'Segments',
                route: '/Segments'
            },
            {
                name: 'Unity Ads',
                redirect: 'https:/google.com',
                target: '_blank'
            },
            {
                name: 'Testing',
                route: '/Testing'
            },
            {
                name: 'Offerwall',
                route: '/Offerwall'
            }
        ]
    },
    {
        name: 'Ad Quality',
        isGroupName: true
    },
    {
        icon: {iconName: 'medal', iconVersion: 'v4'},
        name: 'Review',
        children: [
            {
                name: 'Analysis',
                route: '/Analysis'
            },
            {
                name: 'Creatives',
                route: '/Creatives'
            },
            {
                name: 'User Journey',
                route: '/User+Journey'
            },
            {
                name: 'Notifications',
                route: '/Notifications'
            }
        ]
    },
    {
        icon: {iconName: 'faders', iconVersion: 'v4'},
        name: 'Manage',
        children: [
            {
                name: 'Manage Rule',
                route: '/Manage+Rule'
            }
        ]
    }
];

export const IS_MENU_ITEMS: MenuItem[] = [
    {
        icon: {iconName: 'add', iconVersion: 'v4'},
        name: 'Add App',
        route: '/Add+app'
    },
    {
        icon: {iconName: 'chart_line_up', iconVersion: 'v4'},
        name: 'Reports',
        children: [
            {
                name: 'Performance',
                route: '/performance'
            }
        ]
    },
    {
        icon: {iconName: 'wrench', iconVersion: 'v4'},
        name: 'Setup',
        children: [
            {
                name: 'Instances',
                route: '/Instances'
            },
            {
                name: 'Offerwall',
                route: '/Offerwall'
            },
            {
                name: 'Testing',
                route: '/Testing'
            }
        ]
    },
    {
        icon: {iconName: 'add', iconVersion: 'v4'},
        name: 'Add Campaign',
        route: '/Add+Campaign'
    },
    {
        icon: {iconName: 'rocket_launch', iconVersion: 'v4'},
        name: 'Campaigns',
        children: [
            {
                name: 'MMP',
                route: '/MMP'
            },
            {
                name: 'SKAdNetwork',
                route: '/SKAdNetwork'
            },
            {
                name: 'Optimizer',
                route: '/Optimizer'
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
        cssTheme: {'fu-navbar-background-color': '#0D148C'},
        menuItems: IS_MENU_ITEMS
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

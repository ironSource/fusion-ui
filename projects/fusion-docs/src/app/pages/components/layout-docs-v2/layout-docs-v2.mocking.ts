/*
 * Created on 2020.12.17 By Andy Kononenko (andyk@ironsrc.com)
 */
import {SidebarMenuItem} from '@ironsource/fusion-ui/components/sidebar/common/entities';
import {LayoutUser} from '@ironsource/fusion-ui';
import {LayoutComponentConfiguration, LayoutHeaderComponentConfiguration} from '@ironsource/fusion-ui/components/layout/v2';

export const LAYOUT_USER: LayoutUser = {
    icon: {iconName: 'user-circle', iconVersion: 'v2'},
    name: 'Example Username',
    email: 'test@irontest.com'
};

export const LAYOUT_HEADER_MENU_ITEMS: SidebarMenuItem[] = [
    {
        icon: {iconName: 'magic', iconVersion: 'v2'},
        name: 'Theme toggle'
    },
    {
        icon: {iconName: 'logout', iconVersion: 'v2'},
        name: 'Sign out',
        route: '/docs/components/v2/mobile-previewer'
    }
];

export const LAYOUT_SIDEBAR_MENU_ITEMS: SidebarMenuItem[] = [
    {
        icon: {iconName: 'magic', iconVersion: 'v2'},
        name: 'Getting Started',
        route: '/docs/components/v2/layout'
    },
    {
        icon: {iconName: 'paper-plane', iconVersion: 'v2'},
        name: 'Guidelines',
        children: [
            {
                name: 'Colors',
                route: '/docs/components/colors'
            },
            {
                name: 'Typography ',
                route: '/docs/components/v2/typography'
            }
        ]
    },
    {
        icon: {iconName: 'apps', iconVersion: 'v2'},
        name: 'Components',
        children: [
            {
                name: 'Alert',
                route: '/docs/components/alert'
            },
            {
                name: 'Accordion',
                route: '/docs/components/accordion'
            },
            {
                name: 'Charts',
                route: '/docs/components/charts'
            },
            {
                name: 'Some Group',
                children: [
                    {
                        name: 'Alert',
                        route: '/docs/components/v2/alert'
                    },
                    {
                        name: 'Charts',
                        route: '/docs/components/v2/charts'
                    }
                ]
            },
            {
                name: 'Checkbox',
                route: '/docs/components/checkbox'
            }
        ]
    },
    {
        icon: {iconName: 'info-circle', iconVersion: 'v2'},
        name: 'Target Link Example',
        routeConfigurations: {
            href: 'http://developers.ironsrc.com',
            target: '_blank'
        }
    }
];

export const LAYOUT_HEADER_CONFIGURATION: LayoutHeaderComponentConfiguration = {
    title: {text: 'Header Title'},
    menuItems: LAYOUT_HEADER_MENU_ITEMS
};

export const LAYOUT_CONFIGURATION: LayoutComponentConfiguration = {
    sidebarMenuItems: LAYOUT_SIDEBAR_MENU_ITEMS,
    headerConfiguration: LAYOUT_HEADER_CONFIGURATION,
    user: LAYOUT_USER
};

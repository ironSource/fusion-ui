/*
 * Created on 2020.12.17 By Andy Kononenko (andyk@ironsrc.com)
 */

import {SidebarMenuItem, LayoutComponentConfiguration, LayoutHeaderComponentConfiguration, LayoutUser} from '@ironsource/fusion-ui';

export const LAYOUT_USER: LayoutUser = {
    icon: 'user-circle',
    name: 'Example Username',
    email: 'test@irontest.com'
};

export const LAYOUT_HEADER_MENU_ITEMS: SidebarMenuItem[] = [
    {
        icon: 'magic',
        name: 'Theme toggle'
    },
    {
        icon: 'logout',
        name: 'Sign out',
        route: '/docs/components/v2/mobile-previewer'
    }
];

export const LAYOUT_SIDEBAR_MENU_ITEMS: SidebarMenuItem[] = [
    {
        icon: 'magic',
        name: 'Getting Started',
        route: '/docs/components/v2/layout'
    },
    {
        icon: 'paper-plane',
        name: 'Guidelines',
        children: [
            {
                name: 'Colors',
                route: '/docs/components/colors'
            },
            {
                name: 'Typography ',
                route: '/docs/components/v2/typography'
            },
            {
                name: 'Override Style',
                route: '/docs/components/override-style'
            }
        ]
    },
    {
        icon: 'apps',
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
        icon: 'info-circle',
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

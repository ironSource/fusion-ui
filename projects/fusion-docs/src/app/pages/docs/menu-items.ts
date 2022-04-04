import {MenuItem, SidebarMenuItem} from '@ironsource/fusion-ui';
import {Component, Type} from '@angular/core';
import {MenuItemExampleComponent} from '../../components/menu-item-example/menu-item-example.component';

const FUSION_DOCS_SITE = `https://fusion.ironsrc.net`;

export const MENU_ITEMS: MenuItem[] = [
    {
        icon: 'magic',
        name: 'Getting Started',
        route: '/docs/getting-started'
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
                name: 'Colors ',
                route: '/docs/components/v2/colors'
            },
            {
                name: 'Typography',
                route: '/docs/components/typography'
            },
            {
                name: 'Typography ',
                route: '/docs/components/v2/typography'
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
                name: 'Alert',
                route: '/docs/components/v2/alert'
            },
            {
                name: 'Accordion',
                route: '/docs/components/accordion'
            },
            {
                name: 'Button',
                route: '/docs/components/button'
            },
            {
                name: 'Charts',
                route: '/docs/components/charts'
            },
            {
                name: 'Charts',
                route: '/docs/components/v2/charts'
            },
            {
                name: 'Checkbox',
                route: '/docs/components/checkbox'
            },
            {
                name: 'Date Picker',
                route: '/docs/components/datepicker'
            },
            {
                name: 'Daterange',
                route: '/docs/components/daterange'
            },
            {
                name: 'Month Picker',
                route: '/docs/components/month-picker'
            },
            {
                name: 'Dropdown',
                route: '/docs/components/dropdown'
            },
            {
                name: 'Dropdown',
                route: '/docs/components/v2/dropdown'
            },
            {
                name: 'Dropdown Dual Multi Select',
                route: '/docs/components/v2/dropdown-dual-multi-select'
            },
            {
                name: 'Flag',
                route: '/docs/components/flag'
            },
            {
                name: 'Header Overlay',
                route: '/docs/components/header-overlay'
            },
            {
                name: 'Icon',
                route: '/docs/components/icon'
            },
            {
                name: 'Icons Lib',
                route: '/docs/components/v2/icon'
            },
            {
                name: 'Icon - Status',
                route: '/docs/components/icon-status'
            },
            {
                name: 'Input',
                route: '/docs/components/input'
            },
            {
                name: 'Layout',
                route: '/docs/components/layout'
            },
            {
                name: 'Layout',
                route: '/docs/components/v2/layout'
            },
            {
                name: 'List Box',
                route: '/docs/components/list-box'
            },
            {
                name: 'List Box',
                route: '/docs/components/v2/list-box'
            },
            {
                name: 'Loader',
                route: '/docs/components/loader'
            },
            {
                name: 'Mobile Previewer',
                route: '/docs/components/mobile-previewer'
            },
            {
                name: 'Mobile Previewer',
                route: '/docs/components/v2/mobile-previewer'
            },
            {
                name: 'Overlays',
                route: '/docs/components/modal'
            },
            {
                name: 'Overlays',
                route: '/docs/components/v2/modal'
            },
            {
                name: 'Popup',
                route: '/docs/components/popup'
            },
            {
                name: 'Popup',
                route: '/docs/components/v2/popup'
            },
            {
                name: 'Radio',
                route: '/docs/components/radio'
            },
            {
                name: 'Status Label',
                route: '/docs/components/status-label'
            },
            {
                name: 'Switchers',
                route: '/docs/components/switchers'
            },
            {
                name: 'Switchers',
                route: '/docs/components/v2/switchers'
            },
            {
                name: 'Table',
                route: '/docs/components/table'
            },
            {
                name: 'Table',
                route: '/docs/components/v2/table'
            },
            {
                name: 'Tabs',
                route: '/docs/components/tabs'
            },
            {
                name: 'Tag',
                route: '/docs/components/tag'
            },
            {
                name: 'Tag',
                route: '/docs/components/v2/tag'
            },
            {
                name: 'Toast',
                route: '/docs/components/toast'
            },
            {
                name: 'Toggle',
                route: '/docs/components/toggle'
            },
            {
                name: 'Tooltip',
                route: '/docs/components/tooltip'
            },
            {
                name: 'Video Player',
                route: '/docs/components/video-player'
            },
            {
                name: 'Video Player',
                route: '/docs/components/v2/video-player'
            }
        ]
    },
    {
        icon: 'wrench',
        name: 'Services',
        children: [
            {
                name: 'Api',
                route: '/docs/services/api'
            },
            {
                name: 'Cache',
                route: '/docs/services/cache'
            },
            {
                name: 'Log',
                route: '/docs/services/log'
            },
            {
                name: 'Modal',
                route: '/docs/services/modal'
            },
            {
                name: 'Notification',
                route: '/docs/services/notification'
            },
            {
                name: 'Toast',
                route: '/docs/services/toast'
            },
            {
                name: 'Colors',
                route: '/docs/services/colors'
            }
        ]
    },
    {
        icon: 'bullhorn',
        name: 'Directives',
        children: [
            {
                name: 'Click Outside',
                route: '/docs/directives/click-outside'
            },
            {
                name: 'Copy To Clipboard',
                route: '/docs/directives/copy-to-clipboard'
            },
            {
                name: 'Error Message',
                route: '/docs/directives/error-message'
            },
            {
                name: 'Scroll To',
                route: '/docs/directives/scroll-to'
            },
            {
                name: 'Intersection',
                route: '/docs/directives/intersection'
            }
        ]
    },
    {
        icon: 'info-circle',
        name: 'External link',
        target: '_blank',
        redirect: 'http://developers.ironsrc.com'
    }
];

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
    } /*,
    {
        name: 'test html snippet',
        content: {
            htmlSnippet: `<div style="color:red; padding: 5px 20px;">HTML Snippet</div>`
        }
    },
    {
        name: 'test component',
        content: {
            component: {
                type: MenuItemExampleComponent as Type<Component>,
                data: {
                    state: true
                }
            }
        }
    },
    {
        name: 'test element',
        content: {
            element: (() => {
                const element = document.createElement('div');
                element.style.cssText = `color:green; padding: 5px 20px;`;
                element.appendChild(document.createTextNode('HTML Element'));
                return element;
            })()
        }
    }*/
];

export const HEADER_HELP_MENU_ITEMS = [
    {
        name: 'Docs',
        route: '/'
    },
    {
        name: 'New Tab Link',
        redirect: 'https://google.com',
        target: '_blank'
    },
    {
        name: 'Playground',
        route: '/docs/playground'
    },
    {
        name: 'test html snippet',
        content: {
            htmlSnippet: `<div style="color:red; padding: 5px 20px;">HTML Snippet</div>`
        }
    },
    {
        name: 'test component',
        content: {
            component: {
                type: MenuItemExampleComponent as Type<Component>,
                data: {
                    state: true
                }
            }
        }
    },
    {
        name: 'test element',
        content: {
            element: (() => {
                const element = document.createElement('div');
                element.style.cssText = `color:green; padding: 5px 20px;`;
                element.appendChild(document.createTextNode('HTML Element'));
                return element;
            })()
        }
    }
];

export const STYLE_2_MENU_ITEMS = [
    'Accordion',
    'Button',
    'Checkbox',
    'Daterange',
    'Directives',
    'External link',
    'Getting Started',
    'Input',
    'Loader',
    'Month Picker',
    'Radio',
    'Services',
    'Status Label',
    'Tabs',
    'Toast',
    'Toggle',
    'Tooltip'
];

export const MENU_ITEMS_V2: SidebarMenuItem[] = [...MENU_ITEMS].map(item => {
    if (!item.target) {
        return item;
    } else {
        return {
            icon: 'info-circle',
            name: 'External link',
            route: 'http://developers.ironsrc.com',
            routeConfigurations: {
                target: '_blank'
            }
        };
    }
});

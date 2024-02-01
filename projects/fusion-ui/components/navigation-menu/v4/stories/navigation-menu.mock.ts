import {NavigationBarItemType, PrimaryMenuItem} from '../navigation-menu.entities';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {HeaderContent} from '@ironsource/fusion-ui/components/layout/v4/layout.entities';

export const USER_PROFILE_MENU_ITEMS: MenuItem[] = [
    {
        name: 'Account',
        route: '/'
    },
    {
        name: 'User management',
        route: '/'
    },
    {
        name: 'Company info',
        route: '/'
    },
    {
        withTopDelimiter: true,
        name: 'Payments',
        route: '/'
    },
    {
        withTopDelimiter: true,
        icon: 'ph/envelope-simple-open',
        name: 'Contact us',
        redirect: 'https://ironsrc.formtitan.com/contact-us',
        target: '_contactUs'
    },
    {
        name: 'Logout',
        icon: 'ph/sign-out',
        route: '/'
    }
];

export const UNITY_MENU_ITEMS: MenuItem[] = [
    {
        icon: 'ph/plus',
        name: 'Add app',
        route: '/docs/components/v2/alert'
    },
    {
        name: 'Mediation',
        isGroupName: true
    },
    {
        icon: 'ph/layout',
        name: 'Dashboard',
        route: '/branch_'
    },
    {
        icon: 'ph/chart-bar',
        name: 'Reports',
        children: [
            {
                name: 'Performance',
                route: '/performance'
            },
            {
                name: 'User activity',
                route: '/User+Activity'
            },
            {
                name: 'Real time pivot',
                redirect: 'https:/google.com',
                target: '_blank'
            },
            {
                name: 'Cohort',
                route: '/cohort'
            },
            {
                name: 'Report generator',
                route: '/Report+Generator'
            },
            {
                name: 'Activity logs',
                route: '/Activity+Logs'
            }
            /*// region for scroll ----------------------------
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
            }
            // endregion*/
        ]
    },
    {
        icon: 'ph/tree-structure',
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
        icon: 'ph/gear',
        name: 'Setup',
        children: [
            {
                name: 'Ad units',
                route: '/Ad+Units'
            },
            {
                name: 'SDK networks',
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
        icon: 'ph/medal',
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
                name: 'User journey',
                route: '/User+Journey'
            },
            {
                name: 'Notifications',
                route: '/Notifications'
            }
        ]
    },
    {
        icon: 'ph/sliders',
        name: 'Manage',
        children: [
            {
                name: 'Manage rules',
                route: '/Manage+Rules'
            },
            {
                name: 'UX personalization',
                route: '/UX+Personalization'
            }
        ]
    }
];

export const IS_MENU_ITEMS: MenuItem[] = [
    {
        name: 'Monetize',
        isGroupName: true
    },
    {
        icon: 'ph/circles-four',
        name: 'Apps',
        route: '/Add+app',
        additionalAction: {
            name: 'Add app',
            route: '/Add+app'
        }
    },
    {
        icon: 'ph/chart-line-up',
        name: 'Performance',
        route: '/performance'
    },
    {
        icon: 'ph/gear',
        name: 'Setup',
        children: [
            {
                name: 'Instances',
                route: '/iframe'
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
        name: 'Grow',
        isGroupName: true
    },
    {
        icon: 'ph/plus',
        name: 'Add campaign',
        route: '/Add+Campaign'
    },
    {
        icon: 'ph/rocket-launch',
        name: 'Campaigns',
        children: [
            {
                name: 'MMP',
                route: '/docs/components/checkbox'
            },
            {
                name: 'SKAdNetwork',
                route: '/SKAdNetwork '
            }
        ]
    },
    {
        icon: 'ph/chart-bar',
        name: 'Reports',
        children: [
            {
                name: 'Overview',
                route: '/overview'
            },
            {
                name: 'Report generator',
                route: '/ReportGenerator'
            },
            {
                name: 'Optimizer',
                route: '/Optimizer'
            },
            {
                name: 'Budget',
                route: '/budget'
            }
        ]
    }
];

export const TAPJOY_MENU_ITEMS: MenuItem[] = [
    {
        icon: 'ph/layout',
        name: 'Dashboard',
        route: '/dashboard'
    }
];

export const NAVIGATION_MENU_HOME_MOCK: PrimaryMenuItem[] = [
    {
        type: NavigationBarItemType.Home,
        menuIcon: 'ph/house',
        menuTitle: 'Dashboard',
        route: '/dashboard',
        cssTheme: {
            'fu-navbar-background-color': '#202020'
        }
    },
    {
        type: NavigationBarItemType.Main,
        menuIcon: 'v4/branded/unity',
        menuTitle: 'LevelPlay',
        menuLogoSrc: 'v4/unity_logo_flat',
        cssTheme: {'fu-navbar-background-color': '#181818'},
        menuItems: UNITY_MENU_ITEMS
    },
    {
        type: NavigationBarItemType.Main,
        menuIcon: 'v4/branded/ironsource',
        menuTitle: 'Ads',
        menuLogoSrc: 'v4/is_ads_logo',
        cssTheme: {'fu-navbar-background-color': '#0D148C'},
        menuItems: IS_MENU_ITEMS
    },
    {
        type: NavigationBarItemType.Bottom,
        menuIcon: 'ph/question',
        menuTooltip: 'Knowledge Center',
        redirect: 'https://developers.is.com/',
        target: '_blank'
    },
    {
        type: NavigationBarItemType.User,
        menuIcon: 'ph/user-circle',
        menuTooltip: 'Account',
        menuItems: USER_PROFILE_MENU_ITEMS
    }
];

export const NAVIGATION_MENU_MOCK: PrimaryMenuItem[] = [
    {
        type: NavigationBarItemType.Main,
        menuIcon: 'v4/branded/unity',
        menuTitle: 'LevelPlay',
        menuLogoSrc: 'v4/unity_logo_flat',
        cssTheme: {'fu-navbar-background-color': '#181818'},
        menuItems: UNITY_MENU_ITEMS
    },
    {
        type: NavigationBarItemType.Main,
        menuIcon: 'v4/branded/ironsource',
        menuTitle: 'Ads',
        menuLogoSrc: 'v4/is_ads_logo',
        cssTheme: {'fu-navbar-background-color': '#0D148C'},
        menuItems: IS_MENU_ITEMS
    },
    {
        type: NavigationBarItemType.Main,
        menuIcon: 'v4/branded/tapjoy',
        menuTitle: 'Tapjoy',
        menuLogoSrc: 'v4/tapjoy_logo',
        cssTheme: {'fu-navbar-background-color': '#181818'},
        menuItems: TAPJOY_MENU_ITEMS
    },
    {
        type: NavigationBarItemType.Bottom,
        menuIcon: 'ph/question',
        menuTooltip: 'Knowledge Center',
        redirect: 'https://developers.is.com/',
        target: '_blank'
    },
    {
        type: NavigationBarItemType.User,
        menuIcon: 'ph/user-circle',
        menuTooltip: 'Account',
        menuItems: USER_PROFILE_MENU_ITEMS
    }
];

export const IS_ADMIN_MENU_ITEMS: MenuItem[] = [
    {
        icon: 'ph/bank',
        name: 'General',
        children: [
            {
                name: 'Manage companies',
                route: '/branch_'
            }
        ]
    },
    {
        icon: 'ph/rocket-launch',
        name: 'Demand',
        children: [
            {
                name: 'Click URL validation',
                route: '/ClickURLValidation'
            },
            {
                name: 'Manage invoices',
                route: '/ManageInvoices'
            },
            {
                name: 'Approve invoices',
                route: '/ApproveInvoices'
            },
            {
                name: 'Back office',
                route: '/Backoffice'
            },
            {
                name: 'Optimizer rollback',
                route: '/OptimizerRollback'
            }
        ]
    },
    {
        icon: {iconName: 'sketch-logo', iconVersion: 'v4'},
        name: 'Supply',
        children: [
            {
                name: 'Back office',
                route: '/BackOffice'
            },
            {
                name: 'Publisher back office',
                route: '/PublisherBackOffice'
            },
            {
                name: 'Internal A/B test tool',
                route: '/InternalABTestTool'
            },
            {
                name: 'Manage corporates',
                route: '/ManageCorporates'
            }
        ]
    },
    {
        icon: 'ph/tree-structure',
        name: 'Networks OPS',
        children: [
            {
                name: 'Promote management',
                route: '/PromoteManagement'
            },
            {
                name: 'Campaign promotions',
                route: '/CampaignPromotions'
            },
            {
                name: 'SK genre config',
                route: '/SKGenreConfig'
            },
            {
                name: 'SK advertiser config',
                route: '/SKAdvertiserConfig'
            },
            {
                name: 'Profit manager',
                route: '/ProfitManager'
            }
        ]
    },
    {
        icon: 'ph/gear',
        name: 'Customer support',
        children: [
            {
                name: 'CS platform',
                route: '/CSPlatform'
            }
        ]
    },
    {
        icon: 'ph/lightning',
        name: 'Internal',
        children: [
            {
                name: 'User management',
                route: '/UserManagement'
            },
            {
                name: 'Internal roles',
                route: '/InternalRoles'
            }
        ]
    },
    {
        icon: 'ph/currency-circle-dollar',
        name: 'Finance',
        children: [
            {
                name: 'Manage billing',
                route: '/ManageBilling'
            },
            {
                name: 'Approve billing',
                route: '/ApproveBilling'
            },
            {
                name: 'Manage payments',
                route: '/ManagePayments'
            },
            {
                name: 'Priority sync',
                route: '/Priority sync'
            }
        ]
    }
];

export const NAVIGATION_ADMIN_MENU_MOCK: PrimaryMenuItem[] = [
    {
        type: NavigationBarItemType.Main,
        menuIcon: 'v4/branded/ironsource',
        menuTitle: 'Ads',
        menuLogoSrc: 'v4/is_ads_logo',
        cssTheme: {'fu-navbar-background-color': '#0D148C'},
        menuItems: IS_ADMIN_MENU_ITEMS
    },
    {
        type: NavigationBarItemType.Bottom,
        menuIcon: 'ph/question',
        redirect: 'https://developers.is.com/',
        target: '_blank'
    },
    {
        type: NavigationBarItemType.User,
        menuIcon: 'ph/user-circle',
        menuItems: USER_PROFILE_MENU_ITEMS
    }
];

export const LAYOUT_HEADER_CONTENT_MOCK: HeaderContent = {
    title: 'Dashboard'
};

export const LAYOUT_HEADER_MULTILINE_CONTENT_MOCK: HeaderContent = {
    multiline: true
};

export const HEADER_CONTENT_MOCK: HeaderContent = {
    title: 'Title'
};

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
        icon: {iconName: 'mail_outline', iconVersion: 'v4'},
        name: 'Contact us',
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
        name: 'Add app',
        route: '/docs/components/v2/alert'
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
        icon: {iconName: 'faders', iconVersion: 'v4'},
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
        icon: {iconName: 'add', iconVersion: 'v4'},
        name: 'Add app',
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
        name: 'Grow',
        isGroupName: true
    },
    {
        icon: {iconName: 'add', iconVersion: 'v4'},
        name: 'Add campaign',
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
                route: '/iframe.html'
            },
            {
                name: 'Optimizer',
                route: '/Optimizer'
            }
        ]
    },
    {
        icon: {iconName: 'chart_line_up', iconVersion: 'v4'},
        name: 'Reports',
        children: [
            {
                name: 'Overview',
                route: '/overview'
            },
            {
                name: 'Analysis',
                route: '/analysis'
            },
            {
                name: 'Budget',
                route: '/budget'
            }
        ]
    }
];

export const NAVIGATION_MENU_MOCK: PrimaryMenuItem[] = [
    {
        type: NavigationBarItemType.Home,
        menuIcon: {iconName: 'house', iconVersion: 'v4'},
        menuTitle: 'Dashboard',
        route: '/docs/getting-started',
        cssTheme: {
            'fu-navbar-background-color': '#202020'
        }
    },
    {
        type: NavigationBarItemType.Main,
        menuIconPath: 'v4/unity',
        menuTitle: 'LevelPlay',
        menuLogoSrc: 'v4/unityLevelPlay',
        cssTheme: {'fu-navbar-background-color': '#202020'},
        menuItems: UNITY_MENU_ITEMS
    },
    {
        type: NavigationBarItemType.Main,
        menuIcon: {iconName: 'ironSource', iconVersion: 'v4'},
        menuTitle: 'Ads',
        menuLogoSrc: 'v4/isAdsLogo',
        cssTheme: {'fu-navbar-background-color': '#0D148C'},
        menuItems: IS_MENU_ITEMS
    },
    {
        type: NavigationBarItemType.Bottom,
        menuIcon: {iconName: 'question', iconVersion: 'v4'},
        redirect: 'https://developers.is.com/',
        target: '_blank'
    },
    {
        type: NavigationBarItemType.User,
        menuIcon: {iconName: 'userCircle', iconVersion: 'v4'},
        menuItems: USER_PROFILE_MENU_ITEMS
    }
];

export const IS_ADMIN_MENU_ITEMS: MenuItem[] = [
    {
        icon: {iconName: 'bank', iconVersion: 'v4'},
        name: 'General',
        children: [
            {
                name: 'Manage companies',
                route: '/branch_'
            }
        ]
    },
    {
        icon: {iconName: 'rocket_launch', iconVersion: 'v4'},
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
        icon: {iconName: 'mediation', iconVersion: 'v4'},
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
        icon: {iconName: 'wrench', iconVersion: 'v4'},
        name: 'Customer support',
        children: [
            {
                name: 'CS platform',
                route: '/CSPlatform'
            }
        ]
    },
    {
        icon: {iconName: 'lightning', iconVersion: 'v4'},
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
        icon: {iconName: 'currency-circle-dollar', iconVersion: 'v4'},
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
        menuIcon: {iconName: 'ironSource', iconVersion: 'v4'},
        menuTitle: 'Ads',
        menuLogoSrc: 'v4/isAdsLogo',
        cssTheme: {'fu-navbar-background-color': '#0D148C'},
        menuItems: IS_ADMIN_MENU_ITEMS
    },
    {
        type: NavigationBarItemType.Bottom,
        menuIcon: {iconName: 'question', iconVersion: 'v4'},
        redirect: 'https://developers.is.com/',
        target: '_blank'
    },
    {
        type: NavigationBarItemType.User,
        menuIcon: {iconName: 'userCircle', iconVersion: 'v4'},
        menuItems: USER_PROFILE_MENU_ITEMS
    }
];

export const LAYOUT_HEADER_CONTENT_MOCK: HeaderContent = {
    title: 'Dashboard'
};

export const HEADER_CONTENT_MOCK: HeaderContent = {
    title: 'Title'
};

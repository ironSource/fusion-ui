import {TestBed} from '@angular/core/testing';

import {SidebarMenuService} from './sidebar-menu.service';
import {SidebarMenuItem} from '@ironsource/fusion-ui/components/sidebar/common/entities';

const MENU_ITEMS_MOCK: SidebarMenuItem[] = [
    {
        icon: 'lightning',
        name: 'Getting Started',
        route: '/docs/getting-started'
    },
    {
        icon: 'analytics',
        name: 'Styleguide',
        children: [
            {
                name: 'Colors ',
                route: '/docs/components/colors',
                additionalAction: {
                    name: '+ V2',
                    route: '/docs/components/v2/colors'
                }
            },
            {
                name: 'GroupName',
                children: [
                    {
                        name: 'Override style',
                        route: '/docs/components/override-style'
                    }
                ]
            },
            {
                name: 'Typography ',
                route: '/docs/components/v2/typography'
            }
        ]
    },
    {
        icon: 'company',
        name: 'Components',
        children: [
            {
                name: 'Alert',
                route: '/docs/components/v2/alert',
                additionalAction: {
                    name: '+ Test',
                    route: '/docs/components/alert'
                }
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
                route: '/docs/components/v2/charts'
            }
        ]
    },
    {
        icon: 'app-store',
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
            }
        ]
    },
    {
        icon: 'spaceship',
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
        icon: {iconName: 'info-circle', iconVersion: 'v2'},
        name: 'Knowledge Center',
        routeConfigurations: {
            href: 'http://developers.ironsrc.com',
            target: '_blank'
        }
    }
];

describe('SidebarMenuService', () => {
    let service: SidebarMenuService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SidebarMenuService]
        });
        service = TestBed.inject(SidebarMenuService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should normalize pathName by regexp (remove version number)', () => {
        const regex = /\/[a-zA-Z]{1}\d{1,2}\.\d{1,2}\.\d{1,3}/;
        expect(service.normalizeActiveRoute('/v2.0.0/components', regex)).toEqual('/components');
    });

    it('should found active, open and selected menu item by route', () => {
        service.setMenuByActiveRoute(MENU_ITEMS_MOCK, '/docs/getting-started');
        expect(service.activeMenuItem$.getValue()).toBeTruthy();
        expect(service.activeMenuItem$.getValue().name).toBe('Getting Started');
        expect(service.openedMenuItem$.getValue().name).toBe('Getting Started');
        expect(service.selectedMenuItem$.getValue().name).toBe('Getting Started');
    });

    it('should found open, selected and active menu item in menu-items tree by route', () => {
        service.setMenuByActiveRoute(MENU_ITEMS_MOCK, '/docs/components/accordion');

        expect(service.activeMenuItem$.getValue().name).toBe('Accordion');
        expect(service.openedMenuItem$.getValue().name).toBe('Components');
        expect(service.selectedMenuItem$.getValue().name).toBe('Components');
    });

    it('should found open, selected and active menu item (in additional item) in menu-items tree by route', () => {
        service.setMenuByActiveRoute(MENU_ITEMS_MOCK, '/docs/components/alert');

        expect(service.activeMenuItem$.getValue().name).toBe('Alert');
        expect(service.openedMenuItem$.getValue().name).toBe('Components');
        expect(service.selectedMenuItem$.getValue().name).toBe('Components');
    });

    it('should found open, selected and active menu item in menu-items tree with sub-group by route', () => {
        service.setMenuByActiveRoute(MENU_ITEMS_MOCK, '/docs/components/override-style');

        expect(service.activeMenuItem$.getValue().name).toBe('Override style');
        expect(service.openedMenuItem$.getValue().name).toBe('Styleguide');
        expect(service.selectedMenuItem$.getValue().name).toBe('Styleguide');
    });

    it('if route not found, open, selected and active must be null', () => {
        service.setMenuByActiveRoute(MENU_ITEMS_MOCK, '/docs/not-existed');
        expect(service.activeMenuItem$.getValue()).toBeNull();
        expect(service.selectedMenuItem$.getValue()).toBeNull();
        expect(service.openedMenuItem$.getValue()).toBeNull();
    });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SidebarComponent} from './sidebar.component';
import {By} from '@angular/platform-browser';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {SidebarMenuItem} from './sidebar-menu/sidebar-menu.entity';
import {SidebarMenuService} from './sidebar-menu/sidebar-menu.service';
import {SidebarMenuModule} from './sidebar-menu/sidebar-menu.module';
import {SidebarConfiguration} from './sidebar.entity';

const MENU_ITEMS_MOCK: SidebarMenuItem[] = [
    {
        icon: 'icon-name-1',
        name: 'First Level Item',
        route: '/first-level-item'
    },
    {
        icon: 'icon-name-2',
        name: 'First Level Group',
        children: [
            {
                name: 'Second Level Item 1',
                route: '/second-level-item_1',
                additionalAction: {
                    name: 'Additional Action',
                    route: '/second-level-item_1/additional'
                }
            },
            {
                name: 'GroupName',
                children: [
                    {
                        name: 'Three Level Item 1',
                        route: '/second-level-item_1'
                    },
                    {
                        name: 'Three Level Item 2',
                        route: '/second-level-item_2'
                    }
                ]
            },
            {
                name: 'Second Level Item 2',
                route: '/second-level-item_2'
            }
        ]
    },
    {
        icon: 'icon-name-3',
        name: 'External Target New',
        routeConfigurations: {
            href: 'http://www.test.com',
            target: '_blank'
        }
    }
];

const SIDEBAR_CONFIGURATION_MOCK: SidebarConfiguration = {
    menuItems: [...MENU_ITEMS_MOCK],
    user: {
        name: 'Justine Robinson',
        email: 'justineR@ironsrc.com'
    }
};

describe('SidebarComponent', () => {
    let component: SidebarComponent;
    let fixture: ComponentFixture<SidebarComponent>;

    const createComponent = (configuration?: SidebarConfiguration) => {
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        if (configuration) {
            component.configuration = configuration;
        }

        fixture.detectChanges();
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SidebarComponent],
            imports: [RouterTestingModule, IconModule, SidebarMenuModule],
            providers: [SidebarMenuService]
        }).compileComponents();
    });

    it('should create', () => {
        createComponent();
        expect(component).toBeTruthy();
    });

    describe('Dom elements render', () => {
        it('should render base element', () => {
            createComponent();
            const selfHolder = fixture.debugElement.query(By.css('.fu-sidebar'));
            expect(selfHolder).toBeTruthy();
        });

        it('base element should not have any additional classes', () => {
            createComponent();
            const selfHolder = fixture.debugElement.query(By.css('.fu-sidebar'));
            expect(selfHolder).toBeTruthy();
            expect(selfHolder.nativeElement.classList.length).toEqual(1);
        });

        it('should render logo holder with logo', () => {
            createComponent();
            const logoHolder = fixture.debugElement.query(By.css('.fu-sidebar .fu-sidebar-logo-holder'));
            expect(logoHolder).toBeTruthy();
            expect(logoHolder.nativeElement.querySelector('.fu-sidebar-logo')).toBeTruthy();
        });

        it('should render menu holder with sidebar menu component', () => {
            createComponent();
            const menuHolder = fixture.debugElement.query(By.css('.fu-sidebar .fu-sidebar-menu-holder'));
            expect(menuHolder).toBeTruthy();
            expect(menuHolder.nativeElement.querySelector('fusion-sidebar-menu')).toBeTruthy();
        });

        it('should render user data holder', () => {
            createComponent(SIDEBAR_CONFIGURATION_MOCK);

            const userDataHolder = fixture.debugElement.query(By.css('.fu-sidebar .fu-sidebar-user-data'));

            expect(userDataHolder).toBeTruthy();

            expect(userDataHolder.nativeElement.querySelector('.fu-sidebar-user-name')).toBeTruthy();
            expect(userDataHolder.nativeElement.querySelector('.fu-sidebar-user-name').innerText).toEqual(
                SIDEBAR_CONFIGURATION_MOCK.user.name
            );
            expect(userDataHolder.nativeElement.querySelector('.fu-sidebar-user-email')).toBeTruthy();
            expect(userDataHolder.nativeElement.querySelector('.fu-sidebar-user-email').innerText).toEqual(
                SIDEBAR_CONFIGURATION_MOCK.user.email
            );
            expect(userDataHolder.nativeElement.querySelector('.fu-sidebar-user-logout-icon')).toBeTruthy();
            expect(userDataHolder.nativeElement.querySelector('.fu-sidebar-user-logout-icon').classList).toContain('logout');
        });
    });

    describe('Events emitters', () => {
        it('should emit event "logoutIconClicked" by click on logout icon ', () => {
            createComponent(SIDEBAR_CONFIGURATION_MOCK);

            const logoutIcon = fixture.debugElement.query(By.css('.fu-sidebar .fu-sidebar-user-data .fu-sidebar-user-logout-icon'));

            spyOn(component.logoutIconClicked, 'emit');

            logoutIcon.nativeElement.click();
            expect(component.logoutIconClicked.emit).toHaveBeenCalledWith(SIDEBAR_CONFIGURATION_MOCK.user);
        });

        it('should emit event "sidebarOpenChange" on init ', () => {
            createComponent(SIDEBAR_CONFIGURATION_MOCK);
            spyOn(component.sidebarOpenChange, 'emit');
            component.ngOnInit();
            expect(component.sidebarOpenChange.emit).toHaveBeenCalled();
        });

        it('should emit event "sidebarMenuItemClicked" by onMenuItemClicked()', () => {
            createComponent(SIDEBAR_CONFIGURATION_MOCK);
            spyOn(component.sidebarMenuItemClicked, 'emit');
            component.onMenuItemClicked(SIDEBAR_CONFIGURATION_MOCK.menuItems[0]);
            expect(component.sidebarMenuItemClicked.emit).toHaveBeenCalledWith(SIDEBAR_CONFIGURATION_MOCK.menuItems[0]);
        });

        it('should emit event "navigationEnded" by onNavigationEnded()', () => {
            createComponent(SIDEBAR_CONFIGURATION_MOCK);
            spyOn(component.navigationEnded, 'emit');
            component.onNavigationEnded();
            expect(component.navigationEnded.emit).toHaveBeenCalled();
        });
    });
});

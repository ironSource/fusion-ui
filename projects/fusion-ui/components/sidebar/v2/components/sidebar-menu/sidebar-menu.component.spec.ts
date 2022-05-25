import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SidebarMenuComponent} from './sidebar-menu.component';
import {SidebarMenuService} from '@ironsource/fusion-ui/components/sidebar/common/services';
import {RouterTestingModule} from '@angular/router/testing';
import {SidebarMenuItem} from '@ironsource/fusion-ui/components/sidebar/common/entities';
import {By} from '@angular/platform-browser';
import {IconModule} from '@ironsource/fusion-ui/components/icon';

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

describe('SidebarMenuComponent', () => {
    let component: SidebarMenuComponent;
    let fixture: ComponentFixture<SidebarMenuComponent>;

    const createComponent = (menuItems?: SidebarMenuItem[]) => {
        fixture = TestBed.createComponent(SidebarMenuComponent);
        component = fixture.componentInstance;
        if (menuItems) {
            component.menuItems = menuItems;
        }
        fixture.detectChanges();
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SidebarMenuComponent],
            imports: [RouterTestingModule, IconModule],
            providers: [SidebarMenuService]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarMenuComponent);
        component = fixture.componentInstance;
        // set selected menu item
        component.openedMenuItem$.next(MENU_ITEMS_MOCK[1]);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Dom elements render', () => {
        it('should not binding menu items if they not set if data not set', () => {
            createComponent();
            const menuRootEl = fixture.debugElement.query(By.css('.fu-sidebar-menu'));
            expect(menuRootEl).toBeTruthy();
            expect(menuRootEl.nativeElement.innerHTML).toBe('<!--bindings={}-->');
        });

        it('should render menu root items holder (first level menu items)', () => {
            createComponent([...MENU_ITEMS_MOCK]);
            const menuRootEl = fixture.debugElement.query(By.css('.fu-sidebar-menu'));
            const menuItemEls = menuRootEl.nativeElement.querySelectorAll('.fu-sidebar-menu-item-holder');
            expect(menuItemEls.length).toBe(MENU_ITEMS_MOCK.length);
        });

        it('should render menu root items with icon, text and sub items for group', () => {
            createComponent([...MENU_ITEMS_MOCK]);
            const menuRootEl = fixture.debugElement.query(By.css('.fu-sidebar-menu'));
            const menuItemEls = menuRootEl.nativeElement.querySelectorAll('.fu-sidebar-menu-item-holder');

            menuItemEls.forEach((menuItemHolder, idx) => {
                const menuItemEl = menuItemHolder.querySelector('.fu-sidebar-menu-item');
                expect(menuItemEl).toBeTruthy();

                // check for menu item icon
                const menuItemIconEl = menuItemEl.querySelector('fusion-icon.fu-sidebar-menu-item-icon');
                expect(menuItemIconEl).toBeTruthy();
                expect(menuItemIconEl.classList).toContain(MENU_ITEMS_MOCK[idx].icon);

                // check for  menu item text
                expect(menuItemEl.querySelector('.fu-sidebar-menu-item-text').innerText).toBe(MENU_ITEMS_MOCK[idx].name);

                // check for menu item open / close icon if has children (second menu items level)
                if (MENU_ITEMS_MOCK[idx].children) {
                    const menuItemOpenIconEl = menuItemEl.querySelector('.fu-sidebar-menu-item-arrow');
                    expect(menuItemOpenIconEl).toBeTruthy();
                    expect(menuItemOpenIconEl.tagName.toLowerCase()).toBe('fusion-icon');
                    expect(menuItemOpenIconEl.classList).toContain('arrow-right');
                }

                // check menu item with link has target
                if (MENU_ITEMS_MOCK[idx].routeConfigurations) {
                    expect(menuItemEl.tagName.toLowerCase()).toBe('a');
                    expect(menuItemEl.getAttribute('href')).toBe(MENU_ITEMS_MOCK[idx].routeConfigurations.href);
                    expect(menuItemEl.getAttribute('target')).toBe(MENU_ITEMS_MOCK[idx].routeConfigurations.target);
                }
            });
        });

        it('should render sub menu items with text, additional action, subgroup if any', () => {
            createComponent([...MENU_ITEMS_MOCK]);
            const menuRootEl = fixture.debugElement.query(By.css('.fu-sidebar-menu'));

            MENU_ITEMS_MOCK.forEach((menuRootItem, idx) => {
                if (menuRootItem.children) {
                    const menuSubItemsHolderEl = menuRootEl.nativeElement
                        .querySelectorAll('.fu-sidebar-menu-item-holder')
                        [idx].querySelector('.fu-sidebar-menu-sub-items-holder');
                    expect(menuSubItemsHolderEl).toBeTruthy();

                    menuRootItem.children.forEach((childMenuItem, i) => {
                        // check for additional action
                        if (childMenuItem.additionalAction) {
                            expect(menuSubItemsHolderEl.querySelectorAll('.fu-sidebar-menu-item')[i].innerText).toContain(
                                childMenuItem.name
                            );
                            expect(menuSubItemsHolderEl.querySelector('.fu-sidebar-menu-sub-item-additional').innerText).toBe(
                                childMenuItem.additionalAction.name
                            );
                        }

                        // check for sub-group
                        if (childMenuItem.children) {
                            const menuItemSubgroupEl = menuSubItemsHolderEl.querySelector('.fu-sidebar-menu-sub-item-title');
                            // group name (uppercase by style)
                            expect(menuItemSubgroupEl.innerText).toBe(childMenuItem.name.toUpperCase());
                            // child items
                            const menuSubgroupChildrenEls = menuSubItemsHolderEl.querySelectorAll(
                                '.fu-sidebar-menu-item.fu-sidebar-menu-sub-child'
                            );
                            expect(menuSubgroupChildrenEls.length).toBe(childMenuItem.children.length);
                            menuSubgroupChildrenEls.forEach((menuSubgroupChildEl, index) => {
                                expect(menuSubgroupChildEl.innerText).toBe(childMenuItem.children[index].name);
                            });
                        }

                        // check for regular child
                        if (!childMenuItem.additionalAction && !childMenuItem.children) {
                            // validate inner text
                            expect(
                                menuSubItemsHolderEl.querySelector('.fu-sidebar-menu-sub-item-holder:last-child .fu-sidebar-menu-item')
                                    .innerText
                            ).toBe(childMenuItem.name);
                        }
                    });
                }
            });
        });
    });

    describe('Event emitters', () => {
        it('should emit event "menuItemClicked" by menu item click ', () => {
            createComponent([...MENU_ITEMS_MOCK]);
            spyOn(component.menuItemClicked, 'emit');
            const menuRootEl = fixture.debugElement.query(By.css('.fu-sidebar-menu'));
            const menuItemEls = menuRootEl.nativeElement.querySelector('.fu-sidebar-menu-item-holder .fu-sidebar-menu-item');
            menuItemEls.click();
            expect(component.menuItemClicked.emit).toHaveBeenCalledWith(MENU_ITEMS_MOCK[0]);
        });

        it('should emit event "menuItemClicked" by sub item menu item click ', () => {
            createComponent([...MENU_ITEMS_MOCK]);
            spyOn(component.menuItemClicked, 'emit');

            const menuRootEl = fixture.debugElement.query(By.css('.fu-sidebar-menu'));
            const menuItemEl = menuRootEl.nativeElement.querySelector(
                '.fu-sidebar-menu-item-holder .fu-sidebar-menu-sub-items-holder .fu-sidebar-menu-item'
            );
            menuItemEl.click();
            expect(component.menuItemClicked.emit).toHaveBeenCalledWith(MENU_ITEMS_MOCK[1].children[0]);
        });

        it('should emit event "menuItemClicked" by additional item menu item click ', () => {
            createComponent([...MENU_ITEMS_MOCK]);
            spyOn(component.menuItemClicked, 'emit');

            const menuRootEl = fixture.debugElement.query(By.css('.fu-sidebar-menu'));

            const menuItemEl = menuRootEl.nativeElement.querySelector(
                '.fu-sidebar-menu-item-holder .fu-sidebar-menu-sub-items-holder .fu-sidebar-menu-sub-item-holder .fu-sidebar-menu-sub-item-additional'
            );

            menuItemEl.click();

            expect(component.menuItemClicked.emit).toHaveBeenCalledWith(MENU_ITEMS_MOCK[1].children[0].additionalAction);
        });

        it('should emit event "menuItemClicked" by sub-sub item menu item click ', () => {
            createComponent([...MENU_ITEMS_MOCK]);
            spyOn(component.menuItemClicked, 'emit');
            const menuRootEl = fixture.debugElement.query(By.css('.fu-sidebar-menu'));
            const menuItemEl = menuRootEl.nativeElement
                .querySelectorAll('.fu-sidebar-menu-item-holder')[1]
                .querySelector(
                    '.fu-sidebar-menu-item-holder .fu-sidebar-menu-sub-items-holder .fu-sidebar-menu-item.fu-sidebar-menu-sub-child'
                );
            menuItemEl.click();
            expect(component.menuItemClicked.emit).toHaveBeenCalledWith(MENU_ITEMS_MOCK[1].children[1].children[0]);
        });
    });
});

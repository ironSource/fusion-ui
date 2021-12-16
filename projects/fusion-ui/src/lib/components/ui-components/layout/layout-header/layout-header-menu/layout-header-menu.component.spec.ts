import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LayoutHeaderMenuComponent} from './layout-header-menu.component';
import {IconModule} from '../../../icon/icon.module';
import {DynamicComponentsModule} from '../../../dynamic-components/dynamic-components.module';
import {LayoutHeaderMenuConfiguration} from './layout-header-menu-entity';
import {By} from '@angular/platform-browser';

const CONFIGURATION_MOCK: LayoutHeaderMenuConfiguration = {
    user: {
        icon: 'user-icon',
        name: 'Justine Robinson with long name',
        email: 'justineR@ironsrc.com'
    },
    menuItems: [
        {
            icon: 'menuitem-icon',
            name: 'menuitem-name',
            route: 'menuitem-route'
        },
        {
            icon: 'menuitem-icon',
            name: 'menuitem-name',
            routeConfigurations: {href: 'https://www.google.com/', target: '_blank'}
        },
        {
            content: {
                htmlSnippet: `<div style="width: 100%; border: solid 1px red;">CUSTOM HTML SNIPPET</div>`
            }
        }
    ]
};

describe('LayoutHeaderMenuComponent', () => {
    let component: LayoutHeaderMenuComponent;
    let fixture: ComponentFixture<LayoutHeaderMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LayoutHeaderMenuComponent],
            imports: [IconModule, DynamicComponentsModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutHeaderMenuComponent);
        component = fixture.componentInstance;
        component.configuration = CONFIGURATION_MOCK;
        fixture.detectChanges();
        spyOn(component.layoutHeaderMenuItemClicked, 'emit');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Dom elements render', () => {
        it('should render menu holder', () => {
            const headerMenuHolderElement = fixture.debugElement.query(By.css('.fu-layout-header-menu-holder'));
            expect(headerMenuHolderElement).toBeTruthy();
        });

        it('should render users data in menu holder', () => {
            const headerMenuUserElement = fixture.debugElement.query(By.css('.fu-layout-header-menu-holder .fu-layout-header-menu-user'));
            expect(headerMenuUserElement).toBeTruthy();
            expect(headerMenuUserElement.nativeElement.classList).toContain('fu-layout-header-menu-delimiter');

            expect(headerMenuUserElement.query(By.css('.fu-layout-header-menu-user-name')).nativeElement.innerText).toBe(
                CONFIGURATION_MOCK.user.name
            );
            expect(headerMenuUserElement.query(By.css('.fu-layout-header-menu-user-email')).nativeElement.innerText).toBe(
                CONFIGURATION_MOCK.user.email
            );
        });

        it('should render menu-items in menu holder', () => {
            const headerMenuUserElement = fixture.debugElement.query(By.css('.fu-layout-header-menu-holder'));

            const menuItemsElements = headerMenuUserElement.queryAll(By.css('.fu-layout-header-menu-item'));
            const menuItemsData = CONFIGURATION_MOCK.menuItems.filter(item => !item.content);
            expect(menuItemsElements.length).toBe(menuItemsData.length);
            menuItemsElements.forEach((menuitem, idx) => {
                if (menuItemsData[idx].route) {
                    expect(menuitem.query(By.css('fusion-icon.fu-layout-header-menu-item-icon')).nativeElement.classList).toContain(
                        menuItemsData[idx].icon
                    );
                    expect(menuitem.query(By.css('.fu-layout-header-menu-item-text')).nativeElement.innerText).toContain(
                        menuItemsData[idx].name
                    );
                } else if (menuItemsData[idx].routeConfigurations) {
                    expect(menuitem.nativeElement.tagName).toBe('A');
                    expect(menuitem.nativeElement.getAttribute('href')).toBe(menuItemsData[idx].routeConfigurations.href);
                    expect(menuitem.nativeElement.getAttribute('target')).toBe(menuItemsData[idx].routeConfigurations.target);
                    expect(menuitem.query(By.css('fusion-icon.fu-layout-header-menu-item-icon')).nativeElement.classList).toContain(
                        menuItemsData[idx].icon
                    );
                    expect(menuitem.query(By.css('.fu-layout-header-menu-item-text')).nativeElement.innerText).toContain(
                        menuItemsData[idx].name
                    );
                }
            });
            const menuItemsCustomElements = headerMenuUserElement.queryAll(By.css('.fu-layout-header-menu-item-content'));
            const menuitemCustomData = CONFIGURATION_MOCK.menuItems.filter(item => item.content);
            expect(menuItemsCustomElements.length).toBe(menuitemCustomData.length);
            menuItemsCustomElements.forEach((menuitem, idx) => {
                expect(menuitem.nativeElement.tagName.toLowerCase()).toBe('fusion-dynamic-components');
                expect(menuitem.nativeElement.classList).toContain('fu-layout-header-menu-item-content');
                expect(menuitem.query(By.css('div')).nativeElement.innerHTML).toBe(menuitemCustomData[idx].content.htmlSnippet);
            });
        });
    });

    describe('Events emitters', () => {
        it('should call event on menu item clicked', () => {
            const headerMenuUserElement = fixture.debugElement.query(By.css('.fu-layout-header-menu-holder'));
            const menuItemsElements = headerMenuUserElement.queryAll(By.css('.fu-layout-header-menu-item'));
            const menuItemsData = CONFIGURATION_MOCK.menuItems.filter(item => !item.content);

            menuItemsElements.forEach((menuitem, idx) => {
                if (menuItemsData[idx].route) {
                    // validate click event emit
                    menuitem.nativeElement.click();
                    expect(component.layoutHeaderMenuItemClicked.emit).toHaveBeenCalledWith(menuItemsData[idx]);
                }
            });
        });
    });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutHeaderComponent} from './layout-header.component';
import {IconModule} from '../../icon/icon.module';
import {By} from '@angular/platform-browser';
import {DynamicComponentsModule} from '../../dynamic-components/dynamic-components.module';
import {LayoutHeaderMenuModule} from './layout-header-menu/layout-header-menu.module';

const HEADER_CONFIGURATION_MOCK = {
    title: {text: 'Header Title'},
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
        }
    ],
    content: {
        htmlSnippet: `<div style="width: 100%; border: solid 1px red;">CUSTOM HTML SNIPPET</div>`
    }
};

describe('LayoutHeaderModuleComponent', () => {
    let component: LayoutHeaderComponent;
    let fixture: ComponentFixture<LayoutHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LayoutHeaderComponent],
            imports: [IconModule, DynamicComponentsModule, LayoutHeaderMenuModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutHeaderComponent);
        component = fixture.componentInstance;
        component.configuration = HEADER_CONFIGURATION_MOCK;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Dom elements render', () => {
        it('should render base header elements', () => {
            expect(fixture.debugElement.query(By.css('.fu-header'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('.fu-header .fu-header-sidebar-state-icon'))).toBeTruthy();
            const sidebarToggleIcon = fixture.debugElement.query(By.css('.fu-header .fu-header-sidebar-state-icon fusion-icon'));
            expect(sidebarToggleIcon).toBeTruthy();
            expect(sidebarToggleIcon.nativeElement.classList).toContain('menu-hamburger');
        });

        it('should render Title', () => {
            const titleElement = fixture.debugElement.query(By.css('.fu-header .fu-header-title'));
            expect(titleElement).toBeTruthy();
            expect(titleElement.nativeElement.innerText).toBe(HEADER_CONFIGURATION_MOCK.title.text);
        });

        it('should render Custom element right from title', () => {
            const customHolderElement = fixture.debugElement.query(By.css('.fu-header .fu-header-custom-element-holder'));
            expect(customHolderElement).toBeTruthy();
            const dynamicComponentElement = customHolderElement.query(By.css('fusion-dynamic-components'));
            expect(dynamicComponentElement).toBeTruthy();
            expect(dynamicComponentElement.query(By.css('div')).nativeElement.innerHTML).toBe(
                HEADER_CONFIGURATION_MOCK.content.htmlSnippet
            );
        });

        it('should render Right panel with user and icon-more element ', () => {
            const rightSideElement = fixture.debugElement.query(By.css('.fu-header .fu-header-right-panel'));
            expect(rightSideElement).toBeTruthy();

            expect(rightSideElement.query(By.css('.fu-header-user-holder'))).toBeTruthy();
            expect(rightSideElement.query(By.css('.fu-header-user-holder fusion-icon'))).toBeTruthy();
            expect(
                rightSideElement.query(By.css('.fu-header-user-holder fusion-icon.fu-header-icon-user')).nativeElement.classList
            ).toContain('user-icon');
            expect(rightSideElement.query(By.css('.fu-header-user-holder .fu-header-username'))).toBeTruthy();
            expect(rightSideElement.query(By.css('.fu-header-user-holder .fu-header-username')).nativeElement.innerText).toBe(
                HEADER_CONFIGURATION_MOCK.user.name
            );

            expect(rightSideElement.query(By.css('.fu-header-icon-more-holder'))).toBeTruthy();
            expect(rightSideElement.query(By.css('.fu-header-icon-more-holder fusion-icon')).nativeElement.classList).toContain(
                'fu-header-icon-more'
            );
            expect(rightSideElement.query(By.css('.fu-header-icon-more-holder fusion-icon')).nativeElement.classList).toContain('more');
        });

        it('should render menu holder', () => {
            expect(fixture.debugElement.query(By.css('fusion-layout-header-menu'))).toBeTruthy();
        });
    });

    describe('Events emitters', () => {
        it('should emit event "sidebarToggleIconClicked" on icon (hamburger) clicked ', () => {
            const sidebarStateIconEl = fixture.debugElement.query(By.css('.fu-header .fu-header-sidebar-state-icon')).nativeElement;
            spyOn(component.sidebarToggleIconClicked, 'emit');
            sidebarStateIconEl.click();
            expect(component.sidebarToggleIconClicked.emit).toHaveBeenCalled();
        });

        it('should emit event "layoutHeaderMenuItemClicked" on onLayoutHeaderMenuItemClicked() ', () => {
            spyOn(component.layoutHeaderMenuItemClicked, 'emit');
            component.onLayoutHeaderMenuItemClicked(HEADER_CONFIGURATION_MOCK.menuItems[0]);
            expect(component.layoutHeaderMenuItemClicked.emit).toHaveBeenCalledWith(HEADER_CONFIGURATION_MOCK.menuItems[0]);
        });
    });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LayoutComponent} from './layout.component';
import {By} from '@angular/platform-browser';
import {LayoutHeaderModule} from './components/layout-header/layout-header.module';
import {RouterTestingModule} from '@angular/router/testing';
import {SidebarModule} from '@ironsource/fusion-ui/components/sidebar';
import {LayoutComponentConfiguration} from './layout.entity';
import {LayoutHeaderContentTitle} from './components/layout-header/layout-header-entity';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';

const MENUITEM_MOCK = {
    name: 'Menu Item'
};

const USER_MOCK = {
    name: 'Justine Robinson',
    email: 'justineR@ironsrc.com'
};

describe('LayoutComponent', () => {
    let component: LayoutComponent;
    let fixture: ComponentFixture<LayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LayoutComponent],
            imports: [RouterTestingModule, SidebarModule, LayoutHeaderModule, DynamicComponentsModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Dom elements render', () => {
        it('should render layout element', () => {
            expect(fixture.debugElement.query(By.css('.fu-layout'))).toBeTruthy();
        });
        it('should render sidebar elements', () => {
            const sidebarElement = fixture.debugElement.query(By.css('.fu-layout .fu-sidebar-holder'));
            expect(sidebarElement).toBeTruthy();
        });
        it('should render header element', () => {
            const headerHolderElement = fixture.debugElement.query(By.css('.fu-layout .fu-header-holder'));
            expect(headerHolderElement).toBeTruthy();
            expect(headerHolderElement.query(By.css('fusion-layout-header'))).toBeTruthy();
        });
    });

    describe('Dom elements render for page header behaviour', () => {
        const setComponentConfig = (config: LayoutComponentConfiguration) => {
            component.configuration = config;
            fixture.detectChanges();
        };

        const pageTitleTypeStaticMock: LayoutHeaderContentTitle = {text: 'static title'};
        const pageTitleTypePageMock: LayoutHeaderContentTitle = {
            text: 'page title',
            type: 'page',
            content: {htmlSnippet: '<div class="page-header-content">page header content</div>'}
        };
        const pageTitleTypeFixedMock: LayoutHeaderContentTitle = {
            text: 'page title',
            type: 'fixed',
            content: {htmlSnippet: '<div class="page-header-content">flex header content</div>'}
        };

        describe('Dom elements render for page header behaviour not set', () => {
            it('should render layout page with behaviour type "none" element if it was not set ', () => {
                setComponentConfig({
                    sidebarMenuItems: [MENUITEM_MOCK],
                    user: USER_MOCK
                });
                const layoutEl = fixture.debugElement.nativeElement.querySelector('.fu-layout');
                expect(layoutEl).toBeTruthy();
                expect(layoutEl.classList).toContain('fu-layout-page-header-behaviour-type_none');
            });
            it('should NOT render in layout page main content element for page header if it was not set ', () => {
                setComponentConfig({
                    sidebarMenuItems: [MENUITEM_MOCK],
                    user: USER_MOCK
                });
                const layoutContentHolderEl = fixture.debugElement.nativeElement.querySelector('.fu-layout .fu-content-holder');
                expect(layoutContentHolderEl).toBeTruthy();
                expect(layoutContentHolderEl.querySelector('.fu-layout-page-header')).not.toBeTruthy();
            });
        });

        describe('Dom elements render for page header behaviour "static"', () => {
            it('should render layout page header with behaviour type "static" for text only set in title (by default)', () => {
                setComponentConfig({
                    headerConfiguration: {
                        title: pageTitleTypeStaticMock
                    }
                });
                const layoutEl = fixture.debugElement.nativeElement.querySelector('.fu-layout');
                expect(layoutEl).toBeTruthy();
                expect(layoutEl.classList).toContain('fu-layout-page-header-behaviour-type_static');
            });
            it('should NOT render in layout page main content element for page header if behaviour "static"', () => {
                setComponentConfig({
                    headerConfiguration: {
                        title: pageTitleTypeStaticMock
                    }
                });
                const layoutContentHolderEl = fixture.debugElement.nativeElement.querySelector('.fu-layout .fu-content-holder');
                expect(layoutContentHolderEl).toBeTruthy();
                expect(layoutContentHolderEl.querySelector('.fu-layout-page-header')).not.toBeTruthy();
            });
            it('should render in layout page header element for title with text if behaviour "static"', () => {
                setComponentConfig({
                    headerConfiguration: {
                        title: pageTitleTypeStaticMock
                    }
                });
                const layoutHeaderHolderEl = fixture.debugElement.nativeElement.querySelector('.fu-layout .fu-header-holder');
                expect(layoutHeaderHolderEl).toBeTruthy();
                expect(layoutHeaderHolderEl.querySelector('.fu-header-title-text').innerText).toEqual(pageTitleTypeStaticMock.text);
            });
        });

        describe('Dom elements render for page header behaviour "page"', () => {
            it('should render layout page header with behaviour type "page" for type: "page"', () => {
                setComponentConfig({
                    headerConfiguration: {
                        title: pageTitleTypePageMock
                    }
                });
                const layoutEl = fixture.debugElement.nativeElement.querySelector('.fu-layout');
                expect(layoutEl).toBeTruthy();
                expect(layoutEl.classList).toContain('fu-layout-page-header-behaviour-type_page');
            });
            it('should render layout header with title text fro type "page"', () => {
                setComponentConfig({
                    headerConfiguration: {
                        title: pageTitleTypePageMock
                    }
                });

                const layoutHeaderHolderEl = fixture.debugElement.nativeElement.querySelector('.fu-layout .fu-header-holder');
                expect(layoutHeaderHolderEl).toBeTruthy();
                expect(layoutHeaderHolderEl.querySelector('.fu-header-title-text').innerText).toEqual(pageTitleTypePageMock.text);
            });
            it('should render layout content header with page title holder with text and for type "page"', () => {
                setComponentConfig({
                    headerConfiguration: {
                        title: pageTitleTypePageMock
                    }
                });
                const layoutContentHolderEl = fixture.debugElement.nativeElement.querySelector('.fu-layout .fu-content-holder');
                expect(layoutContentHolderEl.querySelector('.fu-layout-page-header')).toBeTruthy();
                expect(layoutContentHolderEl.querySelector('.fu-layout-page-header .fu-layout-page-header-title').innerText).toEqual(
                    pageTitleTypePageMock.text
                );
            });
            it('should render layout content header with with content style for "page" behaviour', () => {
                setComponentConfig({
                    headerConfiguration: {
                        title: pageTitleTypePageMock
                    }
                });
                const layoutContentHolderEl = fixture.debugElement.nativeElement.querySelector('.fu-layout .fu-content-holder');
                expect(
                    layoutContentHolderEl.querySelector(
                        '.fu-layout-page-header .fu-layout-page-header-content fusion-dynamic-components div'
                    ).innerHTML
                ).toEqual(pageTitleTypePageMock.content.htmlSnippet);

                const pageTitleContentStyle = window.getComputedStyle(
                    layoutContentHolderEl.querySelector('.fu-layout-page-header .fu-layout-page-header-content')
                );
                expect(pageTitleContentStyle.position).toEqual('static');
            });
        });

        describe('Dom elements render for page header behaviour "fixed"', () => {
            it('should render layout page header with behaviour type "fixed" for type: "fixed"', () => {
                setComponentConfig({
                    headerConfiguration: {
                        title: pageTitleTypeFixedMock
                    }
                });
                const layoutEl = fixture.debugElement.nativeElement.querySelector('.fu-layout');
                expect(layoutEl).toBeTruthy();
                expect(layoutEl.classList).toContain('fu-layout-page-header-behaviour-type_fixed');
            });
            it('should render layout header with title text for type "fixed"', () => {
                setComponentConfig({
                    headerConfiguration: {
                        title: pageTitleTypeFixedMock
                    }
                });

                const layoutHeaderHolderEl = fixture.debugElement.nativeElement.querySelector('.fu-layout .fu-header-holder');
                expect(layoutHeaderHolderEl).toBeTruthy();
                expect(layoutHeaderHolderEl.querySelector('.fu-header-title-text').innerText).toEqual(pageTitleTypeFixedMock.text);
            });
            it('should render layout content header with page title holder with text for type "fixed"', () => {
                setComponentConfig({
                    headerConfiguration: {
                        title: pageTitleTypeFixedMock
                    }
                });
                const layoutContentHolderEl = fixture.debugElement.nativeElement.querySelector('.fu-layout .fu-content-holder');

                expect(layoutContentHolderEl.querySelector('.fu-layout-page-header')).toBeTruthy();
                expect(layoutContentHolderEl.querySelector('.fu-layout-page-header .fu-layout-page-header-title').innerText).toEqual(
                    pageTitleTypeFixedMock.text
                );
            });
            it('should render layout content header with with content style for "fixed" behaviour', () => {
                setComponentConfig({
                    headerConfiguration: {
                        title: pageTitleTypeFixedMock
                    }
                });
                const layoutContentHolderEl = fixture.debugElement.nativeElement.querySelector('.fu-layout .fu-content-holder');
                expect(
                    layoutContentHolderEl.querySelector(
                        '.fu-layout-page-header .fu-layout-page-header-content fusion-dynamic-components div'
                    ).innerHTML
                ).toEqual(pageTitleTypeFixedMock.content.htmlSnippet);

                const pageTitleContentStyle = window.getComputedStyle(
                    layoutContentHolderEl.querySelector('.fu-layout-page-header .fu-layout-page-header-content')
                );
                expect(pageTitleContentStyle.position).toEqual('fixed');
            });
        });
    });

    describe('Events emitters', () => {
        it('should emit event "menuSidebarItemClicked" on onSidebarMenuItemClicked() ', () => {
            spyOn(component.menuSidebarItemClicked, 'emit');
            component.onSidebarMenuItemClicked(MENUITEM_MOCK);
            expect(component.menuSidebarItemClicked.emit).toHaveBeenCalledWith(MENUITEM_MOCK);
        });
        it('should emit event "menuHeaderItemClicked" on onHeaderMenuItemClicked() ', () => {
            spyOn(component.menuHeaderItemClicked, 'emit');
            component.onHeaderMenuItemClicked(MENUITEM_MOCK);
            expect(component.menuHeaderItemClicked.emit).toHaveBeenCalledWith(MENUITEM_MOCK);
        });
        it('should emit event "userLogout" on onLogoutIconClicked() ', () => {
            spyOn(component.userLogout, 'emit');
            component.onLogoutIconClicked(USER_MOCK);
            expect(component.userLogout.emit).toHaveBeenCalledWith(USER_MOCK);
        });
    });
});

import {Component, OnDestroy, OnInit, Type} from '@angular/core';
import {SidebarMenuItem} from '@ironsource/fusion-ui/components/sidebar/common/entities';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {HeaderState} from '@ironsource/fusion-ui/components/header/common/base';
import {MENU_ITEMS, MENU_ITEMS_V2, STYLE_2_MENU_ITEMS, USER_PROFILE_MENU_ITEMS} from './menu-items';
import {StyleVersionButtonComponent} from '../../components/style-version-button/style-version-button.component';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {DocsLayoutService} from './docs-layout.service';
import {VersionService} from '../../services/version/version.service';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {LayoutComponentConfiguration, LayoutHeaderComponentConfiguration} from '@ironsource/fusion-ui/components/layout/v2';

import {NAVIGATION_MENU_MOCK} from '@ironsource/fusion-ui/components/navigation-menu/v4/stories/navigation-menu.mock';
import {HeaderContent, LayoutConfiguration} from '@ironsource/fusion-ui/components/layout/v4/layout.entities';
import {TopFilterIncludeExcludeComponent} from '@ironsource/fusion-ui/components/top-filter-include-exclude';
import {FormControl} from '@angular/forms';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {MOK_APPLICATIONS_ONE_LINE_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';

@Component({
    selector: 'fusion-docs',
    templateUrl: './docs.component.html',
    styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit, OnDestroy {
    useNewLayout = false; // switch to new layout
    useLayoutName = 'layoutV4'; // 'layoutV1', 'layoutV2', 'layoutV4'
    menuItems: MenuItem[] | SidebarMenuItem[] = this.useNewLayout ? MENU_ITEMS_V2 : MENU_ITEMS;

    // region for layout-v1 v1
    isLightTheme = false;

    userProfileMenuItems: MenuItem[] = USER_PROFILE_MENU_ITEMS;
    helpMenuItems: MenuItem[] = [];
    commonState: HeaderState = {
        title: 'Analysis',
        subtitle: 'Updated 7 hours ago',
        /*actionComponent: StyleVersionButtonComponent,*/
        actionData: null
    };
    // endregion

    // region for layout "v2"
    layoutConfiguration$ = this.docsLayoutService.layoutConfig$;
    // endregion

    // region for layout "v4"
    appSelectFormControl = new FormControl(MOK_APPLICATIONS_ONE_LINE_OPTIONS.slice(1, 5)) as FormControl<DropdownOption[]>;
    headerContent: HeaderContent = {
        title: 'Dashboard'
        /*
        actionComponent: TopFilterIncludeExcludeComponent,
        actionData: {
            placeholder: 'Select application',
            formControl: this.appSelectFormControl,
            title: 'Applications',
            items: MOK_APPLICATIONS_ONE_LINE_OPTIONS
        }
*/
    };
    layoutConfiguration: LayoutConfiguration = {
        navigationMenuItems: NAVIGATION_MENU_MOCK,
        layoutUser: {
            name: 'Jonny Kim',
            email: 'jonny.kim@supercell.com'
        }
    };
    // endregion

    placeholder = 'Select application';
    formControl = new FormControl(MOK_APPLICATIONS_ONE_LINE_OPTIONS.slice(1, 4));
    title = 'Applications';
    items = MOK_APPLICATIONS_ONE_LINE_OPTIONS;

    private onDestroy$ = new Subject<void>();
    private selectedVersion$ = this.versionService.styleVersion$;

    constructor(private router: Router, private versionService: VersionService, private docsLayoutService: DocsLayoutService) {}

    ngOnInit(): void {
        // region set layout "v2"
        this.setLayoutConfigurationObservable();
        // endregion

        this.formControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(val => {
            console.log('11111', val);
        });

        this.appSelectFormControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(val => {
            console.log(':::::', val);
        });

        this.selectedVersion$.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
            const menuItemsAll = JSON.parse(JSON.stringify(this.useNewLayout ? MENU_ITEMS_V2 : MENU_ITEMS));
            if (value === StyleVersion.V2 || value === StyleVersion.V3) {
                this.menuItems = menuItemsAll.filter(item => {
                    if (STYLE_2_MENU_ITEMS.includes(item.name)) {
                        return true;
                    }
                    if (Array.isArray(item.children)) {
                        item.children = item.children.filter(sub => {
                            return STYLE_2_MENU_ITEMS.includes(sub.name) || sub.route.indexOf('/v2/') !== -1;
                        });
                        if (item.children) {
                            return true;
                        }
                    }
                });
            } else {
                this.menuItems = menuItemsAll.filter(item => {
                    if (Array.isArray(item.children)) {
                        item.children = item.children.filter(sub => {
                            return sub.route.indexOf('/v2/') === -1;
                        });
                        if (item.children) {
                            return true;
                        }
                    } else {
                        return true;
                    }
                });
            }

            if (this.useNewLayout) {
                // region for layout "v2" set update in layout configuration for new layout
                // add subheader to menu just for test
                // @ts-ignore
                this.menuItems[1].children = this.menuItems[1].children.reduce(
                    (acc, item) => {
                        acc[0].children.push(item);
                        return acc;
                    },
                    [
                        {
                            name: 'Subheader',
                            children: []
                        }
                    ]
                );
            }

            this.docsLayoutService.updateLayoutConfig({sidebarMenuItems: this.menuItems});
            // endregion
        });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onSidebarMenuItemClicked(menuItem: SidebarMenuItem) {
        if (menuItem.route) {
            this.router.navigate([menuItem.route]).then(navigationSucceeds => {
                if (navigationSucceeds) {
                    // on navigation Ok
                }
            });
        }
    }

    onHeaderMenuItemClicked(menuItem: SidebarMenuItem) {
        if (menuItem.route) {
            this.router.navigate([menuItem.route]).then(navigationSucceeds => {
                if (navigationSucceeds) {
                    // on navigation  Ok
                }
            });
        } else if (menuItem.name === 'Theme toggle') {
            this.isLightTheme = !this.isLightTheme;
        }
    }

    headerClick(menuItem: MenuItem) {
        if (menuItem.redirect) {
            location.href = menuItem.redirect;
        }
    }

    onMenuItemClick(menuItem: MenuItem) {
        if (menuItem.route) {
            this.router
                .navigate([menuItem.route])
                .then(navigationSucceeds => {
                    if (navigationSucceeds) {
                        // on navigation Ok
                        console.log('onMenuItemClick>>> navigationSucceeds', navigationSucceeds);
                        this.headerContent = {...this.headerContent, title: menuItem.name};
                    }
                })
                .catch(err => {
                    console.log('onMenuItemClick>>> router error', err.message);
                });
        }

        // if (menuItem.redirect) {
        //     location.href = menuItem.redirect;
        // }
    }

    onLayoutUserLogout(user) {
        console.log('Layout 2 user logout: ', user);
        this.isLightTheme = !this.isLightTheme;
    }

    onNavigationEnd() {
        this.docsLayoutService.updateLayoutHeaderTitle(null);
    }

    onLogoClicked() {
        // navigate to default route
        this.router.navigate(['']);
    }

    private setLayoutConfigurationObservable(): void {
        const layoutHeader: LayoutHeaderComponentConfiguration = {
            content: {
                /*
                component: {
                    type: StyleVersionButtonComponent as Type<Component>
                }
*/
            },
            menuItems: [
                {
                    icon: {iconName: 'magic', iconVersion: 'v2'},
                    name: 'Theme toggle'
                },
                {
                    icon: {iconName: 'logout', iconVersion: 'v2'},
                    name: 'Sign out',
                    route: '/docs/components/v2/mobile-previewer'
                }
            ]
        };
        const layoutUser = {
            icon: {iconName: 'user-circle', iconVersion: 'v2'},
            name: 'Example Username',
            email: 'test@irontest.com'
        };

        const layoutConfiguration: LayoutComponentConfiguration = {
            headerConfiguration: layoutHeader,
            sidebarMenuItems: [],
            pathNameNormalizeRegex: /\/[a-zA-Z]{1}\d{1,2}\.\d{1,2}\.\d{1,3}/,
            user: layoutUser,
            logoClickable: true
        };
        this.docsLayoutService.setLayoutConfig(layoutConfiguration);
    }
}

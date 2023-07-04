import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {WindowService} from '@ironsource/fusion-ui/services/window';
import {NavigationMenuComponent, PrimaryMenuItem} from '@ironsource/fusion-ui/components/navigation-menu/v4';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {HeaderContent, LayoutConfiguration} from './layout.entities';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {LayoutHeaderComponent} from './components/layout-header/layout-header.component';

@Component({
    selector: 'fusion-layout',
    standalone: true,
    imports: [CommonModule, LayoutHeaderComponent, NavigationMenuComponent],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
    @Input() set configuration(value: LayoutConfiguration) {
        if (Array.isArray(value?.navigationMenuItems)) {
            this.navigationMenu$.next(value.navigationMenuItems);
        }
        this.layoutUser = {...value?.layoutUser} ?? null;
    }
    @Input() headerContent: HeaderContent;

    @Output() pageBackButtonClicked = new EventEmitter<MouseEvent>();
    @Output() menuItemClick = new EventEmitter<MenuItem>();

    @ViewChild('navigationMenu', {static: true}) navigationMenu: NavigationMenuComponent;

    /** @internal */
    navigationMenu$ = new BehaviorSubject<PrimaryMenuItem[]>([]);
    /** @internal */
    layoutUser: LayoutUser;

    constructor(private windowRef: WindowService) {}

    ngOnInit(): void {
        this.setSelectedMenuByPath(this.navigationMenu$.getValue());
    }

    private isActiveMenuItem(menuItem: MenuItem, currentPath: string): boolean {
        return (
            menuItem.route &&
            menuItem.route !== '/' &&
            (currentPath.startsWith(menuItem.route) || this.checkBySubRoutes(menuItem, currentPath))
        );
    }

    private checkBySubRoutes(item: MenuItem, route: string): boolean {
        if (Array.isArray(item.subRoutes)) {
            return item.subRoutes.some(subRoute => route.startsWith(subRoute));
        }
        return false;
    }

    private setSelectedMenuByPath(menuPrimary: PrimaryMenuItem[]) {
        const currentPath = this.windowRef.nativeWindow.location.pathname;
        let itemFound: MenuItem = null;
        let primaryItemFound: PrimaryMenuItem = null;
        if (menuPrimary.length) {
            menuPrimary.forEach((primaryMenuItem: PrimaryMenuItem) => {
                if (primaryMenuItem?.menuItems?.length && !itemFound) {
                    primaryMenuItem.menuItems.forEach((menuItem: MenuItem) => {
                        if (!itemFound) {
                            if (menuItem.children?.length) {
                                menuItem.children.forEach((childMenuItem: MenuItem) => {
                                    if (!itemFound && this.isActiveMenuItem(childMenuItem, currentPath)) {
                                        itemFound = childMenuItem;
                                        primaryItemFound = primaryMenuItem;
                                    }
                                });
                            } else if (menuItem.route && this.isActiveMenuItem(menuItem, currentPath)) {
                                itemFound = menuItem;
                                primaryItemFound = primaryMenuItem;
                            }
                        }
                    });
                }
            });
        }
        if (itemFound) {
            this.navigationMenu.setActiveMenu(primaryItemFound, itemFound);
            this.headerContent.title = itemFound.name;
        }
    }
}

import {Injectable} from '@angular/core';
import {MenuItem} from './menu-item';
import {WindowService} from '@ironsource/fusion-ui/services';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    menuItems: Array<MenuItem>;
    selectedItem: MenuItem;

    constructor(private windowService: WindowService) {}

    /**
     * Set menu items collection from JSON data
     */
    setMenuItems(menuItems: MenuItem[], currentPath = '') {
        this.menuItems = menuItems || [];
        this.setSelectedByRoute(currentPath);
    }

    setSelectedByRoute(route: string) {
        if (this.menuItems.length !== 0) {
            const findMenuItem = (items: MenuItem[], path: string) => {
                let itemFound: MenuItem = null;
                items.forEach((curItem: MenuItem) => {
                    if (!itemFound) {
                        if (path.indexOf(curItem.route) === 0 || path.indexOf(curItem.redirect) === 0) {
                            itemFound = curItem;
                        }
                        if (curItem.children && !itemFound) {
                            itemFound = findMenuItem(curItem.children, path);
                        }
                    }
                });
                return itemFound;
            };

            // check menu item to be selected by active route (location)
            const item = findMenuItem(this.menuItems, route);
            if (item) {
                this.setSelected(item);
            } else {
                this.selectedItem = null;
            }
        }
    }

    /**
     * return menu items collection to the menu controller
     * here we can use some manipulation if needed
     */
    getMenuItems(): MenuItem[] {
        return this.menuItems;
    }

    /**
     * Just set menu item that was clicked to selected
     */
    setSelected(menuItem: MenuItem): void {
        this.selectedItem = menuItem;
    }

    /**
     * Check if item or one of it's child selected
     */
    isSelected(menuItem: MenuItem): boolean {
        if (menuItem === this.selectedItem) {
            return true; // current item selected
        }
        // need check child if any selected
        if (menuItem.children) {
            return menuItem.children.some(item => item === this.selectedItem);
        }
        return false;
    }

    /**
     * Check if menu item need to be opened (selected and has child)
     */
    isOpened(menuItem: MenuItem): boolean {
        // same as is Selected
        return this.isSelected(menuItem);
        // return (!!menuItem.children && (menuItem === this.selectedItem));
    }

    /**
     * Store pre-selected menu for using in platform (DSI 1.5)
     */
    setPlatformMenuPath(menuPath: string): void {
        if (menuPath) {
            this.windowService.nativeWindow.sessionStorage.setItem('menuSelected', menuPath);
        }
    }
}

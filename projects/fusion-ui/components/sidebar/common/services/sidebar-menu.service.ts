import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {SidebarMenuItem} from '@ironsource/fusion-ui/components/sidebar/common/entities';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

@Injectable({
    providedIn: 'root'
})
export class SidebarMenuService {
    openedMenuItem$ = new BehaviorSubject<SidebarMenuItem>(null);
    selectedMenuItem$ = new BehaviorSubject<SidebarMenuItem>(null);
    activeMenuItem$ = new BehaviorSubject<SidebarMenuItem>(null);

    constructor() {}

    normalizeActiveRoute(activeRoute: string, regExp: RegExp): string {
        return !isNullOrUndefined(regExp) ? activeRoute.replace(regExp, '') : activeRoute;
    }

    /**
     * Found in menu-items three open, selected and active menu item by route (ignore part after menu item route)
     * route '/XXX/YYY/ZZZ' will match for menuItem route '/XXX/YYY'
     * - menuItems menu items array
     * - activeRoute
     * - rootItem (first parent in three)
     * - deepLevel (optional need just for not replace root parent if level of parents more than one)
     */
    setMenuByActiveRoute(menuItems: SidebarMenuItem[] = [], activeRoute: string, rootItem?: SidebarMenuItem, deepLevel = 0) {
        deepLevel++;
        menuItems.forEach(item => {
            if (
                (item.route && activeRoute.startsWith(item.route)) ||
                (item.additionalAction?.route && activeRoute.startsWith(item.additionalAction.route))
            ) {
                this.setMenuItemsState(item, rootItem ?? item, rootItem ?? item);
                return false;
            } else if (!!item.children) {
                this.setMenuByActiveRoute(item.children, activeRoute, deepLevel === 1 ? item : rootItem, deepLevel);
            }
        });
    }

    private setMenuItemsState(active: SidebarMenuItem, selected: SidebarMenuItem, opened: SidebarMenuItem) {
        this.activeMenuItem$.next(active);
        this.selectedMenuItem$.next(selected);
        this.openedMenuItem$.next(opened);
    }
}

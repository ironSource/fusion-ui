import {Directive, EventEmitter, Input, Optional, Output} from '@angular/core';
import {MenuItem} from './menu-item';
import {MenuItemAdditionalData} from './menu-item-additional-data';
import {MenuService} from './menu.service';
import {WindowService} from '@ironsource/fusion-ui/services/window';
import {Location} from '@angular/common';

@Directive()
export abstract class MenuBaseComponent {
    private _menuItems: MenuItem[];
    @Output() routeChanged = new EventEmitter<void>();

    @Input()
    set menuItems(menuItems: MenuItem[]) {
        this._menuItems = menuItems;
        this.menuService.setMenuItems(this._menuItems, this.currentPath);
    }

    get menuItems(): MenuItem[] {
        return this._menuItems;
    }

    get currentPath(): string {
        if (this.location) {
            return this.location.path();
        } else {
            return this.windowService.nativeWindow.location.pathname;
        }
    }

    @Output() menuAdditionalItemClicked = new EventEmitter<MenuItemAdditionalData>();
    @Output() menuItemClicked = new EventEmitter<MenuItem>();
    @Output() mouseLeave = new EventEmitter<any>();
    @Output() mouseEnter = new EventEmitter<any>();

    constructor(private menuService: MenuService, private windowService: WindowService, @Optional() private location: Location) {}
}

import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuDropItem} from './menu-drop.entities';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';

@Component({
    selector: 'fusion-menu-drop',
    standalone: true,
    imports: [CommonModule, IconModule],
    templateUrl: './menu-drop.component.html',
    styleUrls: ['./menu-drop.component.scss'],
    host: {'ui-version': '3'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuDropComponent {
    @Input() set menuItems(value: MenuDropItem[]) {
        if (Array.isArray(value)) {
            this._menuItems = value;
        }
    }
    @Output() menuItemClicked = new EventEmitter<MenuDropItem>();

    get menuItems(): MenuDropItem[] {
        return this._menuItems;
    }
    private _menuItems: MenuDropItem[];

    /** @internal */
    itemClicked(menuItem) {
        this.menuItemClicked.emit(menuItem);
    }
}

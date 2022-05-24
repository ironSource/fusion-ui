import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {LayoutHeaderMenuConfiguration} from './layout-header-menu-entity';
import {SidebarMenuItem} from '@ironsource/fusion-ui/components/sidebar/common/entities';
import {LayoutUser} from '@ironsource/fusion-ui/entities';

@Component({
    selector: 'fusion-layout-header-menu',
    templateUrl: './layout-header-menu.component.html',
    styleUrls: ['./layout-header-menu.component.scss', './layout-header-menu-mobile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutHeaderMenuComponent {
    @Input() set configuration(value: LayoutHeaderMenuConfiguration) {
        this.userData = value.user;
        this.menuItems = value.menuItems;
        this.isUserMenu = !!value?.user?.name || !!value?.user?.email;
    }
    @Output() layoutHeaderMenuItemClicked = new EventEmitter<SidebarMenuItem>();

    isUserMenu = true;
    userData: LayoutUser;
    menuItems: SidebarMenuItem[];

    onMenuItemClicked(menuItem: SidebarMenuItem) {
        this.layoutHeaderMenuItemClicked.emit(menuItem);
    }
}

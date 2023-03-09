import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@Component({
    selector: 'fusion-navigation-secondary-menu',
    standalone: true,
    imports: [CommonModule, IconModule],
    templateUrl: './navigation-secondary-menu.component.html',
    styleUrls: ['./navigation-secondary-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationSecondaryMenuComponent implements OnInit {
    @Input() menuItems: MenuItem[];
    @Input() menuName: string;
    @Input() menuLogoSrc: string;

    itemChildToggleIcon: IconData = {iconName: 'caret_right', iconVersion: 'v4'};
    selectedMenuItem: MenuItem;

    constructor() {}

    ngOnInit(): void {}

    toggleChildItems($event) {
        console.log('......');
        $event.currentTarget?.closest('.fu-secondary-menu-item-holder').classList?.toggle('fu-sub-items-opened');
    }

    onMenuItemClicked($event: Event, menuItem: MenuItem) {
        // if (!!$event) {
        //     $event.stopPropagation();
        //     const triggerHrefEvent = (menuItem.routeConfigurations?.triggerHrefEvent ?? false) || !!menuItem.routeConfigurations?.target;
        //     if (!triggerHrefEvent) {
        //         $event.preventDefault();
        //     }
        // }
        // // check for check on return icon in mobile media size
        // this.isReturnToMenuMobile$.next(!!($event.target as Element).closest('.fu-sidebar-menu-mobile-return-icon'));
        //
        // if (!menuItem.children) {
        //     this.menuItemClicked.emit(menuItem);
        // } else {
        //     this.setMenuItemOpenedState(menuItem);
        // }
        if (!menuItem.children) {
            this.selectedMenuItem = menuItem;
        }
    }
}

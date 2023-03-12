import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {BehaviorSubject} from 'rxjs';

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

    @Output() menuItemClick = new EventEmitter<MenuItem>();

    itemChildToggleIcon: IconData = {iconName: 'caret_right', iconVersion: 'v4'};
    itemNewTabIcon: IconData = {iconName: 'arrow_square_out', iconVersion: 'v4'};
    selectedMenuItem: MenuItem;

    openedMenuItem$ = new BehaviorSubject<MenuItem>(null);

    constructor() {}

    ngOnInit(): void {}

    onMenuItemClicked($event: Event, menuItem: MenuItem) {
        if (!menuItem.children) {
            this.menuItemClick.emit(menuItem);
            this.selectedMenuItem = menuItem;
        } else {
            this.toggleChildItems($event, menuItem);
        }
    }

    private toggleChildItems($event, menuItem: MenuItem) {
        $event.currentTarget?.closest('.fu-secondary-menu-item-holder').classList?.toggle('fu-sub-items-opened');
        this.openedMenuItem$.next(this.openedMenuItem$.getValue() === menuItem ? null : menuItem);
    }
}

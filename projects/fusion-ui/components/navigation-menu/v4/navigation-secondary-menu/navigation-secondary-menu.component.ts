import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {BehaviorSubject} from 'rxjs';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {secondaryMenuItem} from './navigation-secondary-menu.entities';

@Component({
    selector: 'fusion-navigation-secondary-menu',
    standalone: true,
    imports: [CommonModule, IconModule, TooltipModule],
    templateUrl: './navigation-secondary-menu.component.html',
    styleUrls: ['./navigation-secondary-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationSecondaryMenuComponent implements OnInit {
    @Input() set menuItems(value: MenuItem[]) {
        if (Array.isArray(value)) {
            this._menuItems = [...value];
        }
    }
    get menuItems(): secondaryMenuItem[] {
        return this._menuItems;
    }
    @Input() menuName: string;
    @Input() menuLogoSrc: string;

    @Output() menuItemClick = new EventEmitter<MenuItem>();

    itemChildToggleIcon: IconData = {iconName: 'caret_right', iconVersion: 'v4'};
    itemNewTabIcon: IconData = {iconName: 'arrow_square_out', iconVersion: 'v4'};

    selectedMenuItem$ = new BehaviorSubject<secondaryMenuItem>(null);

    private _menuItems: secondaryMenuItem[] = [];

    constructor() {}

    ngOnInit(): void {}

    onMenuItemClicked($event: Event, menuItem: secondaryMenuItem) {
        if (!menuItem.children) {
            this.menuItemClick.emit(menuItem);
            this.selectedMenuItem$.next(menuItem);
        } else {
            this.toggleChildItems($event, menuItem);
        }
    }

    private toggleChildItems($event, menuItem: secondaryMenuItem) {
        menuItem.closed = !menuItem.closed;
    }
}

import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {BehaviorSubject} from 'rxjs';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {secondaryMenuItem} from './navigation-secondary-menu.entities';

@Component({
    selector: 'fusion-navigation-secondary-menu',
    standalone: true,
    imports: [CommonModule, IconModule, TooltipModule, SvgModule],
    templateUrl: './navigation-secondary-menu.component.html',
    styleUrls: ['./navigation-secondary-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationSecondaryMenuComponent {
    @Input() set menuItems(value: MenuItem[]) {
        if (Array.isArray(value)) {
            this._menuItems = [...value];
            this.selectedMenuItem$.next(null);
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

    onMenuItemClicked($event: MouseEvent, menuItem: secondaryMenuItem) {
        if ($event && $event.metaKey) {
            return;
        }
        if ($event && !menuItem.target) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        if (!menuItem.children && !menuItem.target) {
            this.menuItemClick.emit(menuItem);
            this.selectedMenuItem$.next(menuItem);
        } else {
            this.toggleChildItems($event, menuItem);
        }
    }

    setSelected(menuItem: secondaryMenuItem) {
        this.selectedMenuItem$.next(menuItem);
    }

    private toggleChildItems($event, menuItem: secondaryMenuItem) {
        menuItem.closed = !menuItem.closed;
    }
}

import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {BehaviorSubject} from 'rxjs';
import {secondaryMenuItem} from './navigation-secondary-menu.entities';
import {IconButtonComponent} from '@ironsource/fusion-ui/components/button/v4';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';
import {TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';

@Component({
    selector: 'fusion-navigation-secondary-menu',
    standalone: true,
    imports: [CommonModule, IconModule, TooltipDirective, SvgModule, IconButtonComponent],
    templateUrl: './navigation-secondary-menu.component.html',
    styleUrls: ['./navigation-secondary-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationSecondaryMenuComponent implements OnInit {
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

    itemChildToggleIcon: string = 'ph/bold/caret-right';
    itemNewTabIcon: string = 'ph/arrow-square-out';
    selectedMenuItem$ = new BehaviorSubject<secondaryMenuItem>(null);
    quickActionTooltipConfiguration = {position: TooltipPosition.Right, suppressPositionArrow: true};

    private _menuItems: secondaryMenuItem[] = [];

    constructor() {}

    ngOnInit(): void {}

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

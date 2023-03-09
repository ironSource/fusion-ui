import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {RepositionDirective} from '@ironsource/fusion-ui/directives/reposition';
import {NavigationBarItemType, NavigationMenuBarItem} from '../navigation-menu.entities';
import {NavigationPopMenuComponent} from '../navigation-pop-menu/navigation-pop-menu.component';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';

@Component({
    selector: 'fusion-navigation-primary-menu',
    standalone: true,
    imports: [CommonModule, IconModule, TooltipModule, ClickOutsideModule, RepositionDirective, NavigationPopMenuComponent],
    templateUrl: './navigation-primary-menu.component.html',
    styleUrls: ['./navigation-primary-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationPrimaryMenuComponent implements OnInit {
    @Input() set menuBarItems(value: NavigationMenuBarItem[]) {
        if (!isNullOrUndefined(value)) {
            this.parseNavigationBarItems(value);
        }
    }

    @Input() layoutUser: LayoutUser;
    @Input() menuCollapsed = false;

    @Output() menuItemClick = new EventEmitter<MenuItem>();

    @Output() primaryMenuItemClicked = new EventEmitter<NavigationMenuBarItem>();
    @Output() changeColorTheme = new EventEmitter<{[key: string]: string}>();
    @Output() toggleMenu = new EventEmitter();
    @Output() resetSecondaryMenu = new EventEmitter<void>();

    homeItem: NavigationMenuBarItem;

    networkItems$ = new BehaviorSubject<NavigationMenuBarItem[]>([]);
    bottomItems$ = new BehaviorSubject<NavigationMenuBarItem[]>([]);
    showPopMenu$ = new BehaviorSubject<boolean>(false);

    selectedBarItem: NavigationMenuBarItem;
    menuCollapsedIcon = {iconName: 'arrowLineRight', iconVersion: 'v4'};
    menuExpandedIcon = {iconName: 'arrowLineLeft', iconVersion: 'v4'};
    menuToggleButtonTooltip = 'Collapse side nav';

    popMenuPosition = TooltipPosition.BottomLeft;

    defaultCssTheme: {[key: string]: string};

    constructor() {}

    ngOnInit(): void {}

    networkItemClicked(item) {
        switch (item?.type) {
            case NavigationBarItemType.User:
                this.showPopMenu$.next(true);
                break;
            case NavigationBarItemType.Home:
                this.setSelectedBarItem(null);
                this.primaryMenuItemClicked.emit(item);
                this.resetColorTheme();
                break;
            case NavigationBarItemType.Main:
                this.setSelectedBarItem(item);
                this.primaryMenuItemClicked.emit(item);
                if (item?.cssTheme) {
                    this.changeColorTheme.emit(item?.cssTheme);
                }
        }
    }

    onPopMenuOutsideClick(target: HTMLElement) {
        if (!target.closest('.fu-with-pop-menu')) {
            this.showPopMenu$.next(false);
        }
    }

    onPopMenuItemClicked(menuItem) {
        this.menuItemClick.emit(menuItem);
        this.showPopMenu$.next(false);
        this.setSelectedBarItem(null);
        this.resetColorTheme();
    }

    private setSelectedBarItem(barItem: NavigationMenuBarItem) {
        this.selectedBarItem = barItem;
        if (!barItem) {
            this.resetSecondaryMenu.emit();
        }
    }

    private resetColorTheme() {
        if (this.defaultCssTheme) {
            this.changeColorTheme.emit(this.defaultCssTheme);
        }
    }

    private parseNavigationBarItems(value: NavigationMenuBarItem[]) {
        const networkItems = [];
        const bottomItems = [];
        value.forEach((barItem: NavigationMenuBarItem) => {
            switch (barItem.type) {
                case NavigationBarItemType.Home:
                    this.homeItem = barItem;
                    if (!isNullOrUndefined(barItem.cssTheme)) {
                        this.defaultCssTheme = barItem.cssTheme;
                    }
                    break;
                case NavigationBarItemType.Main:
                    networkItems.push(barItem);
                    break;
                default:
                    bottomItems.push(barItem);
                    break;
            }
        });
        this.networkItems$.next(networkItems);
        this.bottomItems$.next(bottomItems);
    }
}

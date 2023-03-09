import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {BehaviorSubject} from 'rxjs';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {NavigationBarItemType, NavigationMenuBarItem} from './navigation-menu.entities';
import {MenuItem, MenuItemAdditionalData} from '@ironsource/fusion-ui/components/menu/common/base';
import {NavigationPrimaryMenuComponent} from './navigation-primary-menu/navigation-primary-menu.component';
import {NavigationSecondaryMenuComponent} from './navigation-secondary-menu/navigation-secondary-menu.component';

@Component({
    selector: 'fusion-navigation-menu',
    standalone: true,
    imports: [CommonModule, NavigationPrimaryMenuComponent, NavigationSecondaryMenuComponent],
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationMenuComponent implements OnInit {
    @Input() menuItems: NavigationMenuBarItem[];
    @Input() layoutUser: LayoutUser;

    @Output() menuAdditionalItemClicked = new EventEmitter<MenuItemAdditionalData>();
    @Output() menuItemClicked = new EventEmitter<MenuItem>();

    secondaryMenuItems = new BehaviorSubject<MenuItem[]>([]);
    secondaryMenuName = new BehaviorSubject<string>('');
    secondaryMenuLogoSrc = new BehaviorSubject<string>('');
    secondaryMenuCollapsed = new BehaviorSubject<boolean>(true);

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {}

    onMenuItemClicked(menuItem) {
        this.menuItemClicked.emit(menuItem);
    }

    onPrimaryMainMenuItemClicked(selectedNetwork: NavigationMenuBarItem) {
        this.setSecondaryMenu(selectedNetwork);
    }

    onChangeColorTheme(cssTheme: {[key: string]: string}) {
        this.setNetworkTheme(cssTheme);
    }

    toggleMenu() {
        this.secondaryMenuCollapsed.next(!this.secondaryMenuCollapsed.getValue());
    }

    resetSecondaryMenu() {
        this.secondaryMenuItems.next([]);
        this.secondaryMenuName.next('');
        this.secondaryMenuLogoSrc.next('');
        this.secondaryMenuCollapsed.next(true);
    }

    private setSecondaryMenu(selectedNetwork: NavigationMenuBarItem) {
        this.secondaryMenuItems.next(selectedNetwork?.menuItems ?? []);
        this.secondaryMenuName.next(selectedNetwork?.menuTitle ?? '');
        this.secondaryMenuLogoSrc.next(selectedNetwork?.menuLogoSrc ?? '');

        this.secondaryMenuCollapsed.next(selectedNetwork.type !== NavigationBarItemType.Main);
    }

    private setNetworkTheme(theme: {[key: string]: string}) {
        if (!isNullOrUndefined(theme)) {
            Object.keys(theme).forEach(key => {
                this.elementRef.nativeElement.style.setProperty(`--${key}`, theme[key]);
            });
        }
    }
}

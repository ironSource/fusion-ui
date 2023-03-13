import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject, fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
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
    @ViewChild('primaryMenu', {static: true}) primaryMenu: NavigationPrimaryMenuComponent;

    @Input() menuItems: NavigationMenuBarItem[];
    @Input() layoutUser: LayoutUser;

    @Output() menuAdditionalItemClicked = new EventEmitter<MenuItemAdditionalData>();
    @Output() menuItemClicked = new EventEmitter<MenuItem>();

    secondaryMenuItems = new BehaviorSubject<MenuItem[]>([]);
    secondaryMenuName = new BehaviorSubject<string>('');
    secondaryMenuLogoSrc = new BehaviorSubject<string>('');
    secondaryMenuClosed = new BehaviorSubject<boolean>(true);
    secondaryMenuExpanded = new BehaviorSubject<boolean>(false);

    private onDestroy$ = new Subject<void>();
    private isSecondaryMenuExpandable = true; // for secondary menu

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
        fromEvent(this.elementRef.nativeElement, 'mouseleave')
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(this.onNavigationMenuMouseLeave.bind(this));
    }

    onMenuItemClicked(menuItem) {
        this.menuItemClicked.emit(menuItem);
    }

    onPrimaryMainMenuItemMouseEnter(selectedNetwork: NavigationMenuBarItem) {
        this.setSecondaryMenu(selectedNetwork);
        if (this.isSecondaryMenuExpandable) {
            this.secondaryMenuExpanded.next(true);
        }
    }

    onNavigationMenuMouseLeave() {
        if (this.isSecondaryMenuExpandable) {
            this.secondaryMenuExpanded.next(false);
            this.secondaryMenuClosed.next(true);
        }
    }

    onPrimaryMainMenuItemClicked(selectedNetwork: NavigationMenuBarItem) {
        this.setSecondaryMenu(selectedNetwork);
        this.secondaryMenuExpanded.next(false);
        this.isSecondaryMenuExpandable = selectedNetwork.type !== NavigationBarItemType.Main;
    }

    onChangeColorTheme(cssTheme: {[key: string]: string}) {
        this.setNetworkTheme(cssTheme);
    }

    toggleMenu() {
        this.secondaryMenuClosed.next(!this.secondaryMenuClosed.getValue());
        this.isSecondaryMenuExpandable = this.secondaryMenuClosed.getValue();
    }

    resetSecondaryMenu() {
        this.secondaryMenuItems.next([]);
        this.secondaryMenuName.next('');
        this.secondaryMenuLogoSrc.next('');
        this.secondaryMenuClosed.next(true);
    }

    private setSecondaryMenu(selectedNetwork: NavigationMenuBarItem) {
        this.secondaryMenuItems.next(selectedNetwork?.menuItems ?? []);
        this.secondaryMenuName.next(selectedNetwork?.menuTitle ?? '');
        this.secondaryMenuLogoSrc.next(selectedNetwork?.menuLogoSrc ?? '');
        this.secondaryMenuClosed.next(selectedNetwork.type !== NavigationBarItemType.Main);
        this.primaryMenu.setColorTheme(selectedNetwork?.cssTheme ?? null);
    }

    private setNetworkTheme(theme: {[key: string]: string}) {
        if (!isNullOrUndefined(theme)) {
            Object.keys(theme).forEach(key => {
                this.elementRef.nativeElement.style.setProperty(`--${key}`, theme[key]);
            });
        }
    }
}

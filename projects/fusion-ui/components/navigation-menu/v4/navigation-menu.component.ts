import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject, fromEvent, Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {MenuItem, MenuItemAdditionalData} from '@ironsource/fusion-ui/components/menu/common/base';
import {NavigationBarItemType, PrimaryMenuItem, PrimaryMenuMode} from './navigation-menu.entities';
import {NavigationPrimaryMenuComponent} from './navigation-primary-menu/navigation-primary-menu.component';
import {NavigationSecondaryMenuComponent} from './navigation-secondary-menu/navigation-secondary-menu.component';
import {StorageService, StorageType} from '@ironsource/fusion-ui/services/stogare';

const MENU_CACHE_KEY = 'persistent_fusionMenuCollapsed';

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
    @ViewChild('secondaryMenu', {static: true}) secondaryMenu: NavigationSecondaryMenuComponent;

    @Input() menuItems: PrimaryMenuItem[];
    @Input() layoutUser: LayoutUser;
    @Input() primaryMenuItemMode: PrimaryMenuMode = 'clickToDefaultSecondaryItem';

    @Output() menuAdditionalItemClicked = new EventEmitter<MenuItemAdditionalData>();
    @Output() menuItemClicked = new EventEmitter<MenuItem>();

    secondaryMenuItems$ = new BehaviorSubject<MenuItem[]>([]);
    secondaryMenuName$ = new BehaviorSubject<string>('');
    secondaryMenuLogoSrc$ = new BehaviorSubject<string>('');

    secondaryMenuOpen$ = new BehaviorSubject<boolean>(this.storageService.get(StorageType.SessionStorage, MENU_CACHE_KEY) ?? true);
    secondaryMenuExpanded$ = new BehaviorSubject<boolean>(true);

    menuOpenForPrimaryMenuItem$ = new BehaviorSubject<PrimaryMenuItem>(null);

    private onDestroy$ = new Subject<void>();
    private preSelectedPrimaryMenuItem: PrimaryMenuItem;
    private selectedPrimaryMenuItem: PrimaryMenuItem;
    private selectedSecondaryMenuItem: MenuItem;

    get needRestoreSelectedState(): boolean {
        return (
            !!this.selectedPrimaryMenuItem &&
            !!this.preSelectedPrimaryMenuItem &&
            this.selectedPrimaryMenuItem?.menuTitle !== this.preSelectedPrimaryMenuItem?.menuTitle
        );
    }

    private _isSecondaryMenuExpandable = true;
    set isSecondaryMenuExpandable(value: boolean) {
        this._isSecondaryMenuExpandable = value;
    }

    get isSecondaryMenuExpandable(): boolean {
        const storedOpenState = this.storageService.get(StorageType.SessionStorage, MENU_CACHE_KEY);
        return isNullOrUndefined(storedOpenState) ? this._isSecondaryMenuExpandable : !storedOpenState;
    }

    constructor(private elementRef: ElementRef, protected storageService: StorageService) {}

    ngOnInit(): void {
        this.initListeners();
    }

    initListeners() {
        fromEvent(this.primaryMenu.nativeElement, 'mouseenter')
            .pipe(
                takeUntil(this.onDestroy$),
                filter((event: MouseEvent) => {
                    const isMainSelected = this.primaryMenu.selectedBarItem$.getValue()?.type === 'main';
                    const isNotOverBottomItems = event.clientY < this.primaryMenu.bottomItemsTopPosition;
                    return isMainSelected && this.isSecondaryMenuExpandable && isNotOverBottomItems;
                })
            )
            .subscribe(this.onPrimaryMenuMainMouseEnter.bind(this));

        fromEvent(this.elementRef.nativeElement, 'mouseleave')
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(this.onNavigationMenuMouseLeave.bind(this));

        if (this.selectedPrimaryMenuItem?.type !== NavigationBarItemType.Main && this.secondaryMenuOpen$.getValue()) {
            // if started from primary menu item that have NOT children and secondary menu is open
            setTimeout(() => {
                this.secondaryMenuOpen$.next(false);
            }, 250);
        }
    }

    onMenuItemClicked(menuItem, popMenuItem = false) {
        if (!popMenuItem) {
            this.selectedPrimaryMenuItem = this.preSelectedPrimaryMenuItem;
            this.isSecondaryMenuExpandable = false;
            this.setSecondaryMenuVisibilityState(this.isSecondaryMenuExpandable, true);

            this.selectedSecondaryMenuItem = menuItem;
            this.primaryMenu.setSelectedPrimaryMenuItem(this.selectedPrimaryMenuItem);
            this.primaryMenu.setColorTheme(this.selectedPrimaryMenuItem?.cssTheme ?? null);
        } else {
            this.preSelectedPrimaryMenuItem = null;
            this.selectedSecondaryMenuItem = menuItem;
            this.storageService.remove(StorageType.SessionStorage, MENU_CACHE_KEY);
            this.isSecondaryMenuExpandable = true;
            this.setSecondaryMenuVisibilityState(this.isSecondaryMenuExpandable, false);
        }
        this.menuItemClicked.emit(menuItem);
    }

    onPrimaryMenuMainMouseEnter($event) {
        this.setSecondaryMenuVisibilityState(this.isSecondaryMenuExpandable, true);
    }

    onNavigationMenuMouseLeave() {
        if (this.needRestoreSelectedState) {
            this.setSecondaryMenu(this.selectedPrimaryMenuItem);
            this.primaryMenu.setColorTheme(this.selectedPrimaryMenuItem?.cssTheme ?? null);
        }
        if (this.selectedPrimaryMenuItem?.type !== NavigationBarItemType.Main) {
            this.setSecondaryMenuVisibilityState(this.isSecondaryMenuExpandable, false);
        } else if (this.selectedPrimaryMenuItem?.type === NavigationBarItemType.Main) {
            if (this.isSecondaryMenuExpandable) {
                this.setSecondaryMenuVisibilityState(true, false);
            }
        }
    }

    onPrimaryMainMenuItemClicked(selectedNetwork: PrimaryMenuItem) {
        if (isNullOrUndefined(selectedNetwork)) {
            this.onNavigationMenuMouseLeave();
        } else {
            this.preSelectedPrimaryMenuItem = selectedNetwork;
            this.setSecondaryMenu(selectedNetwork);
            if (!isNullOrUndefined(selectedNetwork.route)) {
                this.isSecondaryMenuExpandable = true;
                this.setSecondaryMenuVisibilityState(this.isSecondaryMenuExpandable, false);
                this.selectedPrimaryMenuItem = this.preSelectedPrimaryMenuItem;
                this.primaryMenu.setSelectedPrimaryMenuItem(this.selectedPrimaryMenuItem);
                this.menuItemClicked.emit({name: selectedNetwork.menuTitle, route: selectedNetwork.route});
            } else {
                const isNavigateByClick = this.primaryMenuItemMode === 'clickToDefaultSecondaryItem';
                const itemToNavigate = isNavigateByClick ? this.findDefaultMenuItem(selectedNetwork.menuItems) : undefined;
                if (itemToNavigate) {
                    this.onMenuItemClicked(itemToNavigate);
                } else {
                    this.setSecondaryMenuVisibilityState(this.isSecondaryMenuExpandable, true);
                }
            }
        }
    }

    onChangeColorTheme(cssTheme: {[key: string]: string}) {
        this.setNetworkTheme(cssTheme);
    }

    toggleMenu() {
        if (!(this.secondaryMenuOpen$.getValue() && this.secondaryMenuExpanded$.getValue())) {
            this.secondaryMenuOpen$.next(!this.secondaryMenuOpen$.getValue() && this.secondaryMenuItems$.getValue().length > 0);
        }
        const newMenuStateValue = isNullOrUndefined(this.storageService.get(StorageType.SessionStorage, MENU_CACHE_KEY))
            ? true
            : this.secondaryMenuOpen$.getValue();
        this.storageService.set(StorageType.SessionStorage, MENU_CACHE_KEY, newMenuStateValue);
        if (this.secondaryMenuOpen$.getValue()) {
            if (this.needRestoreSelectedState) {
                this.setSecondaryMenu(this.selectedPrimaryMenuItem);
            }
            this.secondaryMenuExpanded$.next(false);
        }
    }

    resetSecondaryMenu() {
        this.secondaryMenuItems$.next([]);
        this.secondaryMenuName$.next('');
        this.secondaryMenuLogoSrc$.next('');
    }

    setActiveMenu(primary: PrimaryMenuItem, secondary: MenuItem | PrimaryMenuItem) {
        if (isNullOrUndefined(primary) || isNullOrUndefined(secondary)) {
            this.secondaryMenu.setSelected(null);
        } else {
            this.selectedPrimaryMenuItem = primary;
            this.preSelectedPrimaryMenuItem = primary;
            if (primary !== secondary) {
                this.selectedSecondaryMenuItem = secondary as MenuItem;
                this.setSecondaryMenu(primary);
            } else {
                this.resetSecondaryMenu();
            }
            this.primaryMenu.setSelectedPrimaryMenuItem(primary);
            setTimeout(() => {
                this.primaryMenu.setColorTheme(primary?.cssTheme ?? null);
            });
        }
    }

    private setSecondaryMenu(selectedNetwork: PrimaryMenuItem) {
        if (selectedNetwork?.type === NavigationBarItemType.Main) {
            this.secondaryMenuItems$.next(selectedNetwork?.menuItems ?? []);
            this.secondaryMenuName$.next(selectedNetwork?.menuTitle ?? '');
            this.secondaryMenuLogoSrc$.next(selectedNetwork?.menuLogoSrc ?? '');

            this.menuOpenForPrimaryMenuItem$.next(selectedNetwork);
            this.selectSecondaryMenuItem(selectedNetwork);
        } else if (selectedNetwork?.type === NavigationBarItemType.Home) {
            this.resetSecondaryMenu();
        }
    }

    private selectSecondaryMenuItem(selectedNetwork: PrimaryMenuItem) {
        if (this.selectedPrimaryMenuItem === selectedNetwork && !isNullOrUndefined(this.selectedSecondaryMenuItem)) {
            setTimeout(() => {
                this.secondaryMenu.setSelected(this.selectedSecondaryMenuItem);
            });
        }
    }

    private setSecondaryMenuVisibilityState(expanded: boolean, open: boolean) {
        this.secondaryMenuExpanded$.next(expanded);
        this.secondaryMenuOpen$.next(open);
    }

    private setNetworkTheme(theme: {[key: string]: string}) {
        if (!isNullOrUndefined(theme)) {
            Object.keys(theme).forEach(key => {
                this.elementRef.nativeElement.style.setProperty(`--${key}`, theme[key]);
            });
        }
    }

    private findDefaultMenuItem(items: MenuItem[]): MenuItem | undefined {
        const searchMenuItemByKey = (items: MenuItem[], key: string): MenuItem | undefined => {
            for (const item of items) {
                if (!!item[key]) {
                    return item;
                }
            }
            for (const item of items) {
                if (item.children) {
                    const found = searchMenuItemByKey(item.children, key);
                    if (found) {
                        return found;
                    }
                }
            }
            return undefined;
        };
        const defaultMenuItem = searchMenuItemByKey(items, 'default');
        if (defaultMenuItem) {
            return defaultMenuItem;
        }
        return searchMenuItemByKey(items, 'route');
    }
}

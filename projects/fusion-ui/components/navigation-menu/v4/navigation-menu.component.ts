import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject, fromEvent, Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {MenuItem, MenuItemAdditionalData} from '@ironsource/fusion-ui/components/menu/common/base';
import {NavigationBarItemType, PrimaryMenuItem} from './navigation-menu.entities';
import {NavigationPrimaryMenuComponent} from './navigation-primary-menu/navigation-primary-menu.component';
import {NavigationSecondaryMenuComponent} from './navigation-secondary-menu/navigation-secondary-menu.component';
import {CacheService, CacheType} from '@ironsource/fusion-ui/services/cache';

const MENU_CACHE_KEY = 'fusionMenuCollapsed';

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

    @Output() menuAdditionalItemClicked = new EventEmitter<MenuItemAdditionalData>();
    @Output() menuItemClicked = new EventEmitter<MenuItem>();

    secondaryMenuItems$ = new BehaviorSubject<MenuItem[]>([]);
    secondaryMenuName$ = new BehaviorSubject<string>('');
    secondaryMenuLogoSrc$ = new BehaviorSubject<string>('');

    secondaryMenuOpen$ = new BehaviorSubject<boolean>(false);
    secondaryMenuExpanded$ = new BehaviorSubject<boolean>(false);

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
        const storedOpenState = this.cacheService.get(CacheType.SessionStorage, MENU_CACHE_KEY);
        return isNullOrUndefined(storedOpenState) ? this._isSecondaryMenuExpandable : !storedOpenState;
    }

    constructor(private elementRef: ElementRef, protected cacheService: CacheService) {}

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
            this.secondaryMenuOpen$.next(false);
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
            this.cacheService.remove(CacheType.SessionStorage, MENU_CACHE_KEY);
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
                if (selectedNetwork.type === NavigationBarItemType.Home) {
                    this.cacheService.remove(CacheType.SessionStorage, MENU_CACHE_KEY);
                }
            } else {
                this.setSecondaryMenuVisibilityState(this.isSecondaryMenuExpandable, true);
            }
        }
    }

    onChangeColorTheme(cssTheme: {[key: string]: string}) {
        this.setNetworkTheme(cssTheme);
    }

    toggleMenu() {
        if (!(this.secondaryMenuOpen$.getValue() && this.secondaryMenuExpanded$.getValue())) {
            this.secondaryMenuOpen$.next(!this.secondaryMenuOpen$.getValue());
        }
        this.cacheService.set(CacheType.SessionStorage, MENU_CACHE_KEY, this.secondaryMenuOpen$.getValue());
        if (this.secondaryMenuOpen$.getValue()) {
            this.secondaryMenuExpanded$.next(false);
        }
    }

    resetSecondaryMenu() {
        this.secondaryMenuItems$.next([]);
        this.secondaryMenuName$.next('');
        this.secondaryMenuLogoSrc$.next('');
    }

    setActiveMenu(primary: PrimaryMenuItem, secondary: MenuItem) {
        this.selectedPrimaryMenuItem = primary;
        this.preSelectedPrimaryMenuItem = primary;
        this.selectedSecondaryMenuItem = secondary;
        this.setSecondaryMenu(primary);
        this.primaryMenu.setSelectedPrimaryMenuItem(primary);
        this.primaryMenu.setColorTheme(primary?.cssTheme ?? null);
    }

    private setSecondaryMenu(selectedNetwork: PrimaryMenuItem) {
        this.secondaryMenuItems$.next(selectedNetwork?.menuItems ?? []);
        this.secondaryMenuName$.next(selectedNetwork?.menuTitle ?? '');
        this.secondaryMenuLogoSrc$.next(selectedNetwork?.menuLogoSrc ?? '');

        this.menuOpenForPrimaryMenuItem$.next(selectedNetwork);
        this.selectSecondaryMenuItem(selectedNetwork);
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
}

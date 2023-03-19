import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject, fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
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

    @Input() menuItems: PrimaryMenuItem[];
    @Input() layoutUser: LayoutUser;

    @Input() set menuCollapsed(value: boolean) {
        this.secondaryMenuOpen$.next(!value);
    }

    @Output() menuAdditionalItemClicked = new EventEmitter<MenuItemAdditionalData>();
    @Output() menuItemClicked = new EventEmitter<MenuItem>();

    secondaryMenuItems$ = new BehaviorSubject<MenuItem[]>([]);
    secondaryMenuName$ = new BehaviorSubject<string>('');
    secondaryMenuLogoSrc$ = new BehaviorSubject<string>('');

    secondaryMenuOpen$ = new BehaviorSubject<boolean>(this.cacheService.get(CacheType.SessionStorage, MENU_CACHE_KEY) ?? false);
    secondaryMenuExpanded$ = new BehaviorSubject<boolean>(false);

    private onDestroy$ = new Subject<void>();
    private preSelectedPrimaryMenuItem: PrimaryMenuItem;
    private selectedPrimaryMenuItem: PrimaryMenuItem;
    private selectedSecondaryMenuItem: MenuItem;

    get needRestoreSelectedState(): boolean {
        return !!this.selectedPrimaryMenuItem && this.selectedPrimaryMenuItem?.menuTitle !== this.preSelectedPrimaryMenuItem?.menuTitle;
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
        fromEvent(this.elementRef.nativeElement, 'mouseleave')
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(this.onNavigationMenuMouseLeave.bind(this));

        if (this.selectedPrimaryMenuItem?.type !== NavigationBarItemType.Main && this.secondaryMenuOpen$.getValue()) {
            this.secondaryMenuOpen$.next(false);
        }
    }

    onMenuItemClicked(menuItem, popMenuItem = false) {
        if (!popMenuItem) {
            if (isNullOrUndefined(this.selectedPrimaryMenuItem)) {
                this.isSecondaryMenuExpandable = false;
            }
            if (this.selectedPrimaryMenuItem !== this.preSelectedPrimaryMenuItem) {
                this.selectedPrimaryMenuItem = this.preSelectedPrimaryMenuItem;
                this.selectedSecondaryMenuItem = menuItem;
                this.setSecondaryMenuVisibilityState(this.isSecondaryMenuExpandable, true);
            }
            this.primaryMenu.setSelectedPrimaryMenuItem(this.selectedPrimaryMenuItem);
            this.primaryMenu.setColorTheme(this.selectedPrimaryMenuItem?.cssTheme ?? null);
        } else {
            this.setSecondaryMenuVisibilityState(false, false);
        }
        this.menuItemClicked.emit(menuItem);
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
                this.setSecondaryMenuVisibilityState(false, false);
            }
        }
    }

    onPrimaryMainMenuItemClicked(selectedNetwork: PrimaryMenuItem) {
        this.preSelectedPrimaryMenuItem = selectedNetwork;
        this.setSecondaryMenu(selectedNetwork);
        if (!isNullOrUndefined(selectedNetwork.route)) {
            this.setSecondaryMenuVisibilityState(false, false);
            this.selectedPrimaryMenuItem = this.preSelectedPrimaryMenuItem;
            this.primaryMenu.setSelectedPrimaryMenuItem(this.selectedPrimaryMenuItem);
            this.menuItemClicked.emit({name: selectedNetwork.menuTitle, route: selectedNetwork.route});
        } else {
            this.setSecondaryMenuVisibilityState(this.isSecondaryMenuExpandable, true);
        }
    }

    onChangeColorTheme(cssTheme: {[key: string]: string}) {
        this.setNetworkTheme(cssTheme);
    }

    toggleMenu() {
        this.secondaryMenuOpen$.next(!this.secondaryMenuOpen$.getValue());
        this.cacheService.set(CacheType.SessionStorage, MENU_CACHE_KEY, this.secondaryMenuOpen$.getValue());
    }

    resetSecondaryMenu() {
        this.secondaryMenuItems$.next([]);
        this.secondaryMenuName$.next('');
        this.secondaryMenuLogoSrc$.next('');
    }

    private setSecondaryMenu(selectedNetwork: PrimaryMenuItem, setSecondaryMenuCollapseState = true) {
        this.secondaryMenuItems$.next(selectedNetwork?.menuItems ?? []);
        this.secondaryMenuName$.next(selectedNetwork?.menuTitle ?? '');
        this.secondaryMenuLogoSrc$.next(selectedNetwork?.menuLogoSrc ?? '');
    }

    private setSecondaryMenuVisibilityState(showed: boolean, open: boolean) {
        this.secondaryMenuExpanded$.next(showed);
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

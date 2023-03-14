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

    @Output() menuAdditionalItemClicked = new EventEmitter<MenuItemAdditionalData>();
    @Output() menuItemClicked = new EventEmitter<MenuItem>();

    secondaryMenuItems$ = new BehaviorSubject<MenuItem[]>([]);

    secondaryMenuName$ = new BehaviorSubject<string>('');
    secondaryMenuLogoSrc$ = new BehaviorSubject<string>('');

    secondaryMenuCollapsed$ = new BehaviorSubject<boolean>(true);
    secondaryMenuShowed$ = new BehaviorSubject<boolean>(false);

    private onDestroy$ = new Subject<void>();
    private isSecondaryMenuExpandable = true; // for secondary menu
    private preSelectedPrimaryMenuItem: PrimaryMenuItem;

    private selectedPrimaryMenuItem: PrimaryMenuItem;
    private selectedSecondaryMenuItem: MenuItem;

    get needRestoreSelectedState(): boolean {
        return !!this.selectedPrimaryMenuItem && this.selectedPrimaryMenuItem?.menuTitle !== this.preSelectedPrimaryMenuItem?.menuTitle;
    }

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
        fromEvent(this.elementRef.nativeElement, 'mouseleave')
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(this.onNavigationMenuMouseLeave.bind(this));
    }

    onMenuItemClicked(menuItem) {
        this.selectedPrimaryMenuItem = this.preSelectedPrimaryMenuItem;
        this.selectedSecondaryMenuItem = menuItem;
        this.setPrimaryItemAndOpenSecondaryMenu();
        this.menuItemClicked.emit(menuItem);
    }

    onPrimaryMainMenuItemMouseEnter(selectedNetwork: PrimaryMenuItem) {
        this.setSecondaryMenu(selectedNetwork);
        if (this.isSecondaryMenuExpandable) {
            this.secondaryMenuShowed$.next(true);
        }
    }

    onNavigationMenuMouseLeave() {
        if (this.needRestoreSelectedState) {
            this.primaryMenu.setColorTheme(this.selectedPrimaryMenuItem?.cssTheme ?? null);
        }
        if (this.isSecondaryMenuExpandable) {
            this.secondaryMenuShowed$.next(false);
            this.secondaryMenuCollapsed$.next(true);
        } else if (this.needRestoreSelectedState) {
            this.setSecondaryMenu(this.selectedPrimaryMenuItem);
        }
    }

    onPrimaryMainMenuItemClicked(selectedNetwork: PrimaryMenuItem) {
        this.setSecondaryMenu(selectedNetwork);
        this.secondaryMenuShowed$.next(false);
        this.isSecondaryMenuExpandable = selectedNetwork.type !== NavigationBarItemType.Main;
        if (!isNullOrUndefined(selectedNetwork.route)) {
            this.primaryMenu.setSelectedPrimaryMenuItem(selectedNetwork);
            this.menuItemClicked.emit({name: selectedNetwork.menuTitle, route: selectedNetwork.route});
        }
    }

    onChangeColorTheme(cssTheme: {[key: string]: string}) {
        this.setNetworkTheme(cssTheme);
    }

    toggleMenu() {
        this.secondaryMenuCollapsed$.next(!this.secondaryMenuCollapsed$.getValue());
        this.isSecondaryMenuExpandable = this.secondaryMenuCollapsed$.getValue();
    }

    resetSecondaryMenu() {
        this.secondaryMenuItems$.next([]);
        this.secondaryMenuName$.next('');
        this.secondaryMenuLogoSrc$.next('');
        this.secondaryMenuCollapsed$.next(true);
        this.preSelectedPrimaryMenuItem = null;
    }

    private setPrimaryItemAndOpenSecondaryMenu() {
        this.primaryMenu.setSelectedPrimaryMenuItem(this.selectedPrimaryMenuItem);
        this.secondaryMenuCollapsed$.next(false);
        this.secondaryMenuShowed$.next(true);
    }

    private setSecondaryMenu(selectedNetwork: PrimaryMenuItem) {
        if (selectedNetwork.type === NavigationBarItemType.Main) {
            this.secondaryMenuItems$.next(selectedNetwork?.menuItems ?? []);
            this.secondaryMenuName$.next(selectedNetwork?.menuTitle ?? '');
            this.secondaryMenuLogoSrc$.next(selectedNetwork?.menuLogoSrc ?? '');
            this.preSelectedPrimaryMenuItem = selectedNetwork;
        }
        this.secondaryMenuCollapsed$.next(selectedNetwork.type !== NavigationBarItemType.Main);
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

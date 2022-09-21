import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Optional,
    Output,
    Renderer2
} from '@angular/core';
import {Location} from '@angular/common';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {NavigationEnd, Router} from '@angular/router';
import {filter, takeUntil, tap} from 'rxjs/operators';
import {fromEvent, merge, Subject} from 'rxjs';
import {WindowService} from '@ironsource/fusion-ui/services/window';
import {MenuItem, MenuItemAdditionalData, MenuService} from '@ironsource/fusion-ui/components/menu/common/base';

const LEAVE_MENU_TIME_INTERVAL = 2000;

@Component({
    selector: 'fusion-menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuListComponent implements OnDestroy, OnInit {
    @Input() menuItems: MenuItem[];
    @Output() menuAdditionalItemClicked = new EventEmitter<MenuItemAdditionalData>();
    @Output() menuItemClicked = new EventEmitter<MenuItem>();
    @Output() routeChanged = new EventEmitter<void>();
    private currItemLi: HTMLElement;
    private lastItemLi: HTMLElement;
    private changeMenuSelectedItem: boolean;
    private lastSelectedItem: MenuItem;
    private leaveMenuTimeout: any;
    private onDestroy$ = new Subject();

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private menuService: MenuService,
        @Optional() private router: Router,
        private renderer: Renderer2,
        private windowService: WindowService,
        private location: Location
    ) {}

    ngOnInit() {
        this.initNativeStateChangeEvent(this.windowService.nativeWindow);
        // set selected by menu item by route changed
        if (this.router) {
            this.router.events
                .pipe(
                    takeUntil(this.onDestroy$),
                    filter(event => event instanceof NavigationEnd),
                    tap((event: NavigationEnd) => {
                        this.routeChanged.emit();
                        const url = event.url === '/' ? event.urlAfterRedirects : event.url;
                        this.menuService.setSelectedByRoute(url);
                        this.changeDetectorRef.markForCheck();
                    })
                )
                .subscribe();
        } else {
            merge(fromEvent(window, 'stateChanged'), fromEvent(window, 'popstate'))
                .pipe(takeUntil(this.onDestroy$))
                .subscribe(this.onWindowNavigationSync.bind(this));
        }

        fromEvent(window, 'navigationSync').pipe(takeUntil(this.onDestroy$)).subscribe(this.onWindowNavigationSync.bind(this));
    }

    initNativeStateChangeEvent(window: Window) {
        const pushState = window.history.pushState;
        window.history.pushState = (...args) => {
            pushState.apply(history, args);
            const event = new CustomEvent('stateChanged', {detail: {args}});
            window.dispatchEvent(event);
        };
    }

    selectItem(item: MenuItem, itemLi: HTMLElement) {
        if (item.redirect) {
            this.menuService.setPlatformMenuPath(item.platformMenuPath); // set data for DSI 1.5 menu pre-selected
        } else {
            if (!item.children) {
                this.lastSelectedItem = item;
                this.menuService.setSelected(item);
            } else {
                this.itemClicked(itemLi);
            }
        }

        this.menuItemClicked.emit(item);
    }

    additionalItemClick(event, item: MenuItemAdditionalData) {
        event.stopPropagation();
        event.preventDefault();
        if (item.route) {
            this.redirectToPage(item.route);
        }

        this.menuAdditionalItemClicked.emit(item);
    }

    isSelected(item: MenuItem) {
        return this.menuService.isSelected(item);
    }

    isOpened(item: MenuItem) {
        return this.menuService.isOpened(item);
    }

    /**
     * When clicking a parent element on the main menu, this function is triggered and checks if it needs to open/close any item
     */
    itemClicked(itemLi: HTMLElement) {
        if (itemLi.classList.contains('open')) {
            this.renderer.removeClass(itemLi, 'open');

            if (itemLi.classList.contains('active')) {
                this.currItemLi = itemLi;
            }
            this.changeMenuSelectedItem = true;
        } else {
            if (this.lastItemLi && this.lastItemLi.classList.contains('open')) {
                this.renderer.removeClass(this.lastItemLi, 'open');

                if (this.lastItemLi.classList.contains('active')) {
                    this.currItemLi = this.lastItemLi;
                }

                this.changeMenuSelectedItem = true;
            } else {
                this.currItemLi = itemLi;
                this.changeMenuSelectedItem = true;
            }
            this.renderer.addClass(itemLi, 'open');
            this.lastItemLi = itemLi;
        }
    }

    /**
     * If the menu was closed but no other item was clicked, this function assigns the last item as the open one
     */
    reopenClosedMenuItem() {
        if (!this.currItemLi || (this.currItemLi === this.lastItemLi && !this.currItemLi.classList.contains('active'))) {
            this.renderer.removeClass(this.lastItemLi, 'open');
        } else {
            if (this.currItemLi.classList.contains('active')) {
                this.renderer.addClass(this.currItemLi, 'open');
                if (!isNullOrUndefined(this.lastItemLi) && this.currItemLi !== this.lastItemLi) {
                    this.renderer.removeClass(this.lastItemLi, 'open');
                    this.lastItemLi = this.currItemLi;
                }

                this.changeMenuSelectedItem = false;
            }
        }
    }

    mouseOverMenu() {
        if (this.changeMenuSelectedItem) {
            if (!this.leaveMenuTimeout) {
                this.leaveMenuTimeout = setTimeout(() => this.reopenClosedMenuItem(), LEAVE_MENU_TIME_INTERVAL);
            }
        }
    }

    mouseEnterMenu() {
        clearTimeout(this.leaveMenuTimeout);
        this.leaveMenuTimeout = null;
    }

    redirectToPage(path: string, options?: any): Promise<boolean> {
        const routeCommand = [path];
        if (options && options.param) {
            routeCommand.push(options.param);
            delete options.param;
        }

        if (this.router) {
            return this.router.navigate(routeCommand, options);
        }
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onWindowNavigationSync(event: CustomEvent) {
        const prefix = event.detail?.preffix || '';
        const pathname = !!prefix
            ? this.windowService.nativeWindow.location.pathname.replace(prefix, '')
            : this.windowService.nativeWindow.location.pathname;
        this.menuService.setSelectedByRoute(pathname);
        this.changeDetectorRef.detectChanges();

        console.log('::', this.router.url);
        if (!!event.detail?.usenav) {
            this.router.navigateByUrl(pathname);
        } else {
            this.location.go(pathname);
        }
        this.routeChanged.emit();
    }
}

import {ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter, OnDestroy, Optional} from '@angular/core';
import {SidebarMenuItem} from '@ironsource/fusion-ui/components/sidebar/common/entities';
import {SidebarMenuService} from '@ironsource/fusion-ui/components/sidebar/common/services';
import {delay, switchMap, takeUntil, tap} from 'rxjs/operators';
import {NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {BehaviorSubject, fromEvent, iif, merge, of, Subject} from 'rxjs';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {WindowService} from '@ironsource/fusion-ui/services/window';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

@Component({
    selector: 'fusion-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
    styleUrls: ['./sidebar-menu.component.scss', './sidebar-menu-mobile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarMenuComponent implements OnInit, OnDestroy {
    @Input() set menuItems(value: SidebarMenuItem[]) {
        this.items = value;
    }
    @Input() set pathNameNormalizeRegex(value: RegExp) {
        this.pathRegex = value;
    }
    @Output() menuItemClicked = new EventEmitter<SidebarMenuItem>();
    @Output() navigationEnded = new EventEmitter();

    items: SidebarMenuItem[];
    pathRegex: RegExp;

    openedMenuItem$ = this.sidebarMenuService.openedMenuItem$;
    selectedMenuItem$ = this.sidebarMenuService.selectedMenuItem$;
    activeMenuItem$ = this.sidebarMenuService.activeMenuItem$;

    isReturnToMenuMobile$ = new BehaviorSubject(false);

    showedItem$ = this.openedMenuItem$.asObservable().pipe(switchMap(data => iif(() => !!data, of(data), of(null).pipe(delay(1000)))));

    private leaveMenuTimeout: any;

    private onDestroy$ = new Subject();

    constructor(
        @Optional() private router: Router,
        private sidebarMenuService: SidebarMenuService,
        private logService: LogService,
        private windowService: WindowService
    ) {}

    ngOnInit(): void {
        this.initNavigationEvents();
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    initNavigationEvents() {
        if (!isNullOrUndefined(this.router)) {
            this.sidebarMenuService.setMenuByActiveRoute(this.items, this.normalizeActiveRoute(this.router.url));
            this.router.events.pipe(takeUntil(this.onDestroy$)).subscribe(event => {
                if (event instanceof NavigationStart) {
                    this.sidebarMenuService.setMenuByActiveRoute(this.items, this.normalizeActiveRoute(event.url));
                }
                if (event instanceof NavigationEnd) {
                    if (event.url !== event.urlAfterRedirects) {
                        this.sidebarMenuService.setMenuByActiveRoute(this.items, this.normalizeActiveRoute(event.urlAfterRedirects));
                    }
                    this.navigationEnded.emit();
                }
                if (event instanceof NavigationError) {
                    this.logService.error(event.error);
                }
            });
        } else {
            const nativeWindow = this.windowService.nativeWindow;
            this.sidebarMenuService.setMenuByActiveRoute(this.items, this.normalizeActiveRoute(nativeWindow.location.pathname));
            this.initNativeStateChangeEvent(nativeWindow);
            merge(fromEvent(window, 'stateChanged'), fromEvent(window, 'popstate'))
                .pipe(
                    takeUntil(this.onDestroy$),
                    tap(data => {
                        this.navigationEnded.emit();
                        this.sidebarMenuService.setMenuByActiveRoute(this.items, this.normalizeActiveRoute(nativeWindow.location.pathname));
                    })
                )
                .subscribe();
        }
    }

    /**
     * Used for fusion native (without this.router)
     */
    initNativeStateChangeEvent(window: Window) {
        const pushState = window.history.pushState;
        window.history.pushState = (...args) => {
            pushState.apply(history, args);
            const event = new CustomEvent('stateChanged', {detail: {args}});
            window.dispatchEvent(event);
        };
    }

    mouseEnterMenu() {
        clearTimeout(this.leaveMenuTimeout);
        this.leaveMenuTimeout = null;
    }

    onMouseLeave() {
        if (!this.isReturnToMenuMobile$.getValue()) {
            // do not reopen on mobile
            this.leaveMenuTimeout = setTimeout(() => this.reopenClosedMenuItem(), 1000);
        }
    }

    onMenuItemClicked($event: Event, menuItem: SidebarMenuItem) {
        if (!!$event) {
            $event.stopPropagation();
            const triggerHrefEvent = (menuItem.routeConfigurations?.triggerHrefEvent ?? false) || !!menuItem.routeConfigurations?.target;
            if (!triggerHrefEvent) {
                $event.preventDefault();
            }
        }
        // check for check on return icon in mobile media size
        this.isReturnToMenuMobile$.next(!!($event.target as Element).closest('.fu-sidebar-menu-mobile-return-icon'));

        if (!menuItem.children) {
            this.menuItemClicked.emit(menuItem);
        } else {
            this.setMenuItemOpenedState(menuItem);
        }
    }

    private normalizeActiveRoute(pathName: string): string {
        return this.sidebarMenuService.normalizeActiveRoute(pathName, this.pathRegex);
    }

    private setMenuItemOpenedState(menuItem: SidebarMenuItem) {
        this.openedMenuItem$.next(this.openedMenuItem$.getValue() === menuItem ? null : menuItem);
    }

    private reopenClosedMenuItem() {
        this.openedMenuItem$.next(this.selectedMenuItem$.getValue() ? this.selectedMenuItem$.getValue() : null);
    }
}

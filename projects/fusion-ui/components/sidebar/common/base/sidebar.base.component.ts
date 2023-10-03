import {Directive, ElementRef, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {BehaviorSubject, fromEvent, merge, Subject, Subscription} from 'rxjs';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {takeUntil} from 'rxjs/operators';
import {SidebarMenuItem, SidebarConfiguration} from '@ironsource/fusion-ui/components/sidebar/common/entities';
import {SidebarMenuService} from '@ironsource/fusion-ui/components/sidebar/common/services';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {WindowService} from '@ironsource/fusion-ui/services/window';

@Directive()
export abstract class SidebarBaseComponent implements OnInit, OnDestroy {
    @Input() set configuration(value: SidebarConfiguration) {
        this.menuItems = value?.menuItems ?? [];
        this.user = value?.user;
        this.dynamicContent = value?.sidebarDynamicContent;
        this.pathNameNormalizeRegex = value?.pathNameNormalizeRegex;
        this.isLogoClickable = !!value?.logoClickable;
    }
    @Input() set sidebarOpen(value: boolean) {
        this.setSidebarState(value);
    }
    @Input() saveSidebarState = true;

    @Output() sidebarOpenChange = new EventEmitter<boolean>();
    @Output() sidebarMenuItemClicked = new EventEmitter<SidebarMenuItem>();
    @Output() navigationEnded = new EventEmitter();
    @Output() sidebarClosedHovered = new EventEmitter<boolean>();
    @Output() logoutIconClicked = new EventEmitter<LayoutUser>();
    @Output() logoClicked = new EventEmitter();

    // Must be set to host!
    @HostBinding('class.fu-sidebar-closed') get sidebarClosed() {
        return !this.isSidebarOpen;
    }

    menuItems: SidebarMenuItem[] = [];
    user: LayoutUser;
    dynamicContent: DynamicComponentConfiguration;
    pathNameNormalizeRegex: RegExp;

    isLogoClickable = false;
    isSidebarOpen: boolean;

    openedMenuItem$ = this.sidebarMenuService.openedMenuItem$;

    // sidebar closed but need expand it by mouse over
    isSidebarClosedHovered$ = new BehaviorSubject(false);

    // for sidebar closed mouse events (closed-open)
    private listenHostMouseEvents$ = new BehaviorSubject(true);
    private sidebarMouseEventSubscription$: Subscription;

    private onDestroy$ = new Subject();

    constructor(private windowRef: WindowService, private elementRef: ElementRef, private sidebarMenuService: SidebarMenuService) {}

    ngOnInit() {
        // emit state to host
        this.sidebarOpenChange.emit(this.isSidebarOpen);

        // init mouse events on host (if closed)
        this.listenHostMouseEvents$.asObservable().pipe(takeUntil(this.onDestroy$)).subscribe(this.initHostMouseEventListeners.bind(this));

        if (!this.saveSidebarState) {
            this.windowRef.nativeWindow.localStorage.removeItem('sidebarState');
        }
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onLogoClicked() {
        if (this.isLogoClickable) {
            this.logoClicked.emit();
        }
    }

    onMenuItemClicked(menuItem: SidebarMenuItem) {
        this.sidebarMenuItemClicked.emit(menuItem);
    }

    onNavigationEnded() {
        this.navigationEnded.emit();
    }

    onLogoutIconClicked() {
        this.logoutIconClicked.emit(this.user);
    }

    private initHostMouseEventListeners(isClosed: boolean): void {
        if (isClosed) {
            this.sidebarMouseEventSubscription$ = merge(
                fromEvent(this.elementRef.nativeElement, 'mouseenter'),
                fromEvent(this.elementRef.nativeElement, 'mouseleave')
            )
                .pipe(takeUntil(this.onDestroy$))
                .subscribe(($event: MouseEvent) => {
                    const sidebarClosedHovered = this.isSidebarOpen ? false : $event.type === 'mouseenter';
                    // for mouseenter
                    this.isSidebarClosedHovered$.next(sidebarClosedHovered);
                    this.sidebarClosedHovered.emit(sidebarClosedHovered);
                });
        } else {
            if (this.sidebarMouseEventSubscription$ && typeof this.sidebarMouseEventSubscription$.unsubscribe === 'function') {
                this.sidebarMouseEventSubscription$.unsubscribe();
                this.sidebarMouseEventSubscription$ = null;
            }
        }
    }

    private setSidebarState(isOpen: boolean) {
        this.isSidebarOpen = isNullOrUndefined(isOpen) ? this.getSidebarState() : isOpen;
        if (this.saveSidebarState) {
            this.windowRef.nativeWindow.localStorage.setItem('sidebarState', JSON.stringify(this.isSidebarOpen));
        }
        // activate sidebar mouse listeners
        this.listenHostMouseEvents$.next(!this.isSidebarOpen);
    }

    private getSidebarState(): boolean {
        const storedState = JSON.parse(this.windowRef.nativeWindow.localStorage.getItem('sidebarState') ?? 'true');
        return !isNullOrUndefined(storedState) ? storedState : true;
    }
}

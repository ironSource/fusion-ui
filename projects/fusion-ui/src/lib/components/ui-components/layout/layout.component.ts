import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {LayoutHeaderComponentConfiguration, LayoutHeaderContentTitle, PageHeaderPosition} from './layout-header/layout-header-entity';
import {SidebarConfiguration} from '../sidebar/sidebar.entity';
import {LayoutComponentConfiguration, LayoutMediaType, LayoutForceScreenMode, LayoutUser} from './layout.entity';
import {BehaviorSubject, fromEvent, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {SidebarMenuItem} from '../sidebar/sidebar-menu/sidebar-menu.entity';
import {DynamicComponentConfiguration} from '../dynamic-components/dynamic-component';
import {SCROLL_OFFSET_FOR_PAGE_TITLE} from './layout-config';
import {isNullOrUndefined} from '../../../utils';

@Component({
    selector: 'fusion-layout',
    templateUrl: './layout.component.html',
    styleUrls: [
        './layout.component.scss',
        './layout-tablet.component.scss',
        './layout-mobile.component.scss',
        './layout-themes.component.scss'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input() set configuration(value: LayoutComponentConfiguration) {
        this.sidebarConfiguration = {
            ...this.sidebarConfiguration,
            menuItems: value?.sidebarMenuItems ?? [],
            user: value?.user,
            pathNameNormalizeRegex: value?.pathNameNormalizeRegex,
            logoClickable: value?.logoClickable
        };
        this.setHeaderBehaviour(value?.headerConfiguration?.title);

        this.headerConfiguration = {...value?.headerConfiguration, ...{user: value?.user}};
    }
    @Input() set sidebarDynamicContent(value: DynamicComponentConfiguration) {
        this.sidebarConfiguration = {...this.sidebarConfiguration, sidebarDynamicContent: value};
    }
    @Input() forceScreenMode: LayoutForceScreenMode;

    @Output() menuSidebarItemClicked = new EventEmitter<SidebarMenuItem>();
    @Output() menuHeaderItemClicked = new EventEmitter<SidebarMenuItem>();
    @Output() routeNavigationEnded = new EventEmitter();
    @Output() userLogout = new EventEmitter<LayoutUser>();
    @Output() logoClicked = new EventEmitter();

    @ViewChild('mainContent', {static: true}) mainContent: ElementRef;

    // for media-size detection used CSS class 'fu-screen-size-detection' (see in SCSS file)
    @ViewChild('mediaSize', {static: true}) mediaSizeDetector: ElementRef;

    @HostBinding('class') get forceModeClass(): string {
        return this.forceScreenMode ? `fu-force-${this.forceScreenMode}` : null;
    }

    sidebarConfiguration: SidebarConfiguration = {};
    sidebarOpen: boolean;

    headerConfiguration: LayoutHeaderComponentConfiguration;

    pageHeaderTitle$ = new BehaviorSubject<LayoutHeaderContentTitle>(null);
    pageHeaderBehaviourType$ = new BehaviorSubject<string>('none');
    pageHeaderPositionEnum = PageHeaderPosition;
    pageHeaderPosition$ = new BehaviorSubject<PageHeaderPosition>(PageHeaderPosition.OnTopPageContent);

    sidebarClosedHovered$ = new BehaviorSubject<boolean>(false);

    private onDestroy$ = new Subject();
    private currentMediaSizeType: LayoutMediaType;

    constructor(private cdRef: ChangeDetectorRef) {}

    ngOnInit() {
        this.initResizeListener();
        this.initScrollListener();
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    /**
     * Here will checked initial media-type (Desktop, Tablet, Mobile).
     * in case media-type not desktop will set sidebar closed (collapsed).
     */
    ngAfterViewInit() {
        // get current media-type size
        this.currentMediaSizeType = this.getMediaType();
        // for init in tablet and mobile - set sidebar close
        if (this.currentMediaSizeType !== LayoutMediaType.Desktop) {
            this.forceSidebarStateChange(false);
        }
    }

    /**
     * Emitted from header. Occur by click on 'hamburger' icon
     */
    onSidebarStateChanged() {
        this.sidebarOpen = !this.sidebarOpen;

        if (this.currentMediaSizeType !== LayoutMediaType.Desktop) {
            // for tablet and mobile set closed-hovered
            this.sidebarClosedHovered$.next(this.sidebarOpen);
        }
    }

    /**
     * Emitted from header. Occur by menu item in header menu clicked
     * - menuItem
     */
    onHeaderMenuItemClicked(menuItem: SidebarMenuItem) {
        this.menuHeaderItemClicked.emit(menuItem);
    }

    /**
     * Emitted from side-bar. Occur by menu item in side-bar clicked
     * - menuItem
     */
    onSidebarMenuItemClicked(menuItem: SidebarMenuItem) {
        this.menuSidebarItemClicked.emit(menuItem);
    }

    /**
     * Emitted from side-bar. Occur when sidebar closed (collapsed) and mouse over it.
     * - isHovered: mouse on sidebar - true
     */
    onSidebarClosedHovered(isHovered: boolean) {
        this.sidebarClosedHovered$.next(isHovered);
    }

    /**
     * Occur when user clicked on main content overlay. (relevant for mobile media-type only)
     */
    onMobileOverlayClicked() {
        this.sidebarOpen = !this.sidebarOpen;
        this.sidebarClosedHovered$.next(this.sidebarOpen);
    }

    /**
     * Emitted from side-bar. Occur when user click logout icon. (rendered in sidebar for mobile media-type only)
     * - user
     */
    onLogoutIconClicked(user: LayoutUser) {
        this.userLogout.emit(user);
    }

    /**
     * Emitted from side-bar. Occur when user clicked on logo
     */
    onLogoClicked() {
        this.logoClicked.emit();
    }

    /**
     * Emitted from side-bar. Occur when route navigation ended (side-bar has observer for it)
     */
    onNavigationEnded() {
        this.mainContentScrollTop();

        // close sidebar (menu) for tablet and mobile
        if (this.currentMediaSizeType !== LayoutMediaType.Desktop && !this.forceScreenMode) {
            this.sidebarOpen = !this.sidebarOpen;
            this.sidebarClosedHovered$.next(this.sidebarOpen);
        }

        // emit event to consumer
        this.routeNavigationEnded.emit();
    }

    /**
     * Make scroll top for the main content
     * - offset (optional, default - 0)
     */
    mainContentScrollTop(offset = 0) {
        if (this.mainContent) {
            this.mainContent.nativeElement.scrollTop = offset;
        }
    }

    showPageHeaderContent(hasContent: boolean): boolean {
        return (
            hasContent &&
            (this.pageHeaderPosition$.getValue() !== PageHeaderPosition.OnLayoutHeader ||
                this.pageHeaderBehaviourType$.getValue() === 'fixed')
        );
    }

    /**
     * Subscribe on window resize event for media-type size check.
     */
    private initResizeListener() {
        fromEvent(window, 'resize')
            .pipe(takeUntil(this.onDestroy$), debounceTime(100), distinctUntilChanged())
            .subscribe(() => {
                const prevMediaSizeType = this.currentMediaSizeType;
                this.currentMediaSizeType = this.getMediaType();

                // on media size type changed by resize
                if (prevMediaSizeType !== this.currentMediaSizeType) {
                    // in case sidebar was not collapsed and new mediasize tablet or mobile - close sidebar
                    if (this.sidebarOpen && this.currentMediaSizeType !== LayoutMediaType.Desktop) {
                        this.sidebarClosedHovered$.next(true);
                    } else if (this.sidebarOpen && this.currentMediaSizeType === LayoutMediaType.Desktop) {
                        this.sidebarClosedHovered$.next(false);
                    }
                }
            });
    }

    /**
     * Scroll on main content listener used for page header behaviour
     */
    private initScrollListener() {
        fromEvent(this.mainContent.nativeElement, 'scroll')
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(($event: Event) => {
                const scrollPosition = ($event.target as Element).scrollTop;
                this.pageHeaderPosition$.next(
                    scrollPosition >= SCROLL_OFFSET_FOR_PAGE_TITLE ? PageHeaderPosition.OnLayoutHeader : PageHeaderPosition.OnTopPageContent
                );
            });
    }

    private setHeaderBehaviour(value: LayoutHeaderContentTitle) {
        if (!!value && value.text && value.type && value.type !== 'static') {
            this.pageHeaderTitle$.next({
                text: value?.text,
                content: value?.content,
                type: value?.type
            });
            this.pageHeaderBehaviourType$.next(value?.type);
        } else {
            this.pageHeaderTitle$.next(null);
            this.pageHeaderBehaviourType$.next(value?.text ? 'static' : 'none');
        }
    }

    /**
     * For detection media size (supported: desktop, tablet, mobile)
     * used hidden DOM element for it
     */
    private getMediaType(): LayoutMediaType {
        // FU-89: force screen mode used for "emulation" screen size
        if (!isNullOrUndefined(this.forceScreenMode)) {
            return this.getForcedMediaType();
        }
        const content = window.getComputedStyle(this.mediaSizeDetector.nativeElement).content;
        // check if found media size detector content
        if (content) {
            // get enum value or return default (Desktop)
            return LayoutMediaType[content.replace(/\"/g, '')] ?? LayoutMediaType.Desktop;
        }
        return LayoutMediaType.Desktop;
    }

    private getForcedMediaType(): LayoutMediaType {
        switch (this.forceScreenMode) {
            case 'desktop':
                return LayoutMediaType.Desktop;
            case 'tablet':
                return LayoutMediaType.Tablet;
            case 'mobile':
                return LayoutMediaType.Mobile;
        }
        return null;
    }

    /**
     * For media-size tablet and mobile
     * - isClosed
     */
    private forceSidebarStateChange(isClosed: boolean) {
        this.sidebarOpen = isClosed;
        this.cdRef.detectChanges();
    }
}

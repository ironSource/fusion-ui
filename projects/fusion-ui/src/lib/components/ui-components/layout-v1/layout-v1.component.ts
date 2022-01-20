import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {MenuItem} from '../menu/menu-item';
import {HeaderState} from '../header/header-state';
import {CacheType} from '../../../services/cache/cache-entities';
import {CacheService} from '../../../services/cache/cache.service';
import {Subject} from 'rxjs';
import {MenuItemAdditionalData} from '../menu/menu-item-additional-data';

@Component({
    selector: 'fusion-layout-v1',
    templateUrl: './layout-v1.component.html',
    styleUrls: ['./layout-v1.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutV1Component implements OnDestroy {
    @Input() loading: boolean;
    @Input() menuItems: MenuItem[] = [];
    @Input() state: HeaderState = {};
    @Input() scrollTopOnRouteChange: boolean;
    @Input() userName = '';
    @Input() headerPrimaryMenuIconName: string | {iconName: string; iconVersion?: string} = {iconName: 'user', iconVersion: 'v1'};
    @Input() headerMenuUserNameIcon: string;
    @Input() headerPrimaryMenuItems: MenuItem[] = [];
    @Input() headerSecondaryMenuItems: MenuItem[] = [];

    @Output() menuItemClick = new EventEmitter<MenuItem>();
    @Output() menuAdditionalItemClick = new EventEmitter<MenuItem>();
    @Output() menuStateChanged = new EventEmitter<boolean>();
    @Output() logoClicked = new EventEmitter();

    @ViewChild('mainContent', {static: true}) mainContent: ElementRef;

    public isMenuOpened: boolean;
    public isMainMenuCollapsed: boolean = this.cacheService.get(CacheType.SessionStorage, 'menuCollapsed') || false;
    private onDestroy$ = new Subject();

    constructor(private cacheService: CacheService) {}

    onMenuItemClicked(item: MenuItem) {
        this.menuItemClick.emit(item);
    }

    onMenuAdditionalItemClicked(item: MenuItemAdditionalData) {
        this.menuAdditionalItemClick.emit(item);
    }

    onMenuStateChanged(isMainMenuCollapsed) {
        this.isMainMenuCollapsed = isMainMenuCollapsed;
        this.cacheService.set(CacheType.SessionStorage, 'menuCollapsed', this.isMainMenuCollapsed);
        this.menuStateChanged.emit(this.isMainMenuCollapsed);
    }

    onMouseLeave() {
        this.isMenuOpened = false;
    }

    onMouseEnter() {
        this.isMenuOpened = true;
    }

    onLogoClicked() {
        this.logoClicked.emit();
    }

    routeChanged() {
        if (this.scrollTopOnRouteChange && this.mainContent) {
            this.mainContent.nativeElement.scrollTop = 0;
        }
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}

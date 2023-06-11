import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {HeaderState} from '@ironsource/fusion-ui/components/header/common/base';
import {Subject} from 'rxjs';
import {MenuItem, MenuItemAdditionalData} from '@ironsource/fusion-ui/components/menu/common/base';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';
import {WindowService} from '@ironsource/fusion-ui/services/window';

@Component({
    selector: 'fusion-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnDestroy {
    @Input() loading: boolean;
    @Input() menuItems: MenuItem[] = [];
    @Input() state: HeaderState = {};
    @Input() scrollTopOnRouteChange: boolean;
    @Input() userName = '';
    @Input() headerPrimaryMenuIconName: IconData = {iconName: 'user', iconVersion: 'v1'};
    @Input() headerMenuUserNameIcon: string;
    @Input() headerPrimaryMenuItems: MenuItem[] = [];
    @Input() headerSecondaryMenuItems: MenuItem[] = [];

    @Output() menuItemClick = new EventEmitter<MenuItem>();
    @Output() menuAdditionalItemClick = new EventEmitter<MenuItem>();
    @Output() menuStateChanged = new EventEmitter<boolean>();
    @Output() logoClicked = new EventEmitter();

    @ViewChild('mainContent', {static: true}) mainContent: ElementRef;

    public isMenuOpened: boolean;
    public isMainMenuCollapsed: boolean = JSON.parse(this.windowRef.nativeWindow.sessionStorage.getItem('menuCollapsed') ?? 'false');
    private onDestroy$ = new Subject();

    constructor(private windowRef: WindowService) {}

    onMenuItemClicked(item: MenuItem) {
        this.menuItemClick.emit(item);
    }

    onMenuAdditionalItemClicked(item: MenuItemAdditionalData) {
        this.menuAdditionalItemClick.emit(item);
    }

    onMenuStateChanged(isMainMenuCollapsed) {
        this.isMainMenuCollapsed = isMainMenuCollapsed;
        this.windowRef.nativeWindow.sessionStorage.setItem('menuCollapsed', JSON.stringify(this.isMainMenuCollapsed));
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

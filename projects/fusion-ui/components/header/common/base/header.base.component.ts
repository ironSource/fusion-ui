import {EventEmitter, Input, Output, ViewChild, ElementRef, Renderer2, Directive} from '@angular/core';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {HeaderState} from './header-state';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';
import {StorageService, StorageType} from '@ironsource/fusion-ui/services/stogare';

@Directive()
export abstract class HeaderBaseComponent {
    @ViewChild('menuAction', {read: ElementRef}) set menuAction(value: ElementRef) {
        this.onMenuActionChanged(value);
    }

    @Input() primaryMenuIconName: IconData = {iconName: 'user', iconVersion: 'v1'};
    @Input() primaryMenuItems: MenuItem[];
    @Input() secondaryMenuItems: MenuItem[];
    @Input() userName: string;
    @Input() headerMenuUserNameIcon: string;

    @Input() set state(value: HeaderState) {
        this.onStateChanged(value);
    }

    @Input() isMainMenuCollapsed: boolean;
    @Output() menuItemClick = new EventEmitter<MenuItem>();
    @Output() menuStateChanged = new EventEmitter();
    @Output() logoClick = new EventEmitter();

    get state(): HeaderState {
        return this._state;
    }

    get menuAction(): ElementRef {
        return this._menuAction;
    }

    public userData: any = {};
    public isUserMenuOpened = false;
    public isHelpMenuOpened = false;

    private _state: HeaderState;
    private _menuAction: ElementRef;

    constructor(private renderer: Renderer2, private storageService: StorageService) {}

    changeMenuState() {
        this.isMainMenuCollapsed = !this.isMainMenuCollapsed;
        this.storageService.set(StorageType.SessionStorage, 'menuCollapsed', this.isMainMenuCollapsed);
        // this.windowRef.nativeWindow.sessionStorage.setItem('menuCollapsed', JSON.stringify(this.isMainMenuCollapsed));
        this.menuStateChanged.emit(this.isMainMenuCollapsed);
    }

    onOutsideMenuClick(target) {
        if (isNullOrUndefined(target.closest('fusion-dynamic-components.menu-item-content'))) {
            this.isUserMenuOpened = false;
        }
    }

    onUserMenuClicked() {
        this.isUserMenuOpened = !this.isUserMenuOpened;
    }

    onMenuItemClicked(event, item) {
        event.preventDefault();
        this.menuItemClick.emit(item);
    }

    onHelpMenuClicked() {
        this.isHelpMenuOpened = !this.isHelpMenuOpened;
    }

    onOutsideHelpMenuClick(target) {
        if (isNullOrUndefined(target.closest('fusion-dynamic-components.menu-item-content'))) {
            this.isHelpMenuOpened = false;
        }
    }

    onLogoClicked($event) {
        $event.preventDefault();
        this.logoClick.emit();
    }

    private onStateChanged(value: HeaderState) {
        if (this._state && this._state.element) {
            this.clearMenuActionContent();
        }
        if (value && value.element) {
            this.handleMenuActionElement(value.element);
        }
        this._state = value;
    }

    private onMenuActionChanged(value: ElementRef) {
        this._menuAction = value;
        if (value && this.state && this.state.element) {
            this.handleMenuActionElement(this.state.element);
        }
    }

    private handleMenuActionElement(element: Node) {
        const nativeElem = this.menuAction ? this.menuAction.nativeElement : null;
        if (nativeElem) {
            this.clearMenuActionContent();
            this.renderer.appendChild(nativeElem, element);
        }
    }

    private clearMenuActionContent(): void {
        const nativeElem = this.menuAction ? this.menuAction.nativeElement : null;
        while (nativeElem && nativeElem.firstChild) {
            this.renderer.removeChild(nativeElem, nativeElem.firstChild);
        }
    }
}

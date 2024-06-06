import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject, Observable} from 'rxjs';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {RepositionDirective, RepositionOffset} from '@ironsource/fusion-ui/directives/reposition';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {NavigationBarItemType, PrimaryMenuItem} from '../navigation-menu.entities';
import {NavigationPopMenuComponent} from '../navigation-pop-menu/navigation-pop-menu.component';
import {map} from 'rxjs/operators';

@Component({
    selector: 'fusion-navigation-primary-menu',
    standalone: true,
    imports: [CommonModule, SvgModule, IconModule, TooltipDirective, ClickOutsideModule, RepositionDirective, NavigationPopMenuComponent],
    templateUrl: './navigation-primary-menu.component.html',
    styleUrls: ['./navigation-primary-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationPrimaryMenuComponent {
    @Input() set menuBarItems(value: PrimaryMenuItem[]) {
        if (!isNullOrUndefined(value)) {
            this.parseNavigationBarItems(value);
        }
    }

    @Input() layoutUser: LayoutUser;
    @Input() menuOpened = false;
    @Input() menuOpenForPrimaryMenuItem: PrimaryMenuItem;
    @Input() menuHoverMode = false;

    @Output() menuItemClick = new EventEmitter<MenuItem>();

    @Output() primaryMenuItemClicked = new EventEmitter<PrimaryMenuItem>();

    @Output() changeColorTheme = new EventEmitter<{[key: string]: string}>();
    @Output() toggleMenu = new EventEmitter();
    @Output() resetSecondaryMenu = new EventEmitter<void>();

    get nativeElement(): HTMLElement {
        return this.elementRef.nativeElement;
    }

    get bottomItemsTopPosition(): number {
        return (this.nativeElement.querySelector('.fu-navigation-bar-bottom-items > div:first-child') as HTMLElement)?.offsetTop ?? 0;
    }

    homeItem: PrimaryMenuItem;

    networkItems$ = new BehaviorSubject<PrimaryMenuItem[]>([]);
    bottomItems$ = new BehaviorSubject<PrimaryMenuItem[]>([]);
    showPopMenu$ = new BehaviorSubject<boolean>(false);

    selectedBarItem$ = new BehaviorSubject<PrimaryMenuItem>(null);

    menuToggleCollapsed$ = new BehaviorSubject<boolean>(false);
    menuCollapsedIcon = 'ph/arrow-line-left';
    menuExpandedIcon = 'ph/arrow-line-right';
    popMenuPosition = TooltipPosition.BottomLeft;

    popMenuOffset$: Observable<RepositionOffset> = this.selectedBarItem$.asObservable().pipe(
        map((selectedBarItem: PrimaryMenuItem) => {
            return selectedBarItem?.type === NavigationBarItemType.Main ? {x: 56, y: 48} : {x: 56};
        })
    );

    private primaryMenuOpenedItem: PrimaryMenuItem;

    defaultCssTheme: {[key: string]: string};

    constructor(private elementRef: ElementRef) {}

    onItemHover(item: PrimaryMenuItem, hoverMode: boolean) {
        if (hoverMode) {
            this.networkItemClicked(item);
        }
    }

    networkItemClicked(item: PrimaryMenuItem) {
        switch (item?.type) {
            case NavigationBarItemType.User:
                this.showPopMenu$.next(true);
                this.primaryMenuItemClicked.emit(null);
                break;
            case NavigationBarItemType.Home:
                this.setColorTheme(item.cssTheme);
                this.primaryMenuItemClicked.emit(item);
                break;
            case NavigationBarItemType.Main:
                this.primaryMenuItemClicked.emit(item);
                this.primaryMenuOpenedItem = item;
                break;
        }
    }

    onPopMenuOutsideClick(target: HTMLElement) {
        if (!target.closest('.fu-with-pop-menu')) {
            this.showPopMenu$.next(false);
        }
    }

    onPopMenuItemClicked(menuItem) {
        this.menuItemClick.emit(menuItem);
        this.showPopMenu$.next(false);
        this.setSelectedPrimaryMenuItem(null);
    }

    setColorTheme(cssTheme?: {[key: string]: string}) {
        if (!isNullOrUndefined(cssTheme)) {
            this.changeColorTheme.emit(cssTheme);
        } else if (this.defaultCssTheme) {
            this.changeColorTheme.emit(this.defaultCssTheme);
        }
    }

    setSelectedPrimaryMenuItem(menuItem: PrimaryMenuItem) {
        this.selectedBarItem$.next(menuItem);
        if (!menuItem) {
            this.resetSecondaryMenu.emit();
        }
    }

    menuToggleButtonClicked(event: MouseEvent) {
        this.menuToggleCollapsed$.next(!this.menuToggleCollapsed$.getValue());
        this.toggleMenu.emit();
    }

    private parseNavigationBarItems(value: PrimaryMenuItem[]) {
        const networkItems = [];
        const bottomItems = [];
        value.forEach((barItem: PrimaryMenuItem) => {
            switch (barItem.type) {
                case NavigationBarItemType.Home:
                    this.homeItem = barItem;
                    if (!isNullOrUndefined(barItem.cssTheme)) {
                        this.defaultCssTheme = barItem.cssTheme;
                    }
                    break;
                case NavigationBarItemType.Main:
                    networkItems.push(barItem);
                    if (isNullOrUndefined(this.defaultCssTheme) && !isNullOrUndefined(barItem.cssTheme)) {
                        this.defaultCssTheme = barItem.cssTheme;
                        this.setColorTheme();
                    }
                    break;
                default:
                    bottomItems.push(barItem);
                    break;
            }
        });
        if (isNullOrUndefined(this.selectedBarItem$.getValue())) {
            this.setSelectedPrimaryMenuItem(this.homeItem);
        }
        this.networkItems$.next(networkItems);
        this.bottomItems$.next(bottomItems);
    }
}

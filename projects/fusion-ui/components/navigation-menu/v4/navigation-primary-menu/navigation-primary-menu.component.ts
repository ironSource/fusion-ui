import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {RepositionDirective} from '@ironsource/fusion-ui/directives/reposition';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {NavigationBarItemType, PrimaryMenuItem} from '../navigation-menu.entities';
import {NavigationPopMenuComponent} from '../navigation-pop-menu/navigation-pop-menu.component';

@Component({
    selector: 'fusion-navigation-primary-menu',
    standalone: true,
    imports: [CommonModule, SvgModule, IconModule, TooltipModule, ClickOutsideModule, RepositionDirective, NavigationPopMenuComponent],
    templateUrl: './navigation-primary-menu.component.html',
    styleUrls: ['./navigation-primary-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationPrimaryMenuComponent implements OnInit {
    @Input() set menuBarItems(value: PrimaryMenuItem[]) {
        if (!isNullOrUndefined(value)) {
            this.parseNavigationBarItems(value);
        }
    }

    @Input() layoutUser: LayoutUser;
    @Input() menuOpened = false;
    @Input() menuOpenForPrimaryMenuItem: PrimaryMenuItem;

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

    menuCollapsedIcon = {iconName: 'arrowLineRight', iconVersion: 'v4'};
    menuExpandedIcon = {iconName: 'arrowLineLeft', iconVersion: 'v4'};
    popMenuPosition = TooltipPosition.BottomLeft;

    private primaryMenuOpenedItem: PrimaryMenuItem;

    defaultCssTheme: {[key: string]: string};

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {}

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
        this.setColorTheme(null);
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

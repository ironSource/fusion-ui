import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {NavigationBarItemType, NavigationMenuBarItem} from '@ironsource/fusion-ui/components/navigation-menu/v4/navigation-menu.entities';

@Component({
    selector: 'fusion-navigation-primary-menu',
    standalone: true,
    imports: [CommonModule, IconModule, TooltipModule],
    templateUrl: './navigation-primary-menu.component.html',
    styleUrls: ['./navigation-primary-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationPrimaryMenuComponent implements OnInit {
    @Input() set menuBarItems(value: NavigationMenuBarItem[]) {
        this.parseNavigationBarItems(value);
    }
    @Input() menuCollapsed = false;

    @Output() networkSelected = new EventEmitter<NavigationMenuBarItem>();
    @Output() toggleMenu = new EventEmitter();

    homeItem: NavigationMenuBarItem;

    networkItems$ = new BehaviorSubject<NavigationMenuBarItem[]>([]);
    bottomItems$ = new BehaviorSubject<NavigationMenuBarItem[]>([]);

    selectedBarItem: NavigationMenuBarItem;
    menuCollapsedIcon = {iconName: 'arrowLineRight', iconVersion: 'v4'};
    menuExpandedIcon = {iconName: 'arrowLineLeft', iconVersion: 'v4'};
    menuToggleButtonTooltip = 'Collapse side nav';

    constructor() {}

    ngOnInit(): void {}

    networkItemClicked(item) {
        this.selectedBarItem = item;
        this.networkSelected.emit(item);
    }

    private parseNavigationBarItems(value: NavigationMenuBarItem[]) {
        const networkItems = [];
        const bottomItems = [];
        value.forEach((barItem: NavigationMenuBarItem) => {
            switch (barItem.type) {
                case NavigationBarItemType.Home:
                    this.homeItem = barItem;
                    break;
                case NavigationBarItemType.Main:
                    networkItems.push(barItem);
                    break;
                case NavigationBarItemType.Bottom:
                    bottomItems.push(barItem);
                    break;
            }
        });
        this.networkItems$.next(networkItems);
        this.bottomItems$.next(bottomItems);
    }
}

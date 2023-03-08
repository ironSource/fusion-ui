import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {BehaviorSubject} from 'rxjs';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {NavigationPrimaryMenuComponent} from './navigation-primary-menu/navigation-primary-menu.component';
import {NavigationMenuBarItem} from './navigation-menu.entities';
import {MenuItem, MenuItemAdditionalData} from '@ironsource/fusion-ui/components/menu/common/base';

@Component({
    selector: 'fusion-navigation-menu',
    standalone: true,
    imports: [CommonModule, NavigationPrimaryMenuComponent],
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationMenuComponent implements OnInit {
    @Input() menuItems: NavigationMenuBarItem[];
    @Input() layoutUser: LayoutUser;

    @Output() menuAdditionalItemClicked = new EventEmitter<MenuItemAdditionalData>();
    @Output() menuItemClicked = new EventEmitter<MenuItem>();

    secondaryMenuCollapsed = new BehaviorSubject<boolean>(false);

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {}

    onMenuItemClicked(menuItem) {
        this.menuItemClicked.emit(menuItem);
    }

    networkSelected(selectedNetwork: NavigationMenuBarItem) {
        if (!isNullOrUndefined(selectedNetwork)) {
            if (selectedNetwork?.cssTheme) {
                this.setNetworkTheme(selectedNetwork?.cssTheme);
            }
        }
    }

    toggleMenu() {
        this.secondaryMenuCollapsed.next(!this.secondaryMenuCollapsed.getValue());
        console.log('collapsed', this.secondaryMenuCollapsed.getValue());
    }

    private setNetworkTheme(theme: {[key: string]: string}) {
        Object.keys(theme).forEach(key => {
            this.elementRef.nativeElement.style.setProperty(`--${key}`, theme[key]);
        });
    }
}

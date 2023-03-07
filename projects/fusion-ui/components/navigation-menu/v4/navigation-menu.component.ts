import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationPrimaryMenuComponent} from './navigation-primary-menu/navigation-primary-menu.component';
import {NavigationMenuBarItem} from '@ironsource/fusion-ui/components/navigation-menu/v4/navigation-menu.entities';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

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

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {}

    networkSelected(selectedNetwork: NavigationMenuBarItem) {
        if (!isNullOrUndefined(selectedNetwork)) {
            if (selectedNetwork?.cssTheme) {
                this.setNetworkTheme(selectedNetwork?.cssTheme);
            }
        }
    }

    private setNetworkTheme(theme: {[key: string]: string}) {
        Object.keys(theme).forEach(key => {
            this.elementRef.nativeElement.style.setProperty(`--${key}`, theme[key]);
        });
    }
}

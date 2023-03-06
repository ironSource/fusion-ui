import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationPrimaryMenuComponent} from './navigation-primary-menu/navigation-primary-menu.component';
import {NavigationMenuBarItem} from '@ironsource/fusion-ui/components/navigation-menu/v4/navigation-menu.entities';

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

    constructor() {}

    ngOnInit(): void {}
}

import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationMenuComponent} from '@ironsource/fusion-ui/components/navigation-menu/v4/navigation-menu.component';
import {NavigationMenuBarItem} from '@ironsource/fusion-ui/components/navigation-menu/v4/navigation-menu.entities';

@Component({
    selector: 'fusion-layout',
    standalone: true,
    imports: [CommonModule, NavigationMenuComponent],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
    @Input() menuItems: NavigationMenuBarItem[];

    constructor() {}

    ngOnInit(): void {}
}

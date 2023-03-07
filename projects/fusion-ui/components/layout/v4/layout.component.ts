import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationMenuComponent} from '@ironsource/fusion-ui/components/navigation-menu/v4/navigation-menu.component';
import {LayoutConfiguration} from '@ironsource/fusion-ui/components/layout/v4/layout.entities';
import {BehaviorSubject} from 'rxjs';
import {NavigationMenuBarItem} from '@ironsource/fusion-ui/components/navigation-menu/v4/navigation-menu.entities';
import {LayoutUser} from '@ironsource/fusion-ui/entities';

@Component({
    selector: 'fusion-layout',
    standalone: true,
    imports: [CommonModule, NavigationMenuComponent],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
    @Input() set configuration(value: LayoutConfiguration) {
        if (Array.isArray(value?.navigationMenuItems)) {
            this.navigationMenu$.next(value.navigationMenuItems);
        }
        this.layoutUser$.next(value?.layoutUser ?? null);
    }

    navigationMenu$ = new BehaviorSubject<NavigationMenuBarItem[]>([]);
    layoutUser$ = new BehaviorSubject<LayoutUser>(null);

    constructor() {}

    ngOnInit(): void {}
}

import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {NavigationMenuBarItem, NavigationMenuComponent} from '@ironsource/fusion-ui/components/navigation-menu/v4';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {LayoutConfiguration} from './layout.entities';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';

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

    @Output() menuItemClick = new EventEmitter<MenuItem>();

    navigationMenu$ = new BehaviorSubject<NavigationMenuBarItem[]>([]);
    layoutUser$ = new BehaviorSubject<LayoutUser>(null);

    constructor() {}

    ngOnInit(): void {}

    onMenuItemClick(item: MenuItem) {
        this.menuItemClick.emit(item);
    }
}

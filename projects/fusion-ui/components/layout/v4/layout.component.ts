import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {PrimaryMenuItem, NavigationMenuComponent} from '@ironsource/fusion-ui/components/navigation-menu/v4';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {LayoutConfiguration, LayoutHeaderConfiguration} from './layout.entities';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {LayoutHeaderComponent} from './components/layout-header/layout-header.component';

@Component({
    selector: 'fusion-layout',
    standalone: true,
    imports: [CommonModule, LayoutHeaderComponent, NavigationMenuComponent],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
    @Input() set configuration(value: LayoutConfiguration) {
        if (Array.isArray(value?.navigationMenuItems)) {
            this.navigationMenu$.next(value.navigationMenuItems);
        }

        this.layoutUser = {...value?.layoutUser} ?? null;
    }

    @Output() menuItemClick = new EventEmitter<MenuItem>();

    loading$ = new BehaviorSubject<boolean>(false);
    navigationMenu$ = new BehaviorSubject<PrimaryMenuItem[]>([]);
    layoutUser: LayoutUser;

    headerConfiguration: LayoutHeaderConfiguration;

    // todo: remove this header-title update
    title$ = new BehaviorSubject<string>('Dashboard');

    constructor() {}

    ngOnInit(): void {}

    onMenuItemClick(item: MenuItem) {
        this.menuItemClick.emit(item);

        // todo: remove this header-title update
        this.title$.next(item.name);
    }
}

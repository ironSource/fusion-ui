import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {NavigationMenuComponent, PrimaryMenuItem} from '@ironsource/fusion-ui/components/navigation-menu/v4';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {HeaderContent, LayoutConfiguration} from './layout.entities';
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
export class LayoutComponent {
    @Input() set configuration(value: LayoutConfiguration) {
        if (Array.isArray(value?.navigationMenuItems)) {
            this.navigationMenu$.next(value.navigationMenuItems);
        }
        this.layoutUser = {...value?.layoutUser} ?? null;
    }
    @Input() headerContent: HeaderContent;

    @Output() menuItemClick = new EventEmitter<MenuItem>();

    navigationMenu$ = new BehaviorSubject<PrimaryMenuItem[]>([]);
    layoutUser: LayoutUser;

    onMenuItemClick(item: MenuItem) {
        this.menuItemClick.emit(item);
    }
}

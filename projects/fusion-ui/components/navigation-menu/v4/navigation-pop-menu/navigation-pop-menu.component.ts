import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';

@Component({
    selector: 'fusion-navigation-pop-menu',
    standalone: true,
    imports: [CommonModule, IconModule],
    templateUrl: './navigation-pop-menu.component.html',
    styleUrls: ['./navigation-pop-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationPopMenuComponent implements OnInit {
    @Input() layoutUser: LayoutUser;
    @Input() menuItems: MenuItem[];

    @Output() menuItemClicked = new EventEmitter<MenuItem>();

    /** @internal */
    userIcon: IconData = {iconName: 'userCircle', iconVersion: 'v4'};

    constructor() {}

    ngOnInit(): void {}
}

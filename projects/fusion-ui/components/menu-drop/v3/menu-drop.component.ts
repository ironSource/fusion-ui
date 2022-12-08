import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {MenuDropItem} from './menu-drop.entities';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';

@Component({
    selector: 'fusion-menu-drop',
    standalone: true,
    imports: [CommonModule, ClickOutsideModule, IconModule, ButtonModule],
    templateUrl: './menu-drop.component.html',
    styleUrls: ['./menu-drop.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuDropComponent {
    @Input() buttonIcon: IconData = 'more-vert';

    @Input() set menuItems(value: MenuDropItem[]) {
        if (Array.isArray(value)) {
            this._menuItems = value;
        }
    }

    @Input() alignLeft = false;

    @Output() menuItemClicked = new EventEmitter<MenuDropItem>();

    @HostBinding('attr.id') get elementId(): string {
        return 'fu-dmb-' + this.uniqueId;
    }

    get menuItems(): MenuDropItem[] {
        return this._menuItems;
    }

    shown = false;

    private _menuItems: MenuDropItem[];
    private uniqueId = this.uniqueService.getUniqueId();

    constructor(private uniqueService: UniqueIdService) {}

    openMenu() {
        this.shown = true;
    }

    itemClicked(menuItem) {
        this.shown = false;
        this.menuItemClicked.emit(menuItem);
    }

    /** @ignore */
    onOutsideClick(target) {
        if (!target.closest('#' + this.elementId)) {
            this.shown = false;
        }
    }
}

import {Component, Input} from '@angular/core';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';

@Component({
    selector: 'fusion-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
    @Input() item: MenuItem;

    constructor() {}

    onMenuItemClicked($event: MouseEvent) {
        if (!$event.metaKey) {
            $event.preventDefault();
        } else {
            $event.stopPropagation();
        }
    }
}

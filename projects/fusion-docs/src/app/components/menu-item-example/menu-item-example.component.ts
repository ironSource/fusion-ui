import {Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-menu-item-example',
    templateUrl: './menu-item-example.component.html',
    styleUrls: ['./menu-item-example.component.scss'],
    standalone: false
})
export class MenuItemExampleComponent {
    @Input() state: boolean;
}

import {Component} from '@angular/core';

@Component({
    selector: 'fusion-dropdown-loader',
    templateUrl: './dropdown-loader.component.html',
    styleUrls: ['./dropdown-loader.component.scss'],
    standalone: false
})
export class DropdownLoaderComponent {
    iconLoader = {
        iconName: 'loading-rotate',
        iconVersion: 'v2'
    };
}

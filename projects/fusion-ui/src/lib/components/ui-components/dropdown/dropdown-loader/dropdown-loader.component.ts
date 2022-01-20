import {Component, Injector} from '@angular/core';
import {StyleBase} from '../../../style/style-base';

@Component({
    selector: 'fusion-dropdown-loader',
    templateUrl: './dropdown-loader.component.html',
    styleUrls: ['./dropdown-loader.component.scss', './dropdown-loader.component-v2.scss']
})
export class DropdownLoaderComponent extends StyleBase {
    constructor(injector: Injector) {
        super(injector);
    }
}

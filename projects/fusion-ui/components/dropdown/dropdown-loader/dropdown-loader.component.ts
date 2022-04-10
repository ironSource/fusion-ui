import {Component, Injector} from '@angular/core';
import {StyleBase} from '@ironsource/fusion-ui/components/style';

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

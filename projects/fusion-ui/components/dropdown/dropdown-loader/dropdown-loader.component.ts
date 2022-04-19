import {Component, Injector} from '@angular/core';
import {FusionBase} from '@ironsource/fusion-ui/components/fusion-base';

@Component({
    selector: 'fusion-dropdown-loader',
    templateUrl: './dropdown-loader.component.html',
    styleUrls: ['./dropdown-loader.component.scss', './dropdown-loader.component-v2.scss']
})
export class DropdownLoaderComponent extends FusionBase {
    constructor(injector: Injector) {
        super(injector);
    }
}

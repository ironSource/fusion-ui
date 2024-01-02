import {Component} from '@angular/core';
import {TabBaseComponent} from '../../common/tab.base.component';

@Component({
    selector: 'fusion-tab',
    template: '<div class="fu-tab-content"><ng-content></ng-content></div>',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent extends TabBaseComponent {}

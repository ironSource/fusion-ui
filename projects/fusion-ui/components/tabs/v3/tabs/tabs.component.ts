import {Component} from '@angular/core';
import {TabsBaseComponent} from '@ironsource/fusion-ui/components/tabs/common/tabs.base.component';

@Component({
    selector: 'fusion-tabs',
    template: '<ng-content></ng-content>',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent extends TabsBaseComponent {}

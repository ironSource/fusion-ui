import {Component, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';
import {TabsBaseComponent} from '@ironsource/fusion-ui/components/tabs/common/tabs.base.component';

@Component({
    selector: 'fusion-tabs',
    template: '<ng-content></ng-content>',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent extends TabsBaseComponent {
    /** @internal */
    @ContentChildren(TabComponent) tabList: QueryList<TabComponent>;
}

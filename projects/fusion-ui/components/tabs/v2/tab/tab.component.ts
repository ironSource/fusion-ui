import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TabBaseComponent} from '@ironsource/fusion-ui/components/tabs/v2/tab/tab.base.component';

@Component({
    selector: 'fusion-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent extends TabBaseComponent {}

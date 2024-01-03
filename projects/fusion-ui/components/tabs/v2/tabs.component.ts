import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PopupService} from '@ironsource/fusion-ui/components/popup/common/services';
import {TabsBaseComponent} from './tabs.base.component';

@Component({
    selector: 'fusion-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PopupService]
})
export class TabsComponent extends TabsBaseComponent {}

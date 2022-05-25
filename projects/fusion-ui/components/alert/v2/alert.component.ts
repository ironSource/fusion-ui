import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AlertBaseComponent} from '@ironsource/fusion-ui/components/alert/common/base';

@Component({
    selector: 'fusion-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent extends AlertBaseComponent {}

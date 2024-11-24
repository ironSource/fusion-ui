import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IconStatusBaseComponent} from '@ironsource/fusion-ui/components/icon-status/common/base';

@Component({
    selector: 'fusion-icon-status',
    templateUrl: '../common/base/icon-status.base.component.html',
    styleUrls: ['./icon-status.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class IconStatusComponent extends IconStatusBaseComponent {}

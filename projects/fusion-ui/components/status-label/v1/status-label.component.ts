import {Component} from '@angular/core';
import {StatusLabelBaseComponent} from '@ironsource/fusion-ui/components/status-label/common/base';

@Component({
    selector: 'fusion-status-label',
    templateUrl: '../common/base/status-label.base.component.html',
    styleUrls: ['../common/base/status-label.base.component.scss'],
    host: {'ui-version': '1'}
})
export class StatusLabelComponent extends StatusLabelBaseComponent {}

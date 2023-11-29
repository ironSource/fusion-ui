import {Component} from '@angular/core';
import {ErrorMessageBaseComponent} from '@ironsource/fusion-ui/components/error-message/common/base';

@Component({
    selector: 'fusion-error-message',
    templateUrl: '../common/base/error-message.base.component.html',
    styleUrls: ['./error-message.component.scss'],
    host: {'ui-version': '3'}
})
export class ErrorMessageComponent extends ErrorMessageBaseComponent {}

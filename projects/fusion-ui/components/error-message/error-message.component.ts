import {Component, Injector, Input} from '@angular/core';
import {FusionBase} from '@ironsource/fusion-ui/components/fusion-base';

@Component({
    selector: 'fusion-error-message',
    templateUrl: './error-message.component.html',
    styleUrls: ['./error-message.component.scss', './error-message.component-v2.scss']
})
export class ErrorMessageComponent extends FusionBase {
    @Input() showError: boolean;
    @Input() errorMessage: string;
    @Input() styles: any;

    constructor(injector: Injector) {
        super(injector);
    }
}

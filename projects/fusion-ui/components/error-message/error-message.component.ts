import {Component, Injector, Input} from '@angular/core';
import {FusionBaseComponent} from '@ironsource/fusion-ui/components/style';

@Component({
    selector: 'fusion-error-message',
    templateUrl: './error-message.component.html',
    styleUrls: ['./error-message.component.scss', './error-message.component-v2.scss']
})
export class ErrorMessageComponent extends FusionBaseComponent {
    @Input() showError: boolean;
    @Input() errorMessage: string;
    @Input() styles: any;

    constructor(injector: Injector) {
        super(injector);
    }
}

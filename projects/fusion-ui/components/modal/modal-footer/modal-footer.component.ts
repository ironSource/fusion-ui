import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {FusionBaseComponent} from '@ironsource/fusion-ui/components/fusion-base';

@Component({
    selector: 'fusion-modal-footer',
    templateUrl: './modal-footer.component.html',
    styleUrls: ['./modal-footer.component.scss', './modal-footer.component-v2.scss']
})
export class ModalFooterComponent extends FusionBaseComponent {
    @Input() loading = false;
    @Input() error = '';
    @Input() saveButtonText = 'Save';
    @Input() saveButtonClass = 'primary';
    @Input() saveButtonDisabled = false;
    @Input() saveButtonLoading = false;
    @Input() cancelButtonText = 'Cancel';
    @Input() cancelButtonClass = 'secondary';
    @Input() cancelButtonHidden: boolean;
    @Input() notificationFooter: boolean;
    // eslint-disable-next-line
    @Output() onSave = new EventEmitter();
    // eslint-disable-next-line
    @Output() onCloseButtonClicked = new EventEmitter();

    constructor(injector: Injector) {
        super(injector);
    }
}

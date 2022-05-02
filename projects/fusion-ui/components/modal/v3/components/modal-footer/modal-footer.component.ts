import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'fusion-modal-footer',
    templateUrl: './modal-footer.component.html',
    styleUrls: ['./modal-footer.component.scss']
})
export class ModalFooterComponent {
    @Input() loading = false;
    @Input() error = '';
    @Input() saveButtonText = 'Save';
    @Input() saveButtonClass = '';
    @Input() saveButtonDisabled = false;
    @Input() saveButtonLoading = false;
    @Input() cancelButtonText = 'Cancel';
    @Input() cancelButtonClass = 'third';
    @Input() cancelButtonHidden: boolean;
    @Input() notificationFooter: boolean;
    @Output() onSubmit = new EventEmitter();
    @Output() onCloseButtonClicked = new EventEmitter();
}

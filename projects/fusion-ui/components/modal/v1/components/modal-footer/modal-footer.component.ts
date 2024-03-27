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
    @Output() closeButtonClicked = new EventEmitter();
}

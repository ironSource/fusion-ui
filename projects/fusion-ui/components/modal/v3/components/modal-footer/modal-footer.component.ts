import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'fusion-modal-footer',
    templateUrl: './modal-footer.component.html',
    styleUrls: ['./modal-footer.component.scss']
})
export class ModalFooterComponent {
    @Input() submitButtonPending = false;
    @Input() set cancelButton(config: {cancelButtonText?: string; cancelButtonClass?: string; cancelButtonHidden?: boolean}) {
        this.cancelButtonText = config?.cancelButtonText;
        this.cancelButtonClass = config?.cancelButtonClass;
        this.cancelButtonHidden = config?.cancelButtonHidden;
    }
    @Input() set submitButton(config: {submitButtonText?: string; submitButtonClass?: string; submitButtonDisabled?: boolean}) {
        this.submitButtonText = config?.submitButtonText;
        this.submitButtonClass = config?.submitButtonClass;
        this.submitButtonDisabled = config?.submitButtonDisabled;
    }
    @Input() error;

    @Output() onSubmit = new EventEmitter();
    @Output() onCloseButtonClicked = new EventEmitter();

    submitButtonText: string;
    submitButtonClass: string;
    submitButtonDisabled = false;
    cancelButtonText: string;
    cancelButtonClass: string;
    cancelButtonHidden: boolean;
}

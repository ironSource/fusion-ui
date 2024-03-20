import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {ModalTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

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
    /** @internal */
    @Input() testId: string;

    @Output() primaryButtonClicked = new EventEmitter();
    @Output() closeButtonClicked = new EventEmitter();

    /** @internal */
    modalTestIdModifiers: typeof ModalTestIdModifiers = ModalTestIdModifiers;
    /** @internal */
    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    /** @internal */
    submitButtonText: string;
    /** @internal */
    submitButtonClass: string;
    /** @internal */
    submitButtonDisabled = false;
    /** @internal */
    cancelButtonText: string;
    /** @internal */
    cancelButtonClass: string;
    /** @internal */
    cancelButtonHidden: boolean;

    constructor(private injector: Injector) {}
}

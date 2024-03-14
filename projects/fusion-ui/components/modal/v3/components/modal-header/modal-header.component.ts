import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {TestIdsService, ModalTestIdModifiers} from '@ironsource/fusion-ui/services/test-ids';

@Component({
    selector: 'fusion-modal-header',
    templateUrl: './modal-header.component.html',
    styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent {
    @Input() headerText: string;
    @Input() showCloseButton = true;
    /** @internal */
    @Input() testId: string;

    private _infoText: string;
    @Input() set infoText(value: string) {
        this._infoText = value;
    }
    get infoText(): string {
        return this._infoText;
    }

    /** @internal */
    modalTestIdModifiers: typeof ModalTestIdModifiers = ModalTestIdModifiers;
    /** @internal */
    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    /** @internal */
    closeButtonIcon = {iconName: 'close', iconVersion: 'v3'};
    /** @internal */
    infoIcon = {iconName: 'info', iconVersion: 'v3'};

    @Output() close = new EventEmitter();

    constructor(private injector: Injector) {}
}

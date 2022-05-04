import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-modal-content',
    templateUrl: './modal-content.component.html',
    styleUrls: ['./modal-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalContentComponent {}

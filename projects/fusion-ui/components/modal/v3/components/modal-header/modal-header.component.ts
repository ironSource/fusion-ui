import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'fusion-modal-header',
    templateUrl: './modal-header.component.html',
    styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent {
    @Input() headerText: string;
    @Input() isHeaderBorder = true;
    @Output() closed = new EventEmitter();
}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'fusion-modal-header',
    templateUrl: './modal-header.component.html',
    styleUrls: ['./modal-header.component.scss'],
    standalone: false
})
export class ModalHeaderComponent {
    @Input() headerText: string;
    @Input() noHeaderBorder = false;
    @Output() closed = new EventEmitter();
}

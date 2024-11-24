import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'fusion-popup-v2-inner-component-example',
    templateUrl: './popup-v2-inner-component-example.component.html',
    styleUrls: ['./popup-v2-inner-component-example.component.scss'],
    standalone: false
})
export class PopupV2InnerComponentExampleComponent {
    @Output() closePopUp = new EventEmitter();

    closeClicked($event) {
        this.closePopUp.emit($event);
    }
}

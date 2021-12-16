import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'fusion-toast-example-content',
    templateUrl: './toast-example-content.component.html',
    styleUrls: ['./toast-example-content.component.scss']
})
export class ToastExampleContentComponent {
    @Input() message;
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
    selector: 'fusion-datepicker-header',
    templateUrl: './datepicker-header.component.html',
    styleUrls: ['./datepicker-header.component.scss'],
    providers: [{provide: ControlContainer, useExisting: FormGroupDirective}],
    standalone: false
})
export class DatepickerHeaderComponent {
    @Input() prefix: string;
    @Input() isDisabled: boolean;
    @Input() label: string;
    @Input() open: boolean;
    @Output() inputFocus: EventEmitter<void> = new EventEmitter();

    onInputFocus() {
        this.inputFocus.emit();
    }
}

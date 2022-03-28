import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
    selector: 'fusion-datepicker-selection',
    templateUrl: './datepicker-selection.component.html',
    styleUrls: ['./datepicker-selection.component.scss'],
    viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class DatepickerSelectionComponent {
    @Input() dropDownStyle: boolean;
    @Input() isDisabled: boolean;
    @Input() label: string;
    @Input() error: boolean | string;
    @Output() inputFocus: EventEmitter<void> = new EventEmitter();

    onInputFocus() {
        this.inputFocus.emit();
    }
}

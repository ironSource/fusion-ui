import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InlineInputType, InputInlineComponent} from '@ironsource/fusion-ui/components/input-inline/v3';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'fusion-custom-cell-edit',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, InputInlineComponent],
    templateUrl: './custom-cell-edit.component.html',
    styleUrls: ['./custom-cell-edit.component.scss']
})
export class CustomCellEditComponent {
    @ViewChild('inputInline') inputInline: InputInlineComponent;
    /** @internal */
    type: InlineInputType = InlineInputType.Currency;
    /** @internal */
    formControl = new FormControl(null, [Validators.required, Validators.min(2)]);
    /** @internal */
    inputError$ = new BehaviorSubject('');
    /** @internal */
    isInRequest$ = new BehaviorSubject(false);

    @Input()
    set data(value: number) {
        this.formControl.setValue(value);
    }

    @Output() valueChanged = new EventEmitter();

    private errorMessages = {
        required: 'Required!',
        min: 'Minimum value: 2'
    };

    save($event) {
        this.inputError$.next('');
        this.isInRequest$.next(true);
        if (this.formControl.valid) {
            this.valueChanged.emit($event.newValue);
        } else {
            const allErrors = this.formControl.errors || {};
            Object.keys(allErrors).forEach(errorKey => {
                this.inputError$.next(this.errorMessages[errorKey] || 'Error occur.');
            });
        }
        this.isInRequest$.next(false);
    }
}

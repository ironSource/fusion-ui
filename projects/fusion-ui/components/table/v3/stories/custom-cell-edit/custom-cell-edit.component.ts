import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InlineInputType, InputInlineComponent} from '@ironsource/fusion-ui/components/input-inline/v3';
import {BehaviorSubject} from 'rxjs';
import {isNullOrUndefined, isNumber} from '@ironsource/fusion-ui/utils/';

@Component({
    selector: 'fusion-custom-cell-edit',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, InputInlineComponent],
    templateUrl: './custom-cell-edit.component.html',
    styleUrls: ['./custom-cell-edit.component.scss']
})
export class CustomCellEditComponent {
    /** @internal */
    @ViewChild('inputInline') inputInlineComponent: InputInlineComponent;
    /** @internal */
    inputType: InlineInputType = InlineInputType.Currency;
    /** @internal */
    formControl = new FormControl(null, [Validators.required, Validators.min(2)]);
    /** @internal */
    inputError$ = new BehaviorSubject('');
    /** @internal */
    isInRequest$ = new BehaviorSubject(false);
    /** @internal */
    unlimited = false;
    /** @internal */
    hasRemaining = false;

    @Input()
    /** @internal */
    set data(value: number) {
        this.unlimited = isNullOrUndefined(value);
        if (!this.unlimited) {
            this.initInputData = value;
            this.formControl.setValue(value);
        }
    }
    /** @internal */
    @Input() cellPosition?: {rowIndex: number; cellIndex: number};

    private _remaining: number = 0;
    /** @internal */
    @Input() set remaining(remaining: number) {
        this.hasRemaining = isNumber(remaining);
        if (this.hasRemaining) {
            this._remaining = remaining;
        }
    }
    get remaining(): number {
        return this._remaining;
    }

    @Output() onChange = new EventEmitter();

    private initInputData: number;
    private errorMessages = {
        required: 'Required!',
        min: 'Minimum value: 2'
    };
    private keyChanged = 'customCell';

    saveChanges(valuesOptions: {currentValue: number; newValue: string}) {
        if (this.formControl.valid) {
            const newValue = Number.parseFloat(valuesOptions.newValue);
            const prevValue = valuesOptions.currentValue;
            const inlineInputComponent = this.inputInlineComponent;
            if (newValue !== prevValue) {
                this.isInRequest$.next(true);
                this.onChange.emit({
                    newValue: newValue,
                    prevValue: prevValue,
                    cellPosition: this.cellPosition,
                    keyChanged: this.keyChanged,
                    onCellRequestDone: (isSuccess: boolean, error: {message: string; status: number}, stayInEditMode = false) => {
                        if (!isSuccess) {
                            if (stayInEditMode) {
                                inlineInputComponent.setEditMode$.next(newValue);
                            } else {
                                this.inputError$.next(error && error.message);
                            }
                            this.initInputData = prevValue;
                        } else {
                            this.inputError$.next('');
                            this.formControl.setValue(newValue, {emitEvent: false});
                        }
                        this.isInRequest$.next(false);
                    }
                });
            }
        } else {
            const allErrors = this.formControl.errors || {};
            Object.keys(allErrors).forEach(errorKey => {
                this.inputError$.next(this.errorMessages[errorKey] || 'Error occur.');
            });
        }
    }
    /** @internal */
    cancelEdit(): void {
        this.inputError$.next('');
    }
}

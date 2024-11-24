import {ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';
import {InputVariant} from '@ironsource/fusion-ui/components/input/v4';
import {InputHelperComponent} from '@ironsource/fusion-ui/components/input-helper/v4';
import {InputLabelComponent} from '@ironsource/fusion-ui/components/input-label/v4';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'fusion-textarea',
    templateUrl: './textarea-v4.component.html',
    styleUrls: ['./textarea-v4.component.scss'],
    host: {class: 'fusion-v4'},
    imports: [CommonModule, ReactiveFormsModule, FormsModule, InputHelperComponent, InputLabelComponent],
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextareaV4Component),
            multi: true
        }
    ]
})
export class TextareaV4Component implements OnInit, ControlValueAccessor {
    @Input() placeholder: string;
    @Input() readonly: boolean;
    @Input() resize: boolean;
    @Input() name: string;
    @Input() isDisabled: boolean;
    @Input() model: string;
    @Input() maxLength: number;
    @Input() showLengthCounter = false;

    // region Inputs - labelText
    @Input() labelText: string;
    @Input() labelRequired: boolean = false;
    @Input() labelIcon: IconData;
    @Input() labelTooltipText: string;
    // endregion

    // region Inputs - helper
    @Input() helperText: string;
    @Input() helperIcon: string;
    // end region

    @Input() variant: InputVariant = 'default';

    /** @internal */
    focused: boolean = false;
    /** @internal */
    valueLength$ = new BehaviorSubject(0);
    /** @internal */
    @ViewChild('textArea') textArea: ElementRef<HTMLTextAreaElement>;

    @Input() testId: string;

    @HostBinding('attr.data-testid') get testAttribute(): string {
        return this.testId;
    }

    ngOnInit() {
        this.resize = typeof this.resize === 'undefined' ? false : this.resize;
        this.model = this.model || '';
    }

    onChange(event) {
        this.propagateTouched();
        this.model = event;
        this.propagateChange(event);
        this.valueLength$.next(event.length);
    }

    // Implement ControlValueAccessor methods
    /**
     * Method to call when value has changes.
     */
    propagateChange = (_: string) => {};

    /**
     * Method to call when the component is touched (when it was is clicked).
     */
    propagateTouched = () => {};

    /**
     * update value from model to the component
     */
    writeValue(value: string): void {
        if (value === undefined || value === null) {
            this.model = '';
        } else {
            this.model = value;
        }
    }

    /**
     * Informs the outside world about changes.
     * see method propagateChange call - this.propagateChange(this.model);
     */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /**
     * on click
     */
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    /**
     * on set form controll enabled / disabled
     * also do UI Component enabled / disabled
     */
    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    /** @internal */
    focus(): void {
        this.focused = true;
    }

    /** @internal */
    blur(): void {
        this.focused = false;
    }
}

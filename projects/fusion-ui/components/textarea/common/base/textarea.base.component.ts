import {Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Directive()
export abstract class TextareaBaseComponent implements OnInit {
    @Input() placeholder: string;
    @Input() error: string;
    @Input() readonly: boolean;
    @Input() required: boolean;
    @Input() resize: boolean;
    @Input() name: string;
    @Input() isDisabled: boolean;
    @Input() model: string;
    @Output() modelChange = new EventEmitter();

    ngOnInit() {
        this.resize = typeof this.resize === 'undefined' ? false : this.resize;
        this.model = this.model || '';
        this.placeholder = this.placeholder || '';
        this.error = this.error || '';
    }

    onChange(event) {
        this.propagateTouched();
        this.model = event;
        this.propagateChange(event);
        this.modelChange.emit(this.model);
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
}

import {Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';

@Directive()
export abstract class RadioBaseComponent implements OnInit, ControlValueAccessor {
    /** checkbox DOM element id. If not set, will be generated.
     * @internal
     * */
    @Input() id: string;

    @Input() set label(value: string) {
        this._label = value;
    }

    @Input() set disabled(value: boolean) {
        this._disabled = value ?? false;
    }

    @Output() changed = new EventEmitter<boolean>();

    /** @internal */
    get label(): string {
        return this._label;
    }

    /** @internal */
    get disabled(): boolean {
        return this._disabled;
    }

    private _label: string;
    private _disabled = false;

    constructor(private uniqueIdService: UniqueIdService) {}

    ngOnInit() {
        this.id = this.id || 'fu-radio-' + this.uniqueIdService.getUniqueId();
    }

    /** @internal */
    selectStateChange($event: Event) {
        this.propagateTouched();
        // this._checked = ($event.target as HTMLInputElement).checked;
        // this.propagateChange(this.checked);
        // this.changed.emit(this.checked);
    }

    // Implement ControlValueAccessor methods
    /**
     * Method to call when value has changes.
     * @ignore
     */
    propagateChange = (_: boolean) => {};

    /**
     * Method to call when the component is touched (when it was is clicked).
     * @ignore
     */
    propagateTouched = () => {};

    /**
     * update value from model to the component
     * @ignore
     */
    writeValue(value: boolean): void {
        // this._checked = !!value;
    }

    /**
     * Informs the outside world about changes.
     * see method propagateChange call - this.propagateChange(this.model);
     * @ignore
     */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /**
     * on click
     * @ignore
     */
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    /**
     * on set form controll enabled / disabled
     * also do UI Component enabled / disabled
     * @ignore
     */
    setDisabledState?(value: boolean): void {
        this._disabled = value;
    }
}

import {Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {DomSanitizer} from '@angular/platform-browser';

@Directive()
export abstract class CheckboxBaseComponent implements OnInit, ControlValueAccessor {
    /** checkbox DOM element id. If not set, will be generated.
     * @internal
     * */
    @Input() id: string;
    @Input() set label(value: string) {
        this._label = value;
    }
    @Input() set isIndeterminate(value: boolean) {
        this._isIndeterminate = value ?? false;
    }
    @Input() set disabled(value: boolean) {
        this._disabled = value ?? false;
    }
    @Input() backgroundColor: string;
    /** @internal */
    @Input() value: string;
    /** @internal */
    @Input() set checked(val: boolean) {
        this._checked = val ?? false;
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

    /** @internal */
    get checked(): boolean {
        return this._checked;
    }

    /** @internal */
    get isIndeterminate(): boolean {
        return this._isIndeterminate;
    }

    private _label: string;
    private _disabled = false;
    private _checked = false;
    private _isIndeterminate = false;

    constructor(private uniqueIdService: UniqueIdService, protected sanitizer: DomSanitizer) {}

    ngOnInit() {
        this.id = this.id || 'fu-chb-' + this.uniqueIdService.getUniqueId();
    }

    /** @internal */
    checkStateChange($event: Event) {
        this.propagateTouched();
        this._checked = ($event.target as HTMLInputElement).checked;
        this.propagateChange(this.checked);
        this.changed.emit(this.checked);
    }

    /** @internal */
    getColoredBackgroundImage() {
        const checked = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3E%3Crect width='15' height='15' x='.5' y='.5' fill='{backgroundColor}' rx='3.5'/%3E%3Crect width='15' height='15' x='.5' y='.5' stroke='{backgroundColor}' rx='3.5'/%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m12.125 5.375-5.25 5.25L4.25 8'/%3E%3C/svg%3E`;
        const indeterminate = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3E%3Crect width='15' height='15' x='.5' y='.5' fill='{backgroundColor}' rx='3.5'/%3E%3Crect width='15' height='15' x='.5' y='.5' stroke='{backgroundColor}' rx='3.5'/%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M4.75 8.25h6.5'/%3E%3C/svg%3E`;
        let svg;
        if (this.backgroundColor && (this.checked || this.isIndeterminate)) {
            svg = this.sanitizer.bypassSecurityTrustStyle(
                `url("${(this.isIndeterminate ? indeterminate : checked).replace(
                    '{backgroundColor}',
                    encodeURIComponent(this.backgroundColor)
                )}") left center no-repeat`
            );
        }
        return svg;
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
        this._checked = !!value;
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

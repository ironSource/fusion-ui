import {Directive, Input} from '@angular/core';
import {ButtonColor, ButtonSize, ButtonVariant} from './button.entities';

@Directive()
export class ButtonBaseComponent {
    /**
     * Set button color type
     * @param value
     */
    @Input() set color(value: ButtonColor) {
        this._color = value || 'default';
    }

    /**
     * Set button variant type
     * @param value
     */
    @Input() set variant(value: ButtonVariant) {
        this._variant = value || 'contained';
    }

    /**
     * Set button size
     * @param value
     */
    @Input() set size(value: ButtonSize) {
        this._size = value || 'medium';
    }

    /**
     * Set button disabled state
     * @param value
     */
    @Input() set disabled(value: boolean) {
        this._disabled = value ?? false;
    }

    /**
     * Set button loading state
     * @param value
     */
    @Input() set loading(value: boolean) {
        this._loading = value ?? false;
    }

    get buttonClass(): string {
        return `${this.colorClass} ${this.variantClass} ${this.sizeClass}`;
    }

    get colorClass(): string {
        return 'fu-' + this._color;
    }

    get variantClass(): string {
        return 'fu-' + this._variant;
    }

    get sizeClass(): string {
        return 'fu-' + this._size;
    }

    get disabled(): boolean {
        return this._disabled;
    }

    get loading(): boolean {
        return this._loading;
    }

    private _color: ButtonColor = 'default';
    private _variant: ButtonVariant = 'contained';
    private _size: ButtonSize = 'medium';
    private _disabled: boolean = false;
    private _loading: boolean = false;
}

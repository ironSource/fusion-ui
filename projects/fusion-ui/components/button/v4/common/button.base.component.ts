import {Directive, Input} from '@angular/core';
import {ButtonColor, ButtonSize, ButtonVariant, IconButtonColor, IconButtonSize, IconButtonVariant} from './button.entities';

@Directive()
export class ButtonBaseComponent {
    /**
     * Set button color type
     * @param value
     */
    @Input() set color(value: ButtonColor | IconButtonColor) {
        this._color = value || 'default';
    }

    /**
     * Set button variant type
     * @param value
     */
    @Input() set variant(value: ButtonVariant | IconButtonVariant) {
        this._variant = value || 'contained';
    }

    /**
     * Set button size
     * @param value
     */
    @Input() set size(value: ButtonSize | IconButtonSize) {
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

    private _color: ButtonColor | IconButtonColor = 'default';
    private _variant: ButtonVariant | IconButtonVariant = 'contained';
    protected _size: ButtonSize | IconButtonSize = 'medium';
    private _disabled: boolean = false;
    private _loading: boolean = false;
}

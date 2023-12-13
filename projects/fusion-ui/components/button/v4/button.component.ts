import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonColor, ButtonVariant} from '@ironsource/fusion-ui/components/button/v4/button.entities';
import {isNullOrUndefined} from '@ironsource/fusion-ui';

@Component({
    selector: 'fusion-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    host: {class: 'fusion-v4'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
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
     * Set button disabled state
     * @param value
     */
    @Input() set disabled(value: boolean) {
        this._disabled = value ?? false;
    }

    get buttonClass(): string {
        return `${this.colorClass} ${this.variantClass}`;
    }

    get colorClass(): string {
        return 'fu-' + this._color;
    }

    get variantClass(): string {
        console.log('>>', this._variant);
        return 'fu-' + this._variant;
    }

    get disabled(): boolean {
        return this._disabled;
    }

    private _color: ButtonColor = 'default';
    private _variant: ButtonVariant = 'contained';
    private _disabled: boolean = false;
}

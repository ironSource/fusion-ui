import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LoaderComponent} from '@ironsource/fusion-ui/components/loader/v4';
import {ButtonBaseComponent} from '../common/button.base.component';
import {ButtonSize, IconButtonColor, IconButtonSize, IconButtonVariant} from '../common/button.entities';

@Component({
    selector: 'fusion-icon-button',
    standalone: true,
    imports: [CommonModule, IconModule, LoaderComponent],
    templateUrl: '../button/button.component.html',
    styleUrls: ['../button/button.component.scss', './icon-button.component.scss'],
    host: {class: 'fusion-v4'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconButtonComponent extends ButtonBaseComponent {
    @Input() set iconName(value: string) {
        this._iconName = value.trim();
    }

    /**
     * Set button variant type
     * @param value
     */
    @Input() set color(value: IconButtonColor) {
        this._colorIcon = value ?? 'default';
    }

    /**
     * Set button variant type
     * @param value
     */
    @Input() set variant(value: IconButtonVariant) {
        this._variantIcon = value ?? 'default';
    }

    @Input() set size(value: IconButtonSize) {
        this._size = value ?? 'medium';
    }

    get variantClass(): string {
        return 'fu-' + this._variantIcon;
    }

    get colorClass(): string {
        return 'fu-' + this._colorIcon;
    }

    get iconName(): string {
        return this._iconName;
    }

    /** @internal */
    startIconName: string;
    /** @internal */
    endIconName: string;

    private _iconName: string;
    private _variantIcon: IconButtonVariant = 'default';
    private _colorIcon: IconButtonColor = 'default';
}

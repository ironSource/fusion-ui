import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonBaseComponent} from '@ironsource/fusion-ui/components/button/v4/button.base.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {IconButtonVariant} from '@ironsource/fusion-ui/components/button/v4/button.entities';

@Component({
    selector: 'fusion-icon-button',
    standalone: true,
    imports: [CommonModule, IconModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss', './icon-button.component.scss'],
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
    @Input() set variant(value: IconButtonVariant) {
        this._variantIcon = value || 'text';
    }

    get variantClass(): string {
        return 'fu-' + this._variantIcon || 'text';
    }

    get iconName(): string {
        return this._iconName;
    }

    private _iconName: string;
    private _variantIcon: IconButtonVariant;
}

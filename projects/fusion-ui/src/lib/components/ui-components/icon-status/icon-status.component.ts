import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {IconStatusOption} from './entities/icon-status-option';
import {isNullOrUndefined} from '../../../utils';

@Component({
    selector: 'fusion-icon-status',
    template: `
        <span [className]="color" [ngStyle]="{color: options?.customColor}" *ngIf="color || options?.customColor" [fusionTooltip]="tooltip">
            <fusion-icon
                class="status-icon"
                [name]="options?.animated ? {iconName: 'loading', iconVersion: 'v1'} : {iconName: 'status-dots', iconVersion: 'v1'}"
            ></fusion-icon>
        </span>
    `,
    styleUrls: ['./icon-status.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconStatusComponent {
    @Input() options: IconStatusOption = {};

    @HostBinding('class.is-animated') get isAnimated(): boolean {
        return this.options.animated;
    }

    get color(): string {
        return isNullOrUndefined(this.options.color) ? null : this.options.color;
    }

    get tooltip(): string {
        return isNullOrUndefined(this.options.tooltip) ? null : this.options.tooltip;
    }
}

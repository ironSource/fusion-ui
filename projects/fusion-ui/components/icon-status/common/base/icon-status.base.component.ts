import {Directive, HostBinding, Input} from '@angular/core';
import {IconStatusOption} from './entities/icon-status-option';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

@Directive()
export abstract class IconStatusBaseComponent {
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

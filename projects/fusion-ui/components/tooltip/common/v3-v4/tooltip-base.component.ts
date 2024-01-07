import {Directive, Input} from '@angular/core';
import {tooltipConfiguration} from '@ironsource/fusion-ui/components/tooltip/common/base';

@Directive()
export class TooltipBaseComponent {
    /** @internal */
    @Input() set fusionTooltipText(value: string) {
        this.tooltipText = value;
    }
    /** @internal */
    @Input() set tooltipConfiguration(value: tooltipConfiguration) {
        this.tooltipConfig = {...value};
    }

    /** @internal */
    tooltipConfig: tooltipConfiguration;
    /** @internal */
    tooltipText: string = '';
}

import {Directive} from '@angular/core';
import {TooltipBaseDirective} from '@ironsource/fusion-ui/components/tooltip/common/base';

@Directive({
    selector: '[fusionTooltip]'
})
export class TooltipDirective extends TooltipBaseDirective {}

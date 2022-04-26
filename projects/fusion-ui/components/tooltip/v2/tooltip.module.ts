import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDirective} from './tooltip.directive';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {TooltipComponent} from './tooltip.component';

@NgModule({
    declarations: [TooltipDirective, TooltipComponent],
    exports: [TooltipDirective, TooltipComponent],
    imports: [CommonModule, DynamicComponentsModule, IconModule]
})
export class TooltipModule {}

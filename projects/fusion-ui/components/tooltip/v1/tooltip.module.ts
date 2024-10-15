import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDirective} from './tooltip.directive';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipComponent} from './tooltip.component';

@NgModule({
    declarations: [TooltipDirective, TooltipComponent],
    exports: [TooltipDirective, TooltipComponent],
    imports: [CommonModule, IconModule]
})
export class TooltipModule {}

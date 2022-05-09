import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDirective} from './tooltip.directive';
import {TooltipComponent} from './tooltip.component';
import {TooltipContentDirective} from './tooltip-content.directive';
import {TooltipWrapperComponent} from './tooltip.wrapper.component';

@NgModule({
    declarations: [TooltipDirective, TooltipContentDirective, TooltipComponent, TooltipWrapperComponent],
    exports: [TooltipDirective, TooltipContentDirective, TooltipComponent, TooltipWrapperComponent],
    imports: [CommonModule]
})
export class TooltipModule {}

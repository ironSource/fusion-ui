import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDirective} from './tooltip.directive';
import {TooltipComponent} from './tooltip.component';
import {TooltipContentDirective} from './tooltip-content.directive';

@NgModule({
    declarations: [TooltipDirective, TooltipContentDirective, TooltipComponent],
    exports: [TooltipDirective, TooltipContentDirective, TooltipComponent],
    imports: [CommonModule]
})
export class TooltipModule {}

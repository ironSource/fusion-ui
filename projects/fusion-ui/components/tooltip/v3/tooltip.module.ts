import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDirective} from './tooltip.directive';
import {TooltipContentComponent} from './tooltip.content.component';
import {TooltipContentDirective} from './tooltip-content.directive';
import {TooltipComponent} from './tooltip.component';

@NgModule({
    declarations: [TooltipDirective, TooltipContentDirective, TooltipContentComponent, TooltipComponent],
    exports: [TooltipDirective, TooltipContentDirective, TooltipContentComponent, TooltipComponent],
    imports: [CommonModule]
})
export class TooltipModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDirective} from './tooltip.directive';
import {TooltipComponent} from './tooltip.component';

@NgModule({
    declarations: [TooltipDirective, TooltipComponent],
    exports: [TooltipDirective, TooltipComponent],
    imports: [CommonModule]
})
export class TooltipModule {}

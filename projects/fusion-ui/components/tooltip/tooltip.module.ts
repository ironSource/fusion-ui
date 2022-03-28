import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDirective} from './tooltip.directive';
import {TooltipComponent} from './tooltip.component';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {IconModule} from '../icon/icon.module';

@NgModule({
    declarations: [TooltipDirective, TooltipComponent],
    exports: [TooltipDirective, TooltipComponent],
    imports: [CommonModule, DynamicComponentsModule, IconModule]
})
export class TooltipModule {}

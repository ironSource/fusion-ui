import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDirective} from './tooltip.directive';
import {TooltipComponent} from './tooltip.component';
import {DynamicComponentsModule} from '../dynamic-components/dynamic-components.module';
import {IconModule} from '../icon/icon.module';

@NgModule({
    declarations: [TooltipDirective, TooltipComponent],
    exports: [TooltipDirective, TooltipComponent],
    imports: [CommonModule, DynamicComponentsModule, IconModule],
    entryComponents: [TooltipComponent]
})
export class TooltipModule {}

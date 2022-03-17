import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownOptionComponent, DropdownOptionDirective} from './dropdown-option.component';
import {IconModule} from '../../icon/icon.module';
import {TooltipModule} from '../../tooltip/tooltip.module';
import {FlagModule} from '../../flag/flag.module';
import {GenericPipeModule} from '@ironsource/fusion-ui/pipes';
import {DynamicComponentsModule} from '../../dynamic-components/dynamic-components.module';

@NgModule({
    declarations: [DropdownOptionComponent, DropdownOptionDirective],
    exports: [DropdownOptionDirective],
    imports: [CommonModule, IconModule, TooltipModule, FlagModule, GenericPipeModule, DynamicComponentsModule]
})
export class DropdownOptionModule {}

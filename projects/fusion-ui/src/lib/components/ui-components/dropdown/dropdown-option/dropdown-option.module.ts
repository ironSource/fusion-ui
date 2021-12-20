import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownOptionComponent} from './dropdown-option.component';
import {DropdownOptionDirective} from './dropdown-option.directive';
import {IconModule} from '../../icon/icon.module';
import {TooltipModule} from '../../tooltip/tooltip.module';
import {FlagModule} from '../../flag/flag.module';
import {GenericPipeModule} from '../../../../pipes/generic/generic.module';
import {DynamicComponentsModule} from '../../dynamic-components/dynamic-components.module';

@NgModule({
    declarations: [DropdownOptionComponent, DropdownOptionDirective],
    exports: [DropdownOptionDirective],
    imports: [CommonModule, IconModule, TooltipModule, FlagModule, GenericPipeModule, DynamicComponentsModule]
})
export class DropdownOptionModule {}

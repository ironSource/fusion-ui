import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenericPipeModule} from '@ironsource/fusion-ui/pipes/generic';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {FlagModule} from '@ironsource/fusion-ui/components/flag';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {DropdownOptionComponent} from './dropdown-option.component';
import {DropdownOptionDirective} from './dropdown-option.directive';

@NgModule({
    declarations: [DropdownOptionDirective, DropdownOptionComponent],
    exports: [DropdownOptionDirective],
    imports: [CommonModule, IconModule, TooltipModule, FlagModule, GenericPipeModule, DynamicComponentsModule]
})
export class DropdownOptionModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownOptionComponent, DropdownOptionDirective} from './dropdown-option.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {FlagModule} from '@ironsource/fusion-ui/components/flag';
import {GenericPipeModule} from '@ironsource/fusion-ui/pipes/generic';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';

@NgModule({
    declarations: [DropdownOptionComponent, DropdownOptionDirective],
    exports: [DropdownOptionDirective],
    imports: [CommonModule, IconModule, TooltipModule, FlagModule, GenericPipeModule, DynamicComponentsModule]
})
export class DropdownOptionModule {}

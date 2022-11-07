import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';
import {DropdownOptionComponent} from './dropdown-option.component';
import {DropdownOptionDirective} from './dropdown-option.directive';

@NgModule({
    declarations: [DropdownOptionDirective, DropdownOptionComponent],
    exports: [DropdownOptionDirective],
    imports: [CommonModule, IconModule, TooltipModule, FlagModule, GenericPipe, DynamicComponentsModule]
})
export class DropdownOptionModule {}

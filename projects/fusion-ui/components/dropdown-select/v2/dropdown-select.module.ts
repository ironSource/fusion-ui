import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {FlagModule} from '@ironsource/fusion-ui/components/flag';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {DropdownSearchModule} from '@ironsource/fusion-ui/components/dropdown-search/v2';
import {DropdownSelectComponent} from './dropdown-select.component';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';

@NgModule({
    declarations: [DropdownSelectComponent],
    exports: [DropdownSelectComponent],
    imports: [CommonModule, DropdownSearchModule, DynamicComponentsModule, IconModule, TooltipModule, ReactiveFormsModule, FlagModule]
})
export class DropdownSelectModule {}

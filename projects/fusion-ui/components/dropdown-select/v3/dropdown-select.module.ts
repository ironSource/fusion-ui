import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
// todo: will chane to v3 after tooltip bug will be fixed
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';
import {DropdownSearchModule} from '@ironsource/fusion-ui/components/dropdown-search/v3';
import {DropdownSelectComponent} from './dropdown-select.component';

@NgModule({
    declarations: [DropdownSelectComponent],
    exports: [DropdownSelectComponent],
    imports: [CommonModule, DropdownSearchModule, DynamicComponentsModule, IconModule, TooltipModule, ReactiveFormsModule, FlagModule]
})
export class DropdownSelectModule {}

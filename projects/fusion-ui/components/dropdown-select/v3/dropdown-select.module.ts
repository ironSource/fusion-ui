import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicComponentsModule, FlagModule, IconModule} from '@ironsource/fusion-ui';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {DropdownSearchModule} from '@ironsource/fusion-ui/components/dropdown-search/v3';
import {DropdownSelectComponent} from './dropdown-select.component';

@NgModule({
    declarations: [DropdownSelectComponent],
    exports: [DropdownSelectComponent],
    imports: [CommonModule, DropdownSearchModule, DynamicComponentsModule, IconModule, TooltipModule, ReactiveFormsModule, FlagModule]
})
export class DropdownSelectModule {}

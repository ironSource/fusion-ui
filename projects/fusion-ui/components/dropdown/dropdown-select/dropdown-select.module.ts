import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownSelectComponent} from './dropdown-select.component';
import {DropdownSearchModule} from '../dropdown-search/dropdown-search.module';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {ReactiveFormsModule} from '@angular/forms';
import {FlagModule} from '@ironsource/fusion-ui/components/flag';

@NgModule({
    declarations: [DropdownSelectComponent],
    exports: [DropdownSelectComponent],
    imports: [CommonModule, DropdownSearchModule, DynamicComponentsModule, IconModule, TooltipModule, ReactiveFormsModule, FlagModule]
})
export class DropdownSelectModule {}

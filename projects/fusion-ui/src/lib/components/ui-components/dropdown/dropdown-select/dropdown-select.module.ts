import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownSelectComponent} from './dropdown-select.component';
import {DropdownSearchModule} from '../dropdown-search/dropdown-search.module';
import {DynamicComponentsModule} from '../../dynamic-components/dynamic-components.module';
import {IconModule} from '../../icon/icon.module';
import {TooltipModule} from '../../tooltip/tooltip.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FlagModule} from '../../flag/flag.module';

@NgModule({
    declarations: [DropdownSelectComponent],
    exports: [DropdownSelectComponent],
    imports: [CommonModule, DropdownSearchModule, DynamicComponentsModule, IconModule, TooltipModule, ReactiveFormsModule, FlagModule]
})
export class DropdownSelectModule {}

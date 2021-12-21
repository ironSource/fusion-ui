import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownComponent} from './dropdown.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '../../icon/icon.module';
import {ButtonModule} from '../../button/button.module';
import {InputModule} from '../../input/input.module';
import {FlagModule} from '../../flag/flag.module';
import {CheckboxModule} from '../../checkbox/checkbox.module';
import {ClickOutsideModule} from '../../../../directives/click-outside/click-outside.module';
import {FilterByFieldModule} from '../../../../pipes/collection/filter-by-field/filter-by-field.module';
import {CloneModule} from '../../../../pipes/clone/clone.module';
import {TooltipModule} from '../../tooltip/tooltip.module';
import {DynamicComponentsModule} from '../../dynamic-components/dynamic-components.module';
import {DropdownLoaderModule} from '../dropdown-loader/dropdown-loader.module';
import {DropdownOptionModule} from '../dropdown-option/dropdown-option.module';
import {DropdownSearchModule} from '../dropdown-search/dropdown-search.module';
import {DropdownOptionsListModule} from '../dropdown-options-list/dropdown-options-list.module';
import {DropdownSelectModule} from '../dropdown-select/dropdown-select.module';

@NgModule({
    declarations: [DropdownComponent],
    exports: [DropdownComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IconModule,
        ButtonModule,
        InputModule,
        FlagModule,
        CheckboxModule,
        ClickOutsideModule,
        FilterByFieldModule,
        CloneModule,
        TooltipModule,
        DynamicComponentsModule,
        DropdownLoaderModule,
        DropdownOptionsListModule,
        DropdownOptionModule,
        DropdownSearchModule,
        DropdownSelectModule
    ]
})
export class DropdownModule {}

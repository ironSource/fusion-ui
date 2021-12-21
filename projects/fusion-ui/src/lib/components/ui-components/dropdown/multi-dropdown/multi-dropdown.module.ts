import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {MultiDropdownComponent} from './multi-dropdown.component';
import {DropdownSelectModule} from '../dropdown-select/dropdown-select.module';

@NgModule({
    declarations: [MultiDropdownComponent],
    exports: [MultiDropdownComponent],
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
        DropdownOptionModule,
        DropdownSearchModule,
        DropdownSelectModule
    ]
})
export class MultiDropdownModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownComponent} from './dropdown.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {FlagModule} from '@ironsource/fusion-ui/components/flag';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {FilterByFieldModule} from '@ironsource/fusion-ui/pipes';
import {CloneModule} from '@ironsource/fusion-ui/pipes';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
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

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {FlagModule} from '@ironsource/fusion-ui/components/flag';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {FilterByFieldModule} from '@ironsource/fusion-ui/pipes/collection';
import {CloneModule} from '@ironsource/fusion-ui/pipes/clone';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {DropdownLoaderModule} from '@ironsource/fusion-ui/components/dropdown-loader/v1';
import {DropdownOptionsListModule} from '@ironsource/fusion-ui/components/dropdown-options-list/v1';
import {DropdownOptionModule} from '@ironsource/fusion-ui/components/dropdown-option/v1';
import {DropdownSelectModule} from '@ironsource/fusion-ui/components/dropdown-select/v1';
import {DropdownSearchModule} from '@ironsource/fusion-ui/components/dropdown-search/v1';
import {DropdownComponent} from './dropdown.component';

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
        DropdownSelectModule,
        DropdownSearchModule
    ]
})
export class DropdownModule {}

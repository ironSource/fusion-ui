import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';
import {FlagModule} from '@ironsource/fusion-ui/components/flag';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {FilterByFieldModule} from '@ironsource/fusion-ui/pipes/collection';
import {CloneModule} from '@ironsource/fusion-ui/pipes/clone';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {DropdownLoaderModule} from '@ironsource/fusion-ui/components/dropdown-loader/v2';
import {DropdownOptionModule} from '@ironsource/fusion-ui/components/dropdown-option/v2';
import {DropdownSearchModule} from '@ironsource/fusion-ui/components/dropdown-search/v2';
import {DropdownSelectModule} from '@ironsource/fusion-ui/components/dropdown-select/v2';
import {MultiDropdownComponent} from './multi-dropdown.component';

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

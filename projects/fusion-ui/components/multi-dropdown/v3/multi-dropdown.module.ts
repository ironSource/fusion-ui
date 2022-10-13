import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {FilterByFieldPipe} from '@ironsource/fusion-ui/pipes/collection';
import {CloneModule} from '@ironsource/fusion-ui/pipes/clone';

import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v3';
import {InputModule} from '@ironsource/fusion-ui/components/input/v3';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v3';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';

import {DropdownLoaderModule} from '@ironsource/fusion-ui/components/dropdown-loader/v3';
import {DropdownOptionModule} from '@ironsource/fusion-ui/components/dropdown-option/v3';
import {DropdownSearchModule} from '@ironsource/fusion-ui/components/dropdown-search/v3';
import {DropdownSelectModule} from '@ironsource/fusion-ui/components/dropdown-select/v3';
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
        FilterByFieldPipe,
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

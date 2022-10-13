import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v3';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v2';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {FilterByFieldPipe} from '@ironsource/fusion-ui/pipes/collection';
import {CloneModule} from '@ironsource/fusion-ui/pipes/clone';
// todo: will chane to v3 after tooltip bug will be fixed
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {DropdownLoaderModule} from '@ironsource/fusion-ui/components/dropdown-loader/v3';
import {DropdownOptionsListModule} from '@ironsource/fusion-ui/components/dropdown-options-list/v3';
import {DropdownOptionModule} from '@ironsource/fusion-ui/components/dropdown-option/v3';
import {DropdownSelectModule} from '@ironsource/fusion-ui/components/dropdown-select/v3';
import {DropdownSearchModule} from '@ironsource/fusion-ui/components/dropdown-search/v3';
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
        FilterByFieldPipe,
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

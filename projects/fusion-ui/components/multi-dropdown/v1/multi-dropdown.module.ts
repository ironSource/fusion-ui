import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input/v1';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v1';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {FilterByFieldPipe} from '@ironsource/fusion-ui/pipes/collection';
import {ClonePipe} from '@ironsource/fusion-ui/pipes/clone';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {DropdownLoaderModule} from '@ironsource/fusion-ui/components/dropdown-loader/v1';
import {DropdownOptionModule} from '@ironsource/fusion-ui/components/dropdown-option/v1';
import {DropdownSearchModule} from '@ironsource/fusion-ui/components/dropdown-search/v1';
import {DropdownSelectModule} from '@ironsource/fusion-ui/components/dropdown-select/v1';
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
        ClonePipe,
        TooltipModule,
        DynamicComponentsModule,
        DropdownLoaderModule,
        DropdownOptionModule,
        DropdownSearchModule,
        DropdownSelectModule
    ]
})
export class MultiDropdownModule {}

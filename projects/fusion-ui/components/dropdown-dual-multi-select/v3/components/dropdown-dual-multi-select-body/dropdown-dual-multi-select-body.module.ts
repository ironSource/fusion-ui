import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectBodyComponent} from './dropdown-dual-multi-select-body.component';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v3';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {DropdownDualMultiSelectBodyItemComponent} from './dropdown-dual-multi-select-body-item/dropdown-dual-multi-select-body-item.component';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline/v2';
import {DropdownDualMultiSelectLoadingModule} from '../dropdown-dual-multi-select-loading/dropdown-dual-multi-select-loading.module';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {GetObjectLengthModule} from '@ironsource/fusion-ui/pipes/collection';

@NgModule({
    declarations: [DropdownDualMultiSelectBodyComponent, DropdownDualMultiSelectBodyItemComponent],
    exports: [DropdownDualMultiSelectBodyComponent],
    imports: [
        CommonModule,
        CheckboxModule,
        IconModule,
        FlagModule,
        TooltipModule,
        LoaderInlineModule,
        DropdownDualMultiSelectLoadingModule,
        DynamicComponentsModule,
        GetObjectLengthModule
    ]
})
export class DropdownDualMultiSelectBodyModule {}

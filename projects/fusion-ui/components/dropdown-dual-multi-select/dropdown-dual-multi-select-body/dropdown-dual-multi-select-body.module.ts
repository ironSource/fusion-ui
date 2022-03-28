import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectBodyComponent} from './dropdown-dual-multi-select-body.component';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {FlagModule} from '@ironsource/fusion-ui/components/flag';
import {DropdownDualMultiSelectBodyItemComponent} from './dropdown-dual-multi-select-body-item/dropdown-dual-multi-select-body-item.component';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline';
import {DropdownDualMultiSelectLoadingModule} from '../dropdown-dual-multi-select-loading/dropdown-dual-multi-select-loading.module';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {GetObjectLengthModule} from '@ironsource/fusion-ui/pipes';

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

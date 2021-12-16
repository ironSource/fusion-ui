import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectBodyComponent} from './dropdown-dual-multi-select-body.component';
import {CheckboxModule} from '../../checkbox/checkbox.module';
import {IconModule} from '../../icon/icon.module';
import {FlagModule} from '../../flag/flag.module';
import {DropdownDualMultiSelectBodyItemComponent} from './dropdown-dual-multi-select-body-item/dropdown-dual-multi-select-body-item.component';
import {TooltipModule} from '../../tooltip/tooltip.module';
import {LoaderInlineModule} from '../../loader-inline/loader-inline.module';
import {DropdownDualMultiSelectLoadingModule} from '../dropdown-dual-multi-select-loading/dropdown-dual-multi-select-loading.module';
import {DynamicComponentsModule} from '../../dynamic-components/dynamic-components.module';
import {GetObjectLengthModule} from '../../../../pipes/collection/get-object-length/get-object-length.module';

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

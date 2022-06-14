import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectComponent} from './dropdown-dual-multi-select.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v2';
import {DropdownDualMultiSelectBodyModule} from './components/dropdown-dual-multi-select-body/dropdown-dual-multi-select-body.module';
import {DropdownDualMultiSelectHeaderModule} from './components/dropdown-dual-multi-select-header/dropdown-dual-multi-select-header.module';
import {DropdownDualMultiSelectFooterModule} from './components/dropdown-dual-multi-select-footer/dropdown-dual-multi-select-footer.module';
import {DropdownDualMultiSelectLoadingModule} from './components/dropdown-dual-multi-select-loading/dropdown-dual-multi-select-loading.module';

@NgModule({
    declarations: [DropdownDualMultiSelectComponent],
    exports: [DropdownDualMultiSelectComponent],
    imports: [
        CommonModule,
        IconModule,
        ButtonModule,
        InputModule,
        CheckboxModule,
        ReactiveFormsModule,
        ClickOutsideModule,
        DynamicComponentsModule,
        DropdownDualMultiSelectBodyModule,
        DropdownDualMultiSelectHeaderModule,
        DropdownDualMultiSelectFooterModule,
        DropdownDualMultiSelectLoadingModule
    ]
})
export class DropdownDualMultiSelectModule {}

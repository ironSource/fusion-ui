import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectComponent} from './dropdown-dual-multi-select.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox';
import {DropdownDualMultiSelectBodyModule} from './dropdown-dual-multi-select-body/dropdown-dual-multi-select-body.module';
import {DropdownDualMultiSelectHeaderModule} from './dropdown-dual-multi-select-header/dropdown-dual-multi-select-header.module';
import {DropdownDualMultiSelectFooterModule} from './dropdown-dual-multi-select-footer/dropdown-dual-multi-select-footer.module';
import {DropdownDualMultiSelectLoadingModule} from './dropdown-dual-multi-select-loading/dropdown-dual-multi-select-loading.module';

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

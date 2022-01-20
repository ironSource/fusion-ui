import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectComponent} from './dropdown-dual-multi-select.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule} from '../../../directives/click-outside/click-outside.module';
import {DynamicComponentsModule} from '../dynamic-components/dynamic-components.module';
import {IconModule} from '../icon/icon.module';
import {ButtonModule} from '../button/button.module';
import {InputModule} from '../input/input.module';
import {CheckboxModule} from '../checkbox/checkbox.module';
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

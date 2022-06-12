import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectHeaderComponent} from './dropdown-dual-multi-select-header.component';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui';

@NgModule({
    declarations: [DropdownDualMultiSelectHeaderComponent],
    imports: [CommonModule, InputModule, ReactiveFormsModule, IconModule],
    exports: [DropdownDualMultiSelectHeaderComponent]
})
export class DropdownDualMultiSelectHeaderModule {}

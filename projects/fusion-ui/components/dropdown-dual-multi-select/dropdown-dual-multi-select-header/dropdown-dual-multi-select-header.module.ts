import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectHeaderComponent} from './dropdown-dual-multi-select-header.component';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [DropdownDualMultiSelectHeaderComponent],
    imports: [CommonModule, InputModule, ReactiveFormsModule],
    exports: [DropdownDualMultiSelectHeaderComponent]
})
export class DropdownDualMultiSelectHeaderModule {}

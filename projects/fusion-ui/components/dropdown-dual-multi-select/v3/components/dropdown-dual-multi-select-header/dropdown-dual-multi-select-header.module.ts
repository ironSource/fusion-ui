import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectHeaderComponent} from './dropdown-dual-multi-select-header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui';

@NgModule({
    declarations: [DropdownDualMultiSelectHeaderComponent],
    imports: [CommonModule, ReactiveFormsModule, IconModule],
    exports: [DropdownDualMultiSelectHeaderComponent]
})
export class DropdownDualMultiSelectHeaderModule {}

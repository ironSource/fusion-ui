import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectHeaderComponent} from './dropdown-dual-multi-select-header.component';
import {InputModule} from '../../input/input.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [DropdownDualMultiSelectHeaderComponent],
    imports: [CommonModule, InputModule, ReactiveFormsModule],
    exports: [DropdownDualMultiSelectHeaderComponent],
    entryComponents: [DropdownDualMultiSelectHeaderComponent]
})
export class DropdownDualMultiSelectHeaderModule {}

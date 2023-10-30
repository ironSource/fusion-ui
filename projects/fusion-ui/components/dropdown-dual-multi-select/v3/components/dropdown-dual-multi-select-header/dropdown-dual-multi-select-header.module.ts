import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectHeaderComponent} from './dropdown-dual-multi-select-header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';

@NgModule({
    declarations: [DropdownDualMultiSelectHeaderComponent],
    imports: [CommonModule, ReactiveFormsModule, IconModule, GenericPipe],
    exports: [DropdownDualMultiSelectHeaderComponent]
})
export class DropdownDualMultiSelectHeaderModule {}

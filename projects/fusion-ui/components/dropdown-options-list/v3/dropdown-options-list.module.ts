import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownOptionModule} from '@ironsource/fusion-ui/components/dropdown-option/v3';
import {DropdownOptionsListComponent} from './dropdown-options-list.component';

@NgModule({
    declarations: [DropdownOptionsListComponent],
    imports: [CommonModule, DropdownOptionModule],
    exports: [DropdownOptionsListComponent]
})
export class DropdownOptionsListModule {}

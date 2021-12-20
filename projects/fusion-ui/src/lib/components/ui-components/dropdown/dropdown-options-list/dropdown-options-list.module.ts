import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownOptionsListComponent} from './dropdown-options-list.component';
import {DropdownOptionModule} from '../dropdown-option/dropdown-option.module';

@NgModule({
    declarations: [DropdownOptionsListComponent],
    imports: [CommonModule, DropdownOptionModule],
    exports: [DropdownOptionsListComponent]
})
export class DropdownOptionsListModule {}

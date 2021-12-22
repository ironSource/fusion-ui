import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputModule} from '../../input/input.module';
import {DropdownSearchComponent} from './dropdown-search.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [DropdownSearchComponent],
    exports: [DropdownSearchComponent],
    imports: [CommonModule, InputModule, ReactiveFormsModule]
})
export class DropdownSearchModule {}

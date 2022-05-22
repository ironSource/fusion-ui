import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DropdownSearchComponent} from './dropdown-search.component';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';

@NgModule({
    declarations: [DropdownSearchComponent],
    exports: [DropdownSearchComponent],
    imports: [CommonModule, InputModule, ReactiveFormsModule]
})
export class DropdownSearchModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownSearchComponent} from './dropdown-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@NgModule({
    declarations: [DropdownSearchComponent],
    exports: [DropdownSearchComponent],
    imports: [CommonModule, IconModule, ReactiveFormsModule]
})
export class DropdownSearchModule {}

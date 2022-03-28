import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddboxDropdownComponent} from './addbox-dropdown.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {FilterByFieldModule} from '@ironsource/fusion-ui/pipes';
import {CloneModule} from '@ironsource/fusion-ui/pipes';
import {DropdownLoaderModule} from '../dropdown-loader/dropdown-loader.module';
import {DropdownOptionModule} from '../dropdown-option/dropdown-option.module';
import {DropdownOptionsListModule} from '../dropdown-options-list/dropdown-options-list.module';

@NgModule({
    exports: [AddboxDropdownComponent],
    declarations: [AddboxDropdownComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputModule,
        ClickOutsideModule,
        FilterByFieldModule,
        CloneModule,
        DropdownLoaderModule,
        DropdownOptionModule,
        DropdownOptionsListModule
    ]
})
export class AddboxDropdownModule {}

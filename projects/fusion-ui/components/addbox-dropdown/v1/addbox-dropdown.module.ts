import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddboxDropdownComponent} from './addbox-dropdown.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InputModule} from '@ironsource/fusion-ui/components/input/v1';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {FilterByFieldModule} from '@ironsource/fusion-ui/pipes/collection';
import {CloneModule} from '@ironsource/fusion-ui/pipes/clone';
import {DropdownLoaderModule} from '@ironsource/fusion-ui/components/dropdown-loader/v1';
import {DropdownOptionModule} from '@ironsource/fusion-ui/components/dropdown-option/v1';
import {DropdownOptionsListModule} from '@ironsource/fusion-ui/components/dropdown-options-list/v1';

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

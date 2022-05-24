import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {TagModule} from '@ironsource/fusion-ui/components/tag';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {DropdownOptionModule} from '@ironsource/fusion-ui/components/dropdown-option/v2';
import {DropdownLoaderModule} from '@ironsource/fusion-ui/components/dropdown-loader/v2';
import {DropdownOptionsListModule} from '@ironsource/fusion-ui/components/dropdown-options-list/v2';
import {TagsInputComponent} from './tags-input.component';

@NgModule({
    declarations: [TagsInputComponent],
    exports: [TagsInputComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TagModule,
        IconModule,
        InputModule,
        DropdownOptionModule,
        DropdownLoaderModule,
        ClickOutsideModule,
        DropdownOptionsListModule,
        ButtonModule
    ]
})
export class TagsInputModule {}

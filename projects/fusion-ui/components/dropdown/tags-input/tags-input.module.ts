import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagsInputComponent} from './tags-input.component';
import {TagModule} from '@ironsource/fusion-ui/components/tag';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {DropdownOptionModule} from '../dropdown-option/dropdown-option.module';
import {DropdownLoaderModule} from '../dropdown-loader/dropdown-loader.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {DropdownOptionsListModule} from '../dropdown-options-list/dropdown-options-list.module';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';

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

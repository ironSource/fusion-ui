import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagsInputComponent} from './tags-input.component';
import {TagModule} from '../../tag/tag.module';
import {IconModule} from '../../icon/icon.module';
import {InputModule} from '../../input/input.module';
import {DropdownOptionModule} from '../dropdown-option/dropdown-option.module';
import {DropdownLoaderModule} from '../dropdown-loader/dropdown-loader.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule} from '../../../../directives/click-outside/click-outside.module';
import {DropdownOptionsListModule} from '../dropdown-options-list/dropdown-options-list.module';

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
        DropdownOptionsListModule
    ],
    entryComponents: [TagsInputComponent]
})
export class TagsInputModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '../icon/icon.module';
import {TooltipModule} from '../tooltip/tooltip.module';
import {LoaderModule} from '../loader/loader.module';
import {ClickOutsideModule} from '../../../directives/click-outside/click-outside.module';
import {LoaderInlineModule} from '../loader-inline/loader-inline.module';

@NgModule({
    declarations: [InputComponent],
    exports: [InputComponent],
    imports: [CommonModule, ReactiveFormsModule, IconModule, TooltipModule, LoaderModule, LoaderInlineModule, ClickOutsideModule]
})
export class InputModule {}

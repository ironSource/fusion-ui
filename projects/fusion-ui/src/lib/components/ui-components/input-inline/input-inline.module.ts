import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputInlineComponent} from './input-inline.component';
import {LoaderModule} from '../loader/loader.module';
import {IconModule} from '../icon/icon.module';
import {InputModule} from '../input/input.module';
import {TooltipModule} from '../tooltip/tooltip.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule} from '../../../directives/click-outside/click-outside.module';

@NgModule({
    declarations: [InputInlineComponent],
    exports: [InputInlineComponent],
    imports: [CommonModule, ReactiveFormsModule, LoaderModule, IconModule, InputModule, TooltipModule, ClickOutsideModule]
})
export class InputInlineModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputInlineComponent} from './input-inline.component';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v2';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';

@NgModule({
    declarations: [InputInlineComponent],
    exports: [InputInlineComponent],
    imports: [CommonModule, ReactiveFormsModule, LoaderModule, IconModule, InputModule, TooltipModule, ClickOutsideModule]
})
export class InputInlineModule {}

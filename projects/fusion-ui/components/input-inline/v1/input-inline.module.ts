import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputInlineComponent} from './input-inline.component';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {InputModule} from '@ironsource/fusion-ui/components/input/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';

@NgModule({
    declarations: [InputInlineComponent],
    exports: [InputInlineComponent],
    imports: [CommonModule, ReactiveFormsModule, LoaderModule, IconModule, InputModule, TooltipModule, ClickOutsideModule]
})
export class InputInlineModule {}

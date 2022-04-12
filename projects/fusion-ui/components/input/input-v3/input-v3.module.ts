import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline';
import {InputV3Component} from '@ironsource/fusion-ui/components/input/input-v3/input-v3.component';

@NgModule({
    declarations: [InputV3Component],
    exports: [InputV3Component],
    imports: [CommonModule, ReactiveFormsModule, IconModule, TooltipModule, LoaderModule, LoaderInlineModule, ClickOutsideModule]
})
export class InputV3Module {}

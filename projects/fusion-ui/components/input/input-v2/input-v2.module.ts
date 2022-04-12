import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline';
import {InputV2Component} from '@ironsource/fusion-ui/components/input/input-v2/input-v2.component';

@NgModule({
    declarations: [InputV2Component],
    exports: [InputV2Component],
    imports: [CommonModule, ReactiveFormsModule, IconModule, TooltipModule, LoaderModule, LoaderInlineModule, ClickOutsideModule]
})
export class InputV2Module {}

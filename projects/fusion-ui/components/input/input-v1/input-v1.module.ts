import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline';
import {InputV1Component} from '@ironsource/fusion-ui/components/input/input-v1/input-v1.component';

@NgModule({
    declarations: [InputV1Component],
    exports: [InputV1Component],
    imports: [CommonModule, ReactiveFormsModule, IconModule, TooltipModule, LoaderModule, LoaderInlineModule, ClickOutsideModule]
})
export class InputV1Module {}

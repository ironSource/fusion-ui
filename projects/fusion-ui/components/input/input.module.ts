import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline';
import {InputV1Module} from '@ironsource/fusion-ui/components/input/input-v1/input-v1.module';
import {InputV2Module} from '@ironsource/fusion-ui/components/input/input-v2/input-v2.module';
import {InputV3Module} from '@ironsource/fusion-ui/components/input/input-v3/input-v3.module';

@NgModule({
    declarations: [InputComponent],
    exports: [InputComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IconModule,
        TooltipModule,
        LoaderModule,
        LoaderInlineModule,
        ClickOutsideModule,
        InputV1Module,
        InputV2Module,
        InputV3Module
    ]
})
export class InputModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline';
import {InputContentModule} from './components/input-content/input-content.module';

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
        InputContentModule
    ]
})
export class InputModule {}

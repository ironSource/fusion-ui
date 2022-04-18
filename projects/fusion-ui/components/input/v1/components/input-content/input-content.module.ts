import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {InputContentComponent} from './input-content.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from '@ironsource/fusion-ui';

@NgModule({
    declarations: [InputContentComponent],
    exports: [InputContentComponent],
    imports: [CommonModule, IconModule, ReactiveFormsModule, TooltipModule]
})
export class InputContentModule {}

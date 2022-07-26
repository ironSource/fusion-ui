import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';
import {RadioComponent} from './radio.component';

@NgModule({
    declarations: [RadioComponent],
    exports: [RadioComponent],
    imports: [CommonModule, IconModule, TooltipModule]
})
export class RadioModule {}

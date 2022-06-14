import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioComponent} from './radio.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@NgModule({
    declarations: [RadioComponent],
    exports: [RadioComponent],
    imports: [CommonModule, IconModule, TooltipModule]
})
export class RadioModule {}

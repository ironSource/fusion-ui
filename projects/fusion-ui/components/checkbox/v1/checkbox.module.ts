import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxComponent} from './checkbox.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {FlagModule} from '@ironsource/fusion-ui/components/flag';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';

@NgModule({
    declarations: [CheckboxComponent],
    exports: [CheckboxComponent],
    imports: [CommonModule, IconModule, FlagModule, TooltipModule]
})
export class CheckboxModule {}

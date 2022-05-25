import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconStatusComponent} from './icon-status.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';

@NgModule({
    imports: [CommonModule, IconModule, TooltipModule],
    declarations: [IconStatusComponent],
    exports: [IconStatusComponent]
})
export class IconStatusModule {}

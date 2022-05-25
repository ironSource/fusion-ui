import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagComponent} from './tag.component';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {FlagModule} from '@ironsource/fusion-ui/components/flag';

@NgModule({
    declarations: [TagComponent],
    exports: [TagComponent],
    imports: [CommonModule, IconModule, FlagModule, TooltipModule]
})
export class TagModule {}

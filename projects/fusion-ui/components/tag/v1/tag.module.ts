import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagComponent} from './tag.component';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';

@NgModule({
    declarations: [TagComponent],
    exports: [TagComponent],
    imports: [CommonModule, IconModule, FlagModule, TooltipModule]
})
export class TagModule {}

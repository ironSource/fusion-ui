import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagComponent} from './tag.component';
import {TooltipModule} from '../tooltip/tooltip.module';
import {IconModule} from '../icon/icon.module';
import {FlagModule} from '../flag/flag.module';

@NgModule({
    declarations: [TagComponent],
    exports: [TagComponent],
    imports: [CommonModule, IconModule, FlagModule, TooltipModule],
    entryComponents: [TagComponent]
})
export class TagModule {}

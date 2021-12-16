import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconStatusComponent} from './icon-status.component';
import {IconModule} from '../icon/icon.module';
import {TooltipModule} from '../tooltip/tooltip.module';

@NgModule({
    imports: [CommonModule, IconModule, TooltipModule],
    declarations: [IconStatusComponent],
    exports: [IconStatusComponent],
    entryComponents: [IconStatusComponent]
})
export class IconStatusModule {}

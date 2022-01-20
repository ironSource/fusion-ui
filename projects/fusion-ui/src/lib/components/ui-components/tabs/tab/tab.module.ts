import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabComponent} from './tab.component';
import {IconModule} from '../../icon/icon.module';
import {TooltipModule} from '../../tooltip/tooltip.module';
import {PopupModule} from '../../popup/popup.module';

@NgModule({
    declarations: [TabComponent],
    imports: [CommonModule, IconModule, TooltipModule, PopupModule],
    exports: [TabComponent]
})
export class TabModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabComponent} from './tab.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {PopupModule} from '@ironsource/fusion-ui/components/popup/v2';

@NgModule({
    declarations: [TabComponent],
    imports: [CommonModule, IconModule, TooltipModule, PopupModule],
    exports: [TabComponent]
})
export class TabModule {}

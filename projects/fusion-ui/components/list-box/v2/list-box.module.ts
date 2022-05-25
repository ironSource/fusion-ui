import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListBoxComponent} from './list-box.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';

@NgModule({
    declarations: [ListBoxComponent],
    exports: [ListBoxComponent],
    imports: [CommonModule, IconModule, TooltipModule]
})
export class ListBoxModule {}

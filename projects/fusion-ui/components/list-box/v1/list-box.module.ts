import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListBoxComponent} from './list-box.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';

@NgModule({
    declarations: [ListBoxComponent],
    exports: [ListBoxComponent],
    imports: [CommonModule, IconModule, TooltipModule]
})
export class ListBoxModule {}

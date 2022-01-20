import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListBoxComponent} from './list-box.component';
import {IconModule} from '../icon/icon.module';
import {TooltipModule} from '../tooltip/tooltip.module';

@NgModule({
    declarations: [ListBoxComponent],
    exports: [ListBoxComponent],
    imports: [CommonModule, IconModule, TooltipModule]
})
export class ListBoxModule {}

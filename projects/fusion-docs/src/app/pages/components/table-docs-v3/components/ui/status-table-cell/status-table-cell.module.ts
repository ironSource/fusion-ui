import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusTableCellComponent} from './status-table-cell.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {IconStatusModule} from '@ironsource/fusion-ui/components/icon-status/v1';

@NgModule({
    declarations: [StatusTableCellComponent],
    imports: [CommonModule, IconStatusModule, IconModule]
})
export class StatusTableCellModule {}

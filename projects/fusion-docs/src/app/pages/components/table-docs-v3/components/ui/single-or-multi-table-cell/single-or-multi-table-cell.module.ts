import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SingleOrMultiTableCellComponent} from './single-or-multi-table-cell.component';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';

@NgModule({
    declarations: [SingleOrMultiTableCellComponent],
    imports: [CommonModule, FlagModule, TooltipModule]
})
export class SingleOrMultiTableCellModule {}

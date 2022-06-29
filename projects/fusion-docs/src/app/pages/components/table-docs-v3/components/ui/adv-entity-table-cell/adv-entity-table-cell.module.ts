import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdvEntityTableCellComponent} from './adv-entity-table-cell.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@NgModule({
    declarations: [AdvEntityTableCellComponent],
    imports: [CommonModule, IconModule],
    exports: [AdvEntityTableCellComponent]
})
export class AdvEntityTableCellModule {}

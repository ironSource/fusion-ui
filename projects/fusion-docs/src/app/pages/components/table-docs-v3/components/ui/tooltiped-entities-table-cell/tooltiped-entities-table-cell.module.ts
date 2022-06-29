import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipedEntitiesTableCellComponent} from './tooltiped-entities-table-cell.component';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';
import {EntitiesListForTooltipModule} from './entities-list-for-tooltip/entities-list-for-tooltip.module';

@NgModule({
    declarations: [TooltipedEntitiesTableCellComponent],
    imports: [CommonModule, EntitiesListForTooltipModule, TooltipModule],
    exports: [TooltipedEntitiesTableCellComponent]
})
export class TooltipedEntitiesTableCellModule {}

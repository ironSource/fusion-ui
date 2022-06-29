import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TabsModule} from '@ironsource/fusion-ui/components/tabs/v3';
import {TableModule} from '@ironsource/fusion-ui/components/table/v3';
import {CampaignPromotionsTableComponent} from './campaign-promotions-table.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {TooltipedEntitiesTableCellModule} from '../ui/tooltiped-entities-table-cell/tooltiped-entities-table-cell.module';

@NgModule({
    declarations: [CampaignPromotionsTableComponent],
    exports: [CampaignPromotionsTableComponent],
    imports: [CommonModule, ReactiveFormsModule, TableModule, TabsModule, IconModule, TooltipModule, TooltipedEntitiesTableCellModule]
})
export class CampaignPromotionsTableModule {}

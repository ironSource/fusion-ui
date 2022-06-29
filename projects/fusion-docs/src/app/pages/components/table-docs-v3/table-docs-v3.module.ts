import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableDocsV3Component} from './table-docs-v3.component';
import {RouterModule, Routes} from '@angular/router';
import {CampaignPromotionsFilterSectionModule} from './components/campaign-promotions-filter-section/campaign-promotions-filter-section.module';
import {CampaignPromotionsTableModule} from './components/campaign-promotions-table/campaign-promotions-table.module';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {AdvEntityTableCellModule} from './components/ui/adv-entity-table-cell/adv-entity-table-cell.module';

const routes: Routes = [{path: '', component: TableDocsV3Component}];

@NgModule({
    declarations: [TableDocsV3Component],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CampaignPromotionsFilterSectionModule,
        CampaignPromotionsTableModule,
        IconModule,
        AdvEntityTableCellModule
    ]
})
export class TableDocsV3Module {}

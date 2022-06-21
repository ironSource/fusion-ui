import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableDocsV3Component} from './table-docs-v3.component';
import {RouterModule, Routes} from '@angular/router';
import {CampaignPromotionsFilterSectionModule} from './components/campaign-promotions-filter-section/campaign-promotions-filter-section.module';

const routes: Routes = [{path: '', component: TableDocsV3Component}];

@NgModule({
    declarations: [TableDocsV3Component],
    imports: [CommonModule, RouterModule.forChild(routes), CampaignPromotionsFilterSectionModule]
})
export class TableDocsV3Module {}

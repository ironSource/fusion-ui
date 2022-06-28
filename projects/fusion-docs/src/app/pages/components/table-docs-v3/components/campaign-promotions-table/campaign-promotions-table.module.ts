import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TabsModule} from '@ironsource/fusion-ui/components/tabs/v3';
import {TableModule} from '@ironsource/fusion-ui/components/table/v3';
import {CampaignPromotionsTableComponent} from './campaign-promotions-table.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@NgModule({
    declarations: [CampaignPromotionsTableComponent],
    exports: [CampaignPromotionsTableComponent],
    imports: [CommonModule, ReactiveFormsModule, TableModule, TabsModule, IconModule]
})
export class CampaignPromotionsTableModule {}

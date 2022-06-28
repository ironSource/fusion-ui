import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ChipFilterModule} from '@ironsource/fusion-ui/components/chip-filter';
import {ChipFiltersModule} from '@ironsource/fusion-ui/components/chip-filters';
import {DaterangeModule} from '@ironsource/fusion-ui/components/daterange/v3';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select/v3';
import {CampaignPromotionsFilterSectionComponent} from './campaign-promotions-filter-section.component';

@NgModule({
    declarations: [CampaignPromotionsFilterSectionComponent],
    exports: [CampaignPromotionsFilterSectionComponent],
    imports: [CommonModule, ReactiveFormsModule, ChipFilterModule, ChipFiltersModule, DropdownDualMultiSelectModule, DaterangeModule]
})
export class CampaignPromotionsFilterSectionModule {}

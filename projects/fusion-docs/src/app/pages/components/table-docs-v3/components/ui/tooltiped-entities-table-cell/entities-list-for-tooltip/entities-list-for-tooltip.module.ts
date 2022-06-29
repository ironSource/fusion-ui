import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EntitiesListForTooltipComponent} from './entities-list-for-tooltip.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@NgModule({
    declarations: [EntitiesListForTooltipComponent],
    imports: [CommonModule, IconModule],
    exports: [EntitiesListForTooltipComponent]
})
export class EntitiesListForTooltipModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipFilterComponent} from './chip-filter.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';

@NgModule({
    declarations: [ChipFilterComponent],
    exports: [ChipFilterComponent],
    imports: [CommonModule, IconModule, FlagModule, TooltipModule]
})
export class ChipFilterModule {}

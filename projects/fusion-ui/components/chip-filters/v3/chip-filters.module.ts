import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipFiltersComponent} from '@ironsource/fusion-ui/components/chip-filters';
import {ChipFilterModule} from '@ironsource/fusion-ui/components/chip-filter';
import {IconModule} from '@ironsource/fusion-ui/components/icon';

@NgModule({
    declarations: [ChipFiltersComponent],
    exports: [ChipFiltersComponent],
    imports: [CommonModule, ChipFilterModule, IconModule]
})
export class ChipFiltersModule {}

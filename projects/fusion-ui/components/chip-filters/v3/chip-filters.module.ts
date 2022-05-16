import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipFiltersComponent} from '@ironsource/fusion-ui/components/chip-filters';

@NgModule({
    declarations: [ChipFiltersComponent],
    exports: [ChipFiltersComponent],
    imports: [CommonModule]
})
export class ChipFiltersModule {}

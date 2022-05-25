import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipFiltersComponent} from './chip-filters.component';
import {ChipFilterModule} from '@ironsource/fusion-ui/components/chip-filter';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {DaterangeModule} from '@ironsource/fusion-ui/components/daterange';
import {ReactiveFormsModule} from '@angular/forms';
import {DropdownModule} from '@ironsource/fusion-ui';

@NgModule({
    declarations: [ChipFiltersComponent],
    exports: [ChipFiltersComponent],
    imports: [CommonModule, ChipFilterModule, IconModule, DaterangeModule, ReactiveFormsModule, DropdownModule]
})
export class ChipFiltersModule {}

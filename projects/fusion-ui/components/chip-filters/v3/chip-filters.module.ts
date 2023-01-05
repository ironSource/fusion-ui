import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipFiltersComponent} from './chip-filters.component';
import {ChipFilterModule} from '@ironsource/fusion-ui/components/chip-filter';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ReactiveFormsModule} from '@angular/forms';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown/v3';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select/v3';
import {DaterangeModule} from '@ironsource/fusion-ui/components/daterange/v3';

@NgModule({
    declarations: [ChipFiltersComponent],
    exports: [ChipFiltersComponent],
    imports: [
        CommonModule,
        ChipFilterModule,
        IconModule,
        ReactiveFormsModule,
        DropdownModule,
        DropdownDualMultiSelectModule,
        DaterangeModule
    ]
})
export class ChipFiltersModule {}

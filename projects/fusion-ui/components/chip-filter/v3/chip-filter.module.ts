import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipFilterComponent} from './chip-filter.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {FlagModule} from '@ironsource/fusion-ui/components/flag';
import {ChipFilterContentDirective} from './chip-filter-content.directive';

@NgModule({
    declarations: [ChipFilterComponent, ChipFilterContentDirective],
    exports: [ChipFilterComponent, ChipFilterContentDirective],
    imports: [CommonModule, IconModule, FlagModule]
})
export class ChipFilterModule {}

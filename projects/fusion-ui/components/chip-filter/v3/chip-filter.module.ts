import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipFilterComponent} from './chip-filter.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {FlagModule} from '@ironsource/fusion-ui/components/flag';

@NgModule({
    declarations: [ChipFilterComponent],
    exports: [ChipFilterComponent],
    imports: [CommonModule, IconModule, FlagModule]
})
export class ChipFilterModule {}

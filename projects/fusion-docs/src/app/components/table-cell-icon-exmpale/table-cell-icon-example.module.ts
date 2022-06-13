import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableCellIconExampleComponent} from './table-cell-icon-example.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@NgModule({
    imports: [CommonModule, IconModule],
    declarations: [TableCellIconExampleComponent],
    exports: [TableCellIconExampleComponent]
})
export class TableCellIconExampleModule {}

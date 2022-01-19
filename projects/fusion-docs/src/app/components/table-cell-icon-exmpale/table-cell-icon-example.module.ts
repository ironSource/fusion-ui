import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '@ironsource/fusion-uifusion-ui';
import {TableCellIconExampleComponent} from './table-cell-icon-example.component';

@NgModule({
    imports: [CommonModule, IconModule],
    declarations: [TableCellIconExampleComponent],
    exports: [TableCellIconExampleComponent]
})
export class TableCellIconExampleModule {}

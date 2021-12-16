import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '@ironsrc/fusion-ui';
import {TableCellIconExampleComponent} from './table-cell-icon-example.component';

@NgModule({
    imports: [CommonModule, IconModule],
    declarations: [TableCellIconExampleComponent],
    exports: [TableCellIconExampleComponent],
    entryComponents: [TableCellIconExampleComponent]
})
export class TableCellIconExampleModule {}

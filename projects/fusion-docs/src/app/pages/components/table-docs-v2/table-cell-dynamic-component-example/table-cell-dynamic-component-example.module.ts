import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableCellDynamicComponentExampleComponent} from './table-cell-dynamic-component-example.component';
import {StatusLabelModule} from '@ironource/fusion-ui';

@NgModule({
    declarations: [TableCellDynamicComponentExampleComponent],
    imports: [CommonModule, StatusLabelModule]
})
export class TableCellDynamicComponentExampleModule {}

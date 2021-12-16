import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableCellDynamicComponentExampleComponent} from './table-cell-dynamic-component-example.component';
import {StatusLabelModule} from '@ironsrc/fusion-ui';

@NgModule({
    declarations: [TableCellDynamicComponentExampleComponent],
    imports: [CommonModule, StatusLabelModule],
    entryComponents: [TableCellDynamicComponentExampleComponent]
})
export class TableCellDynamicComponentExampleModule {}

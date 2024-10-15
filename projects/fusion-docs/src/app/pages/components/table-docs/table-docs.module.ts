import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableDocsComponent} from './table-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AlertModule} from '@ironsource/fusion-ui/components/alert/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TableModule} from '@ironsource/fusion-ui/components/table/v1';
import {TableCellIconExampleModule} from '../../../components/table-cell-icon-exmpale';
import {TableCustomNoDataModule} from '../../../components/table-custom-no-data/table-custom-no-data.module';
import {ExmlForTooltipComponent} from '../../../components/exml-for-tooltip/exml-for-tooltip.component';

const routes: Routes = [{path: '', component: TableDocsComponent}];

@NgModule({
    declarations: [TableDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        TableModule,
        IconModule,
        AlertModule,
        TableCellIconExampleModule,
        TableCustomNoDataModule,
        ExmlForTooltipComponent
    ]
})
export class TableDocsModule {}

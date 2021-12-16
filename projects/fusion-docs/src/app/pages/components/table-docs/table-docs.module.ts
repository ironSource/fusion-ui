import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableDocsComponent} from './table-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TableModule, IconModule, AlertModule} from 'projects/fusion-ui/src/public-api';
import {TableCellIconExampleModule} from '../../../components/table-cell-icon-exmpale';
import {TableCustomNoDataModule} from '../../../components/table-custom-no-data/table-custom-no-data.module';

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
        TableCustomNoDataModule
    ],
    entryComponents: [TableDocsComponent]
})
export class TableDocsModule {}

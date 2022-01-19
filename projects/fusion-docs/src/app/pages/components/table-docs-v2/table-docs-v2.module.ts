import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableDocsV2Component} from './table-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TableModule} from '@ironsource/fusion-uifusion-ui';
import {TableCellDynamicComponentExampleModule} from './table-cell-dynamic-component-example';

const routes: Routes = [{path: '', component: TableDocsV2Component}];

@NgModule({
    declarations: [TableDocsV2Component],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        TableModule,
        TableCellDynamicComponentExampleModule
    ]
})
export class TableDocsV2Module {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutDocsV2Component} from './layout-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {LayoutModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/layout/layout.module';
import {TableModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/table/table.module';

const routes: Routes = [{path: '', component: LayoutDocsV2Component}];

@NgModule({
    declarations: [LayoutDocsV2Component],
    imports: [CommonModule, RouterModule.forChild(routes), ExampleBlockModule, CodeBlockModule, DocsMenuModule, LayoutModule, TableModule]
})
export class LayoutDocsV2Module {}

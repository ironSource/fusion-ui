import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutDocsV2Component} from './layout-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {LayoutModule} from '@ironsource/fusion-ui/components/layout/v2';
import {TableModule} from '@ironsource/fusion-ui/components/table/v1';

const routes: Routes = [{path: '', component: LayoutDocsV2Component}];

@NgModule({
    declarations: [LayoutDocsV2Component],
    imports: [CommonModule, RouterModule.forChild(routes), ExampleBlockModule, CodeBlockModule, DocsMenuModule, LayoutModule, TableModule]
})
export class LayoutDocsV2Module {}

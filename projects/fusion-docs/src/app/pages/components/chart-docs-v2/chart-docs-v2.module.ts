import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartDocsV2Component} from './chart-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {ChartLabelsModule, ChartModule} from '@ironsource/fusion-uifusion-ui';

const routes: Routes = [{path: '', component: ChartDocsV2Component}];

@NgModule({
    declarations: [ChartDocsV2Component],
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forChild(routes),
        DocsMenuModule,
        ExampleBlockModule,
        CodeBlockModule,
        ChartModule,
        ChartLabelsModule
    ]
})
export class ChartDocsV2Module {}

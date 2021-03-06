import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartDocsComponent} from './chart-docs.component';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {ChartModule} from '@ironsource/fusion-ui/components/chart/v1';
import {RouterModule, Routes} from '@angular/router';
import {ChartLabelsModule} from '@ironsource/fusion-ui/components/chart-labels/v1';

const routes: Routes = [
    {
        path: '',
        component: ChartDocsComponent
    }
];

@NgModule({
    declarations: [ChartDocsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        DocsMenuModule,
        ExampleBlockModule,
        CodeBlockModule,
        ChartModule,
        ChartLabelsModule
    ]
})
export class ChartDocsModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusLabelDocsComponent} from './status-label-docs.component';
import {RouterModule, Routes} from '@angular/router';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {StatusLabelModule, TableModule, TooltipModule} from '@ironsrc/fusion-ui';

const routes: Routes = [{path: '', component: StatusLabelDocsComponent}];

@NgModule({
    declarations: [StatusLabelDocsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CodeBlockModule,
        ExampleBlockModule,
        DocsMenuModule,
        StatusLabelModule,
        TableModule,
        TooltipModule
    ]
})
export class StatusLabelDocsModule {}

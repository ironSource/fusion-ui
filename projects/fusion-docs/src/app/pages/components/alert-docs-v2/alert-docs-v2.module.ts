import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertDocsV2Component} from './alert-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {AlertModule} from '@ironsource/fusion-ui/components/alert/v2';

const routes: Routes = [{path: '', component: AlertDocsV2Component}];

@NgModule({
    declarations: [AlertDocsV2Component],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        AlertModule
    ]
})
export class AlertDocsV2Module {}

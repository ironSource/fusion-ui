import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwitchersDocsV2Component} from './switchers-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {SwitcherModule} from '@ironsource/fusion-uifusion-ui';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [{path: '', component: SwitchersDocsV2Component}];

@NgModule({
    declarations: [SwitchersDocsV2Component],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        SwitcherModule
    ]
})
export class SwitchersDocsV2Module {}

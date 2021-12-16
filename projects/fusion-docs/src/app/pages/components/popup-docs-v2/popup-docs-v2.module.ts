import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupDocsV2Component} from './popup-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ButtonModule, PopupModule} from '@ironsrc/fusion-ui';
import {PopupV2InnerComponentExampleModule} from './popup-v2-inner-component-example/popup-v2-inner-component-example.module';

const routes: Routes = [{path: '', component: PopupDocsV2Component}];

@NgModule({
    declarations: [PopupDocsV2Component],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        ButtonModule,
        PopupModule,
        PopupV2InnerComponentExampleModule
    ]
})
export class PopupDocsV2Module {}

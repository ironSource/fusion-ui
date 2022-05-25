import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastDocsComponent} from './toast-docs.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {ToastModule} from '@ironsource/fusion-ui/components/toast';
import {ToastExampleContentModule} from '../../../components/toast-example-content/toast-example-content.module';

const routes: Routes = [{path: '', component: ToastDocsComponent}];

@NgModule({
    declarations: [ToastDocsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        ButtonModule,
        ToastModule,
        ToastExampleContentModule
    ]
})
export class ToastDocsModule {}

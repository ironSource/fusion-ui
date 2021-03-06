import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalDocsV2Component} from './modal-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v2';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {NotificationModule} from '@ironsource/fusion-ui/components/notification/v2';
import {ModalModule} from '@ironsource/fusion-ui/components/modal/v2';

const routes: Routes = [{path: '', component: ModalDocsV2Component}];

@NgModule({
    declarations: [ModalDocsV2Component],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        NotificationModule,
        ModalModule,
        ButtonModule,
        LoaderModule
    ]
})
export class ModalDocsV2Module {}

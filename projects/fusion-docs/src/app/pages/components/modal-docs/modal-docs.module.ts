import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalDocsComponent} from './modal-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {InputModule, LoaderModule, NotificationModule, ModalModule, ButtonModule} from '@ironsrc/fusion-ui';
import {ModalDocsRoutingModule} from './modal-docs-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [ModalDocsComponent],
    imports: [
        CommonModule,
        ModalDocsRoutingModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        ButtonModule,
        InputModule,
        LoaderModule,
        ModalModule,
        NotificationModule,
        ReactiveFormsModule
    ]
})
export class ModalDocsModule {}

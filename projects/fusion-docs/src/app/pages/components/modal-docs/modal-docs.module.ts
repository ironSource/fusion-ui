import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalDocsComponent} from './modal-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ModalModule} from '@ironsource/fusion-ui/components/modal/v1';
import {ModalDocsRoutingModule} from './modal-docs-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input/v1';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v1';
import {NotificationModule} from '@ironsource/fusion-ui/components/notification/v1';

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

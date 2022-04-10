import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MobilePreviewerDocsComponent} from './mobile-previewer-docs.component';
import {MobilePreviewerDocsRoutingModule} from './mobile-previewer-docs-routing.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ButtonModule} from '@ironsource/fusion-ui';
import {PopupModule} from '@ironsource/fusion-ui';
import {MobilePreviewerModule} from '@ironsource/fusion-ui';

@NgModule({
    declarations: [MobilePreviewerDocsComponent],
    exports: [MobilePreviewerDocsComponent],
    imports: [
        CommonModule,
        MobilePreviewerDocsRoutingModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        ButtonModule,
        PopupModule,
        MobilePreviewerModule
    ]
})
export class MobilePreviewerDocsModule {}

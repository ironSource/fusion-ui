import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MobilePreviewerDocsComponent} from './mobile-previewer-docs.component';
import {MobilePreviewerDocsRoutingModule} from './mobile-previewer-docs-routing.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v1';
import {PopupModule} from '@ironsource/fusion-ui/components/popup/v2';
import {MobilePreviewerModule} from '@ironsource/fusion-ui/components/mobile-previewer/v1';

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

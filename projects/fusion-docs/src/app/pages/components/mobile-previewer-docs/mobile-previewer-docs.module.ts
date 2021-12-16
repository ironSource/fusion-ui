import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MobilePreviewerDocsComponent} from './mobile-previewer-docs.component';
import {MobilePreviewerDocsRoutingModule} from './mobile-previewer-docs-routing.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ButtonModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/button/button.module';
import {PopupModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/popup/popup.module';
import {MobilePreviewerModule} from '@ironsrc/fusion-ui';

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

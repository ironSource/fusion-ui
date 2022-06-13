import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MobilePreviewerDocsV2Component} from './mobile-previewer-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {MobilePreviewerModule} from '@ironsource/fusion-ui/components/mobile-previewer/v2';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {PopupModule} from '@ironsource/fusion-ui/components/popup/v2';
import {VideoPlayerModule} from '@ironsource/fusion-ui/components/video-player/v1';

const routes: Routes = [{path: '', component: MobilePreviewerDocsV2Component}];

@NgModule({
    declarations: [MobilePreviewerDocsV2Component],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        PopupModule,
        ButtonModule,
        MobilePreviewerModule,
        VideoPlayerModule
    ]
})
export class MobilePreviewerDocsV2Module {}

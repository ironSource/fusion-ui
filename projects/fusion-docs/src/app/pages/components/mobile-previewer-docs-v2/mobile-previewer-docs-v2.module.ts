import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MobilePreviewerDocsV2Component} from './mobile-previewer-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ButtonModule, MobilePreviewerModule, PopupModule, VideoPlayerModule} from '@ironsrc/fusion-ui';
import {
    VIDEO_PLAYER_THEME_TOKEN,
    VideoPlayerTheme
} from '../../../../../../fusion-ui/src/lib/components/ui-components/video-player/video-player-theme';

const routes: Routes = [{path: '', component: MobilePreviewerDocsV2Component}];

export const videoPlayerTheme: VideoPlayerTheme = {
    '--player-border-radius': '0'
};

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
    ],
    providers: [{provide: VIDEO_PLAYER_THEME_TOKEN, useValue: videoPlayerTheme}]
})
export class MobilePreviewerDocsV2Module {}

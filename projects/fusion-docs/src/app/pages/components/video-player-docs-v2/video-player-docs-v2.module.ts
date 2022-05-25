import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoPlayerDocsV2Component} from './video-player-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {VideoPlayerModule} from '@ironsource/fusion-ui/components/video-player/v2';

const routes: Routes = [{path: '', component: VideoPlayerDocsV2Component}];

@NgModule({
    declarations: [VideoPlayerDocsV2Component],
    imports: [CommonModule, RouterModule.forChild(routes), ExampleBlockModule, CodeBlockModule, DocsMenuModule, VideoPlayerModule]
})
export class VideoPlayerDocsV2Module {}

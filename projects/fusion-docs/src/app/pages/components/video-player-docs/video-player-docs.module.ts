import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoPlayerDocsComponent} from './video-player-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {VideoPlayerModule} from '@ironsource/fusion-ui/components/video-player/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v1';
const routes: Routes = [{path: '', component: VideoPlayerDocsComponent}];

@NgModule({
    declarations: [VideoPlayerDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        TooltipModule,
        ButtonModule,
        VideoPlayerModule
    ]
})
export class VideoPlayerDocsModule {}

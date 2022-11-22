import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoPlayerComponent} from './video-player.component';
import {VideoPlayerOptions, VIDEO_PLAYER_OPTIONS_DEFUALT_VALUE} from '@ironsource/fusion-ui/components/video-player/common/entities';
import {SVG_OPTIONS_TOKEN} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {SecondsToMinutesPipe} from '@ironsource/fusion-ui/pipes/numbers';

@NgModule({
    declarations: [VideoPlayerComponent],
    exports: [VideoPlayerComponent],
    imports: [CommonModule, IconModule, SecondsToMinutesPipe]
})
export class VideoPlayerModule {
    static forRoot(options?: VideoPlayerOptions): ModuleWithProviders<VideoPlayerModule> {
        return {
            ngModule: VideoPlayerModule,
            providers: [
                {
                    provide: SVG_OPTIONS_TOKEN,
                    useValue: options ? options.svgOptions : VIDEO_PLAYER_OPTIONS_DEFUALT_VALUE.svgOptions
                }
            ]
        };
    }
}

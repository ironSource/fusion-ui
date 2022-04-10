import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoPlayerComponent} from './video-player.component';
import {VideoPlayerOptions} from './video-player-entities';
import {SVG_OPTIONS_TOKEN} from '@ironsource/fusion-ui/components/svg';
import {VIDEO_PLAYER_OPTIONS_DEFUALT_VALUE} from './video-player-config';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {SecondsToMinutesModule} from '@ironsource/fusion-ui/pipes/numbers';

@NgModule({
    declarations: [VideoPlayerComponent],
    exports: [VideoPlayerComponent],
    imports: [CommonModule, IconModule, SecondsToMinutesModule]
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

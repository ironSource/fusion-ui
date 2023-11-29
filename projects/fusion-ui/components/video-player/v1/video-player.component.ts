import {ChangeDetectionStrategy, Component} from '@angular/core';
import {VideoPlayerBaseComponent} from '@ironsource/fusion-ui/components/video-player/common/base';

@Component({
    selector: 'fusion-video-player',
    templateUrl: './video-player.component.html',
    styleUrls: ['./video-player.component.scss'],
    host: {'ui-version': '1'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoPlayerComponent extends VideoPlayerBaseComponent {
    playIconName = {iconName: 'play-video', iconVersion: 'v1'};

    pauseIconName = {iconName: 'pause', iconVersion: 'v1'};

    videoCameraIconName = {iconName: 'video-camera', iconVersion: 'v1'};
}

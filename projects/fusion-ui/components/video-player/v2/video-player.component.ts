import {ChangeDetectionStrategy, Component} from '@angular/core';
import {VideoPlayerBaseComponent} from '@ironsource/fusion-ui/components/video-player/common/base';

@Component({
    selector: 'fusion-video-player',
    templateUrl: './video-player.component.html',
    styleUrls: ['./video-player.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class VideoPlayerComponent extends VideoPlayerBaseComponent {
    playIconName = {iconName: 'play-video-2', iconVersion: 'v2'};

    pauseIconName = {iconName: 'pause-video-2', iconVersion: 'v2'};

    videoCameraIconName = {iconName: 'video-camera_2', iconVersion: 'v2'};
}

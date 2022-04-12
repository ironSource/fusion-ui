import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    OnInit,
    ViewChild,
    Injector,
    SimpleChanges,
    AfterViewInit
} from '@angular/core';
import {isNull} from '@ironsource/fusion-ui/utils';
import {StyleBase} from '@ironsource/fusion-ui/components/style';
import {BehaviorSubject, fromEvent, Observable, Subject} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';
import {StyleVersion} from '@ironsource/fusion-ui/services/version';
import {VIDEO_PLAYER_THEME_TOKEN} from './video-player-theme';
import {IconData} from '@ironsource/fusion-ui/components/icon';

@Component({
    selector: 'fusion-video-player',
    templateUrl: './video-player.component.html',
    styleUrls: ['./video-player.component.scss', './video-player.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoPlayerComponent extends StyleBase implements OnInit, AfterViewInit, OnChanges {
    @ViewChild('videoPlayer') videoPlayer;
    @Input() src: string;
    @Input() width = '100%';
    @Input() height = '100%';
    @Input() thumbnail: string;
    @Input() options: {
        noVideo?: {icon?: string; title?: string};
        autoplay?: boolean;
        showTimeline?: boolean;
        controlsList?: string;
    } = {};

    get isAutoplay() {
        return !!this.options.autoplay ? true : null;
    }

    get isTimeline(): boolean {
        return this.options.showTimeline ? true : null;
    }

    playIconName$: Observable<IconData> = this.selectedVersion$.pipe(
        map(styleVersion =>
            styleVersion === StyleVersion.V2 ? {iconName: 'play-video-2', iconVersion: 'v2'} : {iconName: 'play-video', iconVersion: 'v1'}
        ),
        startWith({iconName: 'play-video', iconVersion: 'v1'})
    );

    pauseIconName$: Observable<IconData> = this.selectedVersion$.pipe(
        map(styleVersion =>
            styleVersion === StyleVersion.V2 ? {iconName: 'pause-video-2', iconVersion: 'v2'} : {iconName: 'pause', iconVersion: 'v1'}
        ),
        startWith({iconName: 'pause', iconVersion: 'v1'})
    );

    videoCameraIconName$: Observable<IconData> = this.selectedVersion$.pipe(
        map(styleVersion =>
            styleVersion === StyleVersion.V2
                ? {iconName: 'video-camera_2', iconVersion: 'v2'}
                : {iconName: 'video-camera', iconVersion: 'v1'}
        ),
        startWith({iconName: 'video-camera', iconVersion: 'v1'})
    );

    styleVersion = StyleVersion;

    isVideoPlaying$ = new BehaviorSubject<boolean>(false);

    videoLoaded$ = new Subject();
    videoDuration$: Observable<number>;
    progressValue$: Observable<number>;
    videoCurrentTime$: Observable<number>;

    constructor(public injector: Injector) {
        super(injector, VIDEO_PLAYER_THEME_TOKEN);
    }

    ngOnInit() {
        this.options.noVideo = this.options.noVideo || {};
        if (!isNull(this.isAutoplay) && this.isAutoplay) {
            this.isVideoPlaying$.next(true);
        }

        this.videoDuration$ = this.getVideoDuration();
        this.videoCurrentTime$ = this.getVideoCurrentTime();

        if (this.isTimeline) {
            this.progressValue$ = this.updateProgress();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.videoPlayer) {
            if (!isNull(this.isAutoplay) && this.isAutoplay) {
                this.isVideoPlaying$.next(true);
            } else {
                this.videoPlayer.nativeElement.pause();
                this.isVideoPlaying$.next(false);
            }
        }
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.videoLoaded$.next();
    }

    onVideoPlayPauseButtonClicked(event: MouseEvent, video): void {
        if (this.isVideoPlaying$.getValue()) {
            video.pause();
        } else {
            video.play();
        }
        this.isVideoPlaying$.next(!this.isVideoPlaying$.getValue());
        event.stopPropagation();
    }

    private getVideoDuration(): Observable<number> {
        return this.videoLoaded$.asObservable().pipe(
            switchMap(_ =>
                fromEvent(this.videoPlayer.nativeElement, 'loadedmetadata').pipe(
                    map(($event: Event) => {
                        return parseInt(($event.target as HTMLMediaElement).duration.toString(), 10);
                    })
                )
            ),
            startWith(0)
        );
    }

    private getVideoCurrentTime(): Observable<number> {
        return this.videoLoaded$.asObservable().pipe(
            switchMap(_ =>
                fromEvent(this.videoPlayer.nativeElement, 'timeupdate').pipe(
                    map(($event: Event) => {
                        return parseInt(($event.target as HTMLMediaElement).currentTime.toString(), 10);
                    })
                )
            ),
            startWith(0)
        );
    }

    private updateProgress(): Observable<number> {
        return this.videoLoaded$.asObservable().pipe(
            switchMap(_ =>
                fromEvent(this.videoPlayer.nativeElement, 'timeupdate').pipe(
                    map(($event: Event) => {
                        const player = $event.target as HTMLMediaElement;
                        return Math.floor((100 / player.duration) * player.currentTime);
                    })
                )
            ),
            startWith(0)
        );
    }
}

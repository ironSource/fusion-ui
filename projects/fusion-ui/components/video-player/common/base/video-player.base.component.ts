import {Input, OnChanges, OnInit, ViewChild, SimpleChanges, AfterViewInit, Directive} from '@angular/core';
import {isNull} from '@ironsource/fusion-ui/utils';
import {BehaviorSubject, fromEvent, Observable, Subject} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';

@Directive()
export abstract class VideoPlayerBaseComponent implements OnInit, AfterViewInit, OnChanges {
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

    isVideoPlaying$ = new BehaviorSubject<boolean>(false);

    videoLoaded$ = new Subject();
    videoDuration$: Observable<number>;
    progressValue$: Observable<number>;
    videoCurrentTime$: Observable<number>;

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

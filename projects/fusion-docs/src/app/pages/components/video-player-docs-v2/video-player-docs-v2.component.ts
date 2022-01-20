import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {Observable, Subject} from 'rxjs';
import {StyleVersion, VersionService} from '@ironsource/fusion-ui';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {DocsLayoutService} from '../../docs/docs-layout.service';

@Component({
    selector: 'fusion-video-player-docs-v2',
    templateUrl: './video-player-docs-v2.component.html',
    styleUrls: ['./video-player-docs-v2.component.scss']
})
export class VideoPlayerDocsV2Component implements OnInit, OnDestroy {
    onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    rightMenu: DocsMenuItem[] = [
        {
            title: 'Basic',
            items: [
                {
                    label: 'Base Examples',
                    scrollTo: '#typeBase',
                    scrollOffset: 80
                },
                {
                    label: 'Resizable',
                    scrollTo: '#typeResizable',
                    scrollOffset: 80
                }
            ]
        },
        {
            title: 'Configuration',
            items: [
                {
                    label: 'Parameters',
                    scrollTo: '#params',
                    scrollOffset: 30
                }
            ]
        }
    ];

    videoConfig = [
        {
            name: 'Play and pause only',
            options: {},
            thumbnail: 'https://thumbnails-demand.ssacdn.com/hptxht4ie9kcyvjzaiz1.jpg',
            video: 'https://v.ssacdn.com/demand-creatives/assets/videos/hptxht4ie9kcyvjzaiz1.mp4'
        },
        {
            name: 'With Timeline',
            options: {showTimeline: true},
            thumbnail: 'https://thumbnails-demand.ssacdn.com/r7m09rxubjmjhtorpsj9.jpg',
            video: 'https://v.ssacdn.com/demand-creatives/assets/videos/r7m09rxubjmjhtorpsj9.mp4'
        }
    ];

    constructor(private versionService: VersionService, private router: Router, private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Video player'
        });

        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V1) {
                this.router.navigate(['docs/components/video-player']);
            }
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}

import {Component, OnInit} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {VersionService} from '../../../services/version/version.service';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';

@Component({
    selector: 'fusion-video-player-docs',
    templateUrl: './video-player-docs.component.html',
    styleUrls: ['./video-player-docs.component.scss'],
    standalone: false
})
export class VideoPlayerDocsComponent implements OnInit {
    onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    rightMenu: DocsMenuItem[] = [
        {
            title: 'Basic',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#typeBasic',
                    scrollOffset: 80
                },
                {
                    label: 'Autoplay',
                    scrollTo: '#typeBasicAutoplay',
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
    config = {
        thumbnail: 'https://s3-eu-west-1.amazonaws.com/ssa.public.videos/thumbnails/qSOaltvVFs_56293.jpg',
        // eslint-disable-next-line max-len
        video: 'https://v.ssacdn.com/auto/xOjjQjsSQV_0.mp4'
    };

    curIndex = 0;
    /* eslint-disable */
    videoSrc = [
        'https://ui-upload-staging.supersonic.com/ae0593cd-581c-4060-b972-a2f518143dbb/game/5c748ce7-d9ed-4e4c-91bf-34a964876af9/video/7b5e9bb211133f0fbb9136f42bc46753.mp4',
        'https://v.ssacdn.com/auto/xOjjQjsSQV_0.mp4',
        'https://ui-upload-staging.supersonic.com/bd84ccd6-cd62-4866-9f8d-190c327e766d/game/0961105c-1439-4baa-992d-e6246d90103c/video/3b3d9a977993d08f7e31a2ed5281dc6c.mp4'
    ];

    changeVideoSrc(): void {
        if (this.curIndex === 2) {
            this.curIndex = -1;
        }
        this.curIndex++;
    }

    constructor(private versionService: VersionService, private router: Router) {}

    ngOnInit() {
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V2 || styleVersion === StyleVersion.V3) {
                this.router.navigate(['docs/components/v2/video-player']);
            }
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}

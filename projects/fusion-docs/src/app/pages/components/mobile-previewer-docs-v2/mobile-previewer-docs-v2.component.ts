import {Component, OnDestroy, OnInit, Type} from '@angular/core';
import {PopupEntity, PopupLocation, PopupService, StyleVersion, VideoPlayerComponent} from '@ironsource/fusion-ui';
import {MobilePreviewerComponent} from '@ironsource/fusion-ui/components/mobile-previewer/v2';
import {MobilePreviewerComponentConfiguration, MobileOrientation} from '@ironsource/fusion-ui/components/mobile-previewer/common/base';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {VersionService} from '../../../services/version/version.service';

const popUpBasic: PopupEntity = {
    location: PopupLocation.BottomRight,
    component: {
        type: MobilePreviewerComponent as Type<Component>,
        data: {
            configurations: {
                component: {
                    type: VideoPlayerComponent as Type<Component>,
                    data: {
                        src: 'https://v.ssacdn.com/demand-creatives/assets/videos/r7m09rxubjmjhtorpsj9.mp4',
                        thumbnail: 'https://thumbnails-demand.ssacdn.com/r7m09rxubjmjhtorpsj9.jpg'
                    }
                }
            } as MobilePreviewerComponentConfiguration
        }
    }
};

@Component({
    selector: 'fusion-mobile-previewer-docs-v2',
    templateUrl: './mobile-previewer-docs-v2.component.html',
    styleUrls: ['./mobile-previewer-docs-v2.component.scss']
})
export class MobilePreviewerDocsV2Component implements OnInit, OnDestroy {
    onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    MobileOrientation = MobileOrientation;
    rightMenu: Array<any> = [
        {
            title: 'Popup Examples',
            items: [
                {
                    label: 'Fixed position on screen',
                    scrollTo: '#position_fixed'
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

    popupData$: Observable<PopupEntity>;

    constructor(
        private popupService: PopupService,
        private versionService: VersionService,
        private router: Router,
        private docLayoutService: DocsLayoutService
    ) {}

    ngOnInit(): void {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Mobile previewer'
        });

        this.popupData$ = this.popupService.popupData$.asObservable();
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V1) {
                this.router.navigate(['docs/components/mobile-previewer']);
            }
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    openPopup(orientation: MobileOrientation) {
        popUpBasic.component.data.configurations.orientation = orientation;
        this.popupService.showPopUp({...popUpBasic});
    }
}

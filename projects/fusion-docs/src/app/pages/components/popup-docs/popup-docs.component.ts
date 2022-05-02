import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {PopupEntity, PopupLocation} from '@ironsource/fusion-ui';
import {PopupService} from '@ironsource/fusion-ui';
import {Observable, Subject} from 'rxjs';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {StyleVersion} from '@ironsource/fusion-ui';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {VersionService} from '../../../services/version/version.service';

const popUpBasic: PopupEntity = {
    size: {
        width: 300,
        height: 300
    },
    backgroundColor: 'yellow'
};

@Component({
    selector: 'fusion-popup-docs',
    templateUrl: './popup-docs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupDocsComponent implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    rightMenu: DocsMenuItem[] = [
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
                },
                {
                    label: 'Events',
                    scrollTo: '#events',
                    scrollOffset: 30
                },
                {
                    label: 'Service',
                    scrollTo: '#service',
                    scrollOffset: 30
                }
            ]
        }
    ];

    popupData$: Observable<PopupEntity>;

    popupLocation = PopupLocation;

    constructor(private popupService: PopupService, private versionService: VersionService, private router: Router) {}

    ngOnInit(): void {
        this.popupData$ = this.popupService.popupData$.asObservable();
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V2 || styleVersion === StyleVersion.V3) {
                this.router.navigate(['docs/components/v2/popup']);
            }
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    openBasic(popupLocation: PopupLocation) {
        this.popupService.showPopUp({...popUpBasic, ...{location: popupLocation}});
    }
}

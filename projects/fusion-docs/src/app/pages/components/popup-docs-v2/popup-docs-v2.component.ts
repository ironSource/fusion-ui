import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {PopupEntity, PopupLocation} from '@ironsource/fusion-ui/components/popup/common/entities';
import {PopupService} from '@ironsource/fusion-ui/components/popup/common/services';
import {takeUntil} from 'rxjs/operators';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {Router} from '@angular/router';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {VersionService} from '../../../services/version/version.service';

@Component({
    selector: 'fusion-popup-docs-v2',
    templateUrl: './popup-docs-v2.component.html',
    styleUrls: ['./popup-docs-v2.component.scss']
})
export class PopupDocsV2Component implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    rightMenu: DocsMenuItem[] = [
        {
            title: 'Popup Examples',
            items: [
                {
                    label: 'Fixed position on screen',
                    scrollTo: '#position_fixed'
                },
                {
                    label: 'Related to the element',
                    scrollTo: '#element_related'
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

    constructor(
        private popupService: PopupService,
        private versionService: VersionService,
        private router: Router,
        private docLayoutService: DocsLayoutService
    ) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Popup'
        });

        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V1) {
                this.router.navigate(['docs/components/popup']);
            }
        });
        this.popupData$ = this.popupService.popupData$.asObservable();
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    openBasic(popupLocation: PopupLocation) {
        this.popupService.showPopUp({location: popupLocation});
    }

    openRelated($event) {
        const targetElRef = $event.currentTarget;
        this.popupService.showPopUp({
            location: PopupLocation.ElementRelated,
            newInstance: true,
            hostElement: targetElRef,
            hostElementPositionOffset: {top: 60, left: 360}
        });
    }

    closePopUp() {
        this.popupService.closePopUp();
    }
}

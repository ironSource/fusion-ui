import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, Type} from '@angular/core';
import {PopupEntity, PopupLocation} from '@ironsource/fusion-ui';
import {PopupService} from '@ironsource/fusion-ui';
import {Observable, Subject} from 'rxjs';
import {MobileOrientation, MobilePreviewerComponent, MobilePreviewerComponentConfiguration, StyleVersion} from '@ironsource/fusion-ui';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {VersionService} from '../../../services/version/version.service';

const innerTextNodeElement = document.createElement('div');
const innerTextNodeElementText = document.createTextNode('Mobile Previewer Demo');
innerTextNodeElement.appendChild(innerTextNodeElementText);

const popUpBasic: PopupEntity = {
    backgroundColor: 'yellow',
    location: PopupLocation.BottomRight,
    component: {
        type: MobilePreviewerComponent as Type<Component>,
        data: {
            configurations: {
                element: innerTextNodeElement
            } as MobilePreviewerComponentConfiguration
        }
    }
};

@Component({
    selector: 'fusion-mobile-previewer-docs',
    templateUrl: './mobile-previewer-docs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobilePreviewerDocsComponent implements OnInit, OnDestroy {
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

    constructor(private popupService: PopupService, private versionService: VersionService, private router: Router) {}

    ngOnInit(): void {
        this.popupData$ = this.popupService.popupData$.asObservable();
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V2) {
                this.router.navigate(['docs/components/v2/mobile-previewer']);
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

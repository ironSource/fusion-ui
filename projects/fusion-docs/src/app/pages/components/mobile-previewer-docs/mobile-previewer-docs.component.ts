import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, Type} from '@angular/core';
import {PopupEntity, PopupLocation} from '@ironsource/fusion-ui/components/popup/common/entities';
import {PopupService} from '@ironsource/fusion-ui/components/popup/common/services';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {MobilePreviewerComponent} from '@ironsource/fusion-ui/components/mobile-previewer/v1';
import {MobileOrientation, MobilePreviewerComponentConfiguration} from '@ironsource/fusion-ui/components/mobile-previewer/common/base';
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
    width = 370;
    height = 208;
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
            if (styleVersion === StyleVersion.V2 || styleVersion === StyleVersion.V3) {
                this.router.navigate(['docs/components/v2/mobile-previewer']);
            }
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    selectionChanged(selection: any) {
        this.height = selection.height;
        this.width = selection.width;
    }

    openPopup(orientation: MobileOrientation) {
        popUpBasic.component.data.configurations.orientation = orientation;
        this.popupService.showPopUp({...popUpBasic});
    }
}

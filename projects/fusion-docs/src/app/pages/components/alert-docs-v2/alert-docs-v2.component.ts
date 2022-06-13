import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {VersionService} from '../../../services/version/version.service';

@Component({
    selector: 'fusion-alert-docs-v2',
    templateUrl: './alert-docs-v2.component.html',
    styleUrls: ['./alert-docs-v2.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertDocsV2Component implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    rightMenu: DocsMenuItem[] = [
        {
            title: 'Type',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#typeBasic',
                    scrollOffset: 30
                },
                {
                    label: 'Without "close" button',
                    scrollTo: '#typeNoClose',
                    scrollOffset: 15
                },
                {
                    label: 'Size "small"',
                    scrollTo: '#typeSmall',
                    scrollOffset: 15
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
                }
            ]
        }
    ];

    constructor(private versionService: VersionService, private router: Router, private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V1) {
                this.router.navigate(['docs/components/alert']);
            }
        });

        this.docLayoutService.updateLayoutHeaderTitle({text: 'Alerts', type: 'static'});
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    linkClicked($event): void {
        $event.preventDefault();
    }
}

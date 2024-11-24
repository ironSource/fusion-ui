import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {Observable, Subject} from 'rxjs';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {VersionService} from '../../../services/version/version.service';

@Component({
    selector: 'fusion-alert-docs',
    templateUrl: './alert-docs.component.html',
    styleUrls: ['./alert-docs.component.scss'],
    standalone: false
})
export class AlertDocsComponent implements OnInit, OnDestroy {
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
                    label: 'Small Header Alert',
                    scrollTo: '#typeSmallHeader',
                    scrollOffset: 15
                },
                {
                    label: 'Large Alert',
                    scrollTo: '#typeLargeAlert',
                    scrollOffset: 15
                },
                {
                    label: 'Full Color Alert',
                    scrollTo: '#typeFullColor',
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

    constructor(private versionService: VersionService, private router: Router) {}

    ngOnInit() {
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V2 || styleVersion === StyleVersion.V3) {
                this.router.navigate(['docs/components/v2/alert']);
            }
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    closeButtonClicked(event: any): void {
        console.log('>>', event);
    }
}

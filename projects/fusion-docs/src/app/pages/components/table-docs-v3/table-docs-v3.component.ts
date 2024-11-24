import {Component, OnDestroy, OnInit} from '@angular/core';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {VersionService} from '../../../services/version/version.service';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'fusion-table-docs-v3',
    templateUrl: './table-docs-v3.component.html',
    styleUrls: ['./table-docs-v3.component.scss'],
    standalone: false
})
export class TableDocsV3Component implements OnInit, OnDestroy {
    onDestroy$ = new Subject();

    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    constructor(private versionService: VersionService, private router: Router) {}

    ngOnInit(): void {
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V1) {
                this.router.navigate(['docs/components/table']);
            } else if (styleVersion === StyleVersion.V2) {
                this.router.navigate(['docs/components/v2/table']);
            }
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}

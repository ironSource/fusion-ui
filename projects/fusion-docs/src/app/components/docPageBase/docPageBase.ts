/*
 * Created on 2020.10.11 By Andy Kononenko (andyk@ironsrc.com)
 */
import {OnInit, OnDestroy} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {StyleVersion} from '@ironsource/fusion-ui';
import {Router} from '@angular/router';
import {VersionService} from '../../services/version/version.service';

export abstract class DocPageBase implements OnInit, OnDestroy {
    protected onDestroy$ = new Subject<void>();
    protected selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    constructor(private versionService: VersionService, private router: Router) {}

    ngOnInit() {
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            const newRoute = this.getNewRoute(this.router.url, styleVersion);
            if (this.router.url !== newRoute) {
                this.router.navigate([newRoute]);
            }
        });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    private getNewRoute(currentRoute: string, styleVersion: StyleVersion): string {
        const routeV2Prefix = 'v2';
        const currentRouteAsArray = currentRoute.split('/');
        if (styleVersion === StyleVersion.V1 && currentRouteAsArray.includes(routeV2Prefix)) {
            currentRouteAsArray.splice(currentRouteAsArray.length - 2, 1);
        } else if (styleVersion === StyleVersion.V2 && !currentRouteAsArray.includes(routeV2Prefix)) {
            currentRouteAsArray.splice(currentRouteAsArray.length - 1, 0, routeV2Prefix);
        }
        return currentRouteAsArray.join('/');
    }
}

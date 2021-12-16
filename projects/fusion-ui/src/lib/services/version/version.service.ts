import {Inject, Injectable, OnDestroy, Optional} from '@angular/core';
import {WindowService} from '../window/window.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {StyleVersion} from './style-version.enum';
import {STYLE_VERSION_TOKEN} from './style-version-config';
import {NATIVE_TOKEN} from '../../decorators/native-token';

export const FUSION_V1_CLASS = 'fusion-style-v1';

@Injectable({
    providedIn: 'root'
})
export class VersionService implements OnDestroy {
    private version$ = new BehaviorSubject(this.defaultVersion);
    private onDestroy$ = new Subject();

    public get styleVersion$(): Observable<StyleVersion> {
        return this.version$.asObservable();
    }

    public get styleVersion(): StyleVersion {
        return this.version$.getValue();
    }

    public set styleVersion(styleVersion) {
        this.version$.next(styleVersion);
    }

    constructor(
        private windowService: WindowService,
        @Optional() @Inject(NATIVE_TOKEN) isFusionNative: boolean,
        @Inject(STYLE_VERSION_TOKEN) private readonly defaultVersion: StyleVersion
    ) {
        if (isFusionNative) {
            this.windowService.bodyClass$.pipe(takeUntil(this.onDestroy$)).subscribe(this.setStyleVersion.bind(this));
        }
    }

    private setStyleVersion(classList: DOMTokenList) {
        const newStyleVersion = classList.contains(FUSION_V1_CLASS) ? StyleVersion.V1 : StyleVersion.V2;
        if (newStyleVersion !== this.styleVersion) {
            this.styleVersion = newStyleVersion;
        }
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}

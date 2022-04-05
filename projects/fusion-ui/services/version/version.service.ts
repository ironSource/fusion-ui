import {Inject, Injectable, OnDestroy, Optional} from '@angular/core';
import {WindowService} from '@ironsource/fusion-ui/services/window';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {StyleVersion} from './style-version.enum';
import {STYLE_VERSION_TOKEN} from './style-version-config';
import {NATIVE_TOKEN} from '@ironsource/fusion-ui/decorators';

export const FUSION_STYLE_VERSION_PREFIX = 'fu-style-v';

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

    public latestStyleVersion = VersionService.getLastStyleGVersion();

    static getLastStyleGVersion(): StyleVersion {
        const lastKey = Object.values(StyleVersion)[Object.values(StyleVersion).length / 2 - 1];
        return StyleVersion[lastKey];
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
        let newStyleVersion = this.latestStyleVersion;
        classList.forEach(item => {
            if (item.startsWith(FUSION_STYLE_VERSION_PREFIX)) {
                newStyleVersion = StyleVersion['V' + item.replace(FUSION_STYLE_VERSION_PREFIX, '')] ?? this.latestStyleVersion;
            }
        });
        if (newStyleVersion !== this.styleVersion) {
            this.styleVersion = newStyleVersion;
        }
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}

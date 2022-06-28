import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {DOCUMENT} from '@angular/common';
import {FUSION_STYLE_VERSION_CSS_VAR_NAME, StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';

@Injectable({
    providedIn: 'root'
})
export class VersionService {
    private version$ = new BehaviorSubject<StyleVersion>(this.getVersionFromCSS());

    public get styleVersion$(): Observable<StyleVersion> {
        return this.version$.asObservable();
    }

    public get styleVersion(): StyleVersion {
        return this.version$.getValue();
    }

    public set styleVersion(styleVersion) {
        this.updateCssVariable(styleVersion.toString());
        this.version$.next(styleVersion);
    }

    constructor(@Inject(DOCUMENT) private document: Document) {}

    private getLastStyleGVersion(): StyleVersion {
        const lastKey = Object.values(StyleVersion)[Object.values(StyleVersion).length / 2 - 1];
        return StyleVersion[lastKey];
    }

    private getVersionFromCSS(): StyleVersion {
        const root = this.document.documentElement;
        let uiSelectedStyleVersion = getComputedStyle(root).getPropertyValue(FUSION_STYLE_VERSION_CSS_VAR_NAME).trim();
        uiSelectedStyleVersion = uiSelectedStyleVersion ? uiSelectedStyleVersion : this.getLastStyleGVersion().toString();
        return StyleVersion[`V${uiSelectedStyleVersion}`];
    }

    private updateCssVariable(version: string): void {
        const root = this.document.documentElement;
        root.style.setProperty(FUSION_STYLE_VERSION_CSS_VAR_NAME, version);
    }
}

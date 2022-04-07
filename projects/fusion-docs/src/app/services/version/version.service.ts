import {Injectable} from '@angular/core';
import {startWith} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {StyleVersion} from '@ironsource/fusion-ui';

@Injectable({
    providedIn: 'root'
})
export class VersionService {
    private version$ = new BehaviorSubject(this.getLastStyleGVersion());

    public get styleVersion$(): Observable<StyleVersion> {
        return this.version$.asObservable();
    }

    public get styleVersion(): StyleVersion {
        return this.version$.getValue();
    }

    public set styleVersion(styleVersion) {
        this.version$.next(styleVersion);
    }

    constructor() {}

    private getLastStyleGVersion(): StyleVersion {
        const lastKey = Object.values(StyleVersion)[Object.values(StyleVersion).length / 2 - 1];
        return StyleVersion[lastKey];
    }
}

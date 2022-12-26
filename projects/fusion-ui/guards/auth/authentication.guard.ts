/**
 * Created by daniel.brazg on 01/05/2017.
 */
import {Inject, Injectable, Optional} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {AuthService} from '@ironsource/fusion-ui/services/auth';
import {UserService} from '@ironsource/fusion-ui/services/user';
import {RedirectService} from '@ironsource/fusion-ui/services/redirect';
import {MFE_SHARED_CONFIG, MfeSharedConfig} from '@ironsource/fusion-ui/services/shared-config';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private userService: UserService,
        private redirectService: RedirectService,
        @Inject(MFE_SHARED_CONFIG) @Optional() private config: MfeSharedConfig
    ) {}

    canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (_route.queryParams['loginAs']) {
            this.authService.authHeaderMaster = _route.queryParams['loginAs'];
        }

        if (this.authService.authToken) {
            return this.userService.fetchUserData().pipe(
                map(() => {
                    if (this._isBaseRoute(state.url)) {
                        this.redirectService.redirectToBase();
                    } else {
                        return true;
                    }
                }),
                catchError(() => of(this.disablePage(state.url)))
            );
        } else {
            return this.disablePage(state.url);
        }
    }

    disablePage(url) {
        const options = !this._isBaseRoute(url) ? {queryParams: {returnToUrl: url}} : {};

        if (this.config.environment.redirectEntrancePages) {
            const encodedURI = this.encodePathURI(url);
            const queryParams =
                typeof this.config.disablePage.redirectToPartners.queryParams === 'function'
                    ? this.config.disablePage.redirectToPartners.queryParams(encodedURI)
                    : this.config.disablePage.redirectToPartners.queryParams;
            this.redirectService.redirectToPartners(this.config.disablePage.redirectToPartners.path, queryParams);
        } else {
            this.redirectService.redirectToPage(this.config.disablePage.redirectToPage, options);
        }
        return false;
    }

    _isBaseRoute(url): boolean {
        return url === '/' || !url;
    }

    private encodePathURI(url: string): string {
        const splitUrl = url?.split('?');
        if (!splitUrl?.[1]) {
            return url;
        }
        const base = splitUrl[0];

        let queryParams;
        try {
            queryParams = encodeURI(splitUrl[1]).split('&').join('%26');
        } catch (ex) {
            queryParams = splitUrl[1];
        }

        return `${base}?${queryParams}`;
    }
}

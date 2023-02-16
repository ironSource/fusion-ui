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
import {MFE_SHARED_CONFIG_TOKEN, MfeSharedConfig} from '@ironsource/fusion-ui/services/shared-config';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private userService: UserService,
        private redirectService: RedirectService,
        @Inject(MFE_SHARED_CONFIG_TOKEN) @Optional() private mfeSharedConfig: MfeSharedConfig
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
                catchError(() => of(this.redirectToLoginPage(state.url)))
            );
        } else {
            return this.redirectToLoginPage(state.url);
        }
    }

    redirectToLoginPage(returnToUrl: string) {
        const options = !this._isBaseRoute(returnToUrl) ? {queryParams: {returnToUrl}} : {};
        const {entrancePages} = this.mfeSharedConfig;

        if (entrancePages.redirectEntrancePages) {
            const encodedURI = this.encodePathURI(returnToUrl);
            const queryParams = entrancePages.returnToQueryParamsFunc(encodedURI);
            this.redirectService.redirectToPartners(entrancePages.partnersLoginPath, queryParams);
        } else {
            this.redirectService.redirectToPage(entrancePages.loginPath, options);
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

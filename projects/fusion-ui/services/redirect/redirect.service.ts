import {Inject, Injectable, Optional} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '@ironsource/fusion-ui/services/user';
import {MFE_SHARED_CONFIG_TOKEN, MfeSharedConfig} from '@ironsource/fusion-ui/services/shared-config';
import {AuthService} from '@ironsource/fusion-ui/services/auth';

@Injectable({
    providedIn: 'root'
})
export class RedirectService {
    constructor(
        private userService: UserService,
        private router: Router,
        private authService: AuthService,
        @Inject(MFE_SHARED_CONFIG_TOKEN) @Optional() private mfeSharedConfig: MfeSharedConfig
    ) {}

    navigateByUrl(url: string): void {
        this.router.navigateByUrl(this.mfeSharedConfig.baseHref + url);
    }

    redirectToBase() {
        if (this.userService.isAllowed('admin')) {
            this.redirectToPage(this.mfeSharedConfig.defaultPageAdminUrl);
        } else {
            this.mfeSharedConfig.entrancePages.redirectEntrancePages
                ? this.redirectToPartners()
                : this.router.navigateByUrl(this.mfeSharedConfig.defaultPageUrl);
        }
    }

    redirectToPage(path: string, options?: any): Promise<boolean> {
        const routeCommand = [path];
        if (options && options.param) {
            routeCommand.push(options.param);
            delete options.param;
        }
        return this.router.navigate(routeCommand, options);
    }

    /**
     * redirect to external app
     * @param {string} urlToRedirect
     */
    redirectToExternal(urlToRedirect: string): void {
        window.location.href = urlToRedirect;
    }

    /**
     * redirect to partners app
     * @param {string} routeToRedirect
     * @param queryParams
     */
    redirectToPartners(routeToRedirect: string = '', queryParams?: string): void {
        let url;
        if (this.authService.isLoggedAsUser) {
            const query = queryParams ? `&${queryParams}` : '';
            const redirectToQueryParam = routeToRedirect ? `&redirectTo=${routeToRedirect}` : '';
            url = `/loginAs?as=${this.userService.userData.userName}${redirectToQueryParam}${query}`;
        } else {
            const query = queryParams ? `?${queryParams}` : '';
            url = '/' + routeToRedirect + query;
        }
        this.redirectToExternal(this.mfeSharedConfig.partnersRedirectURL + url);
    }
}

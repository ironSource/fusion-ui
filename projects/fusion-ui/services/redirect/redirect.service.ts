import {Inject, Injectable, Optional} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {UserService} from '@ironsource/fusion-ui/services/user';
import {MFE_SHARED_CONFIG, MfeSharedConfig} from '@ironsource/fusion-ui/services/shared-config';
import {AuthService} from '@ironsource/fusion-ui/services/auth';

@Injectable({
    providedIn: 'root'
})
export class RedirectService {
    constructor(
        private userService: UserService,
        private router: Router,
        private authService: AuthService,
        @Inject(MFE_SHARED_CONFIG) @Optional() private config: MfeSharedConfig
    ) {}

    redirectToBase() {
        if (this.userService.isAllowed('admin')) {
            this.redirectToPage(this.config.redirectService.redirectToBase.admin);
        } else {
            this.config.environment.isLocalEnv
                ? this.navigateByUrl(this.config.redirectService.redirectToBase.default)
                : this.redirectToPartners();
        }
    }

    redirectToPage(path: string, options?: any): Promise<boolean> {
        const routeCommand = [path];
        if (options && options.param) {
            routeCommand.push(options.param);
            delete options.param;
        }
        return this.navigate(routeCommand, options);
    }

    navigateByUrl(url: string, extras?: NavigationExtras): Promise<boolean> {
        if (url.startsWith('/')) {
            return this.router.navigateByUrl(`${this.config.baseRedirectUrl}${url}`.replace('//', '/'), extras);
        }
        return this.router.navigateByUrl(url, extras);
    }

    navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
        const commandsArray = Array.isArray(commands) ? commands : [commands];
        const [base] = commandsArray;
        if (base.startsWith('/')) {
            commandsArray[0] = `${this.config.baseRedirectUrl}${commandsArray[0]}`;
            return this.router.navigate(commandsArray, extras);
        }
        return this.router.navigate(commandsArray, extras);
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
        this.redirectToExternal(this.config.environment.platformPartnersRedirectURL + url);
    }
}

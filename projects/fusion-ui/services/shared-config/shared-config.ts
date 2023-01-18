import {InjectionToken} from '@angular/core';

export interface MfeSharedConfig {
    baseHref?: string;
    defaultPageUrl?: string;
    defaultPageAdminUrl?: string;
    partnersRedirectURL?: string;
    userDataApiUrl?: string;
    entrancePages?: {
        loginPath: string;
        partnersLoginPath: string;
        redirectEntrancePages: boolean;
        returnToQueryParamsFunc?: (url: string) => string;
    };
    auth?: {
        loginApiUrl?: string;
        forgotPasswordApiUrl?: string;
        signupApiUr?: string;
        signupVerificationApiUrl: string;
    };
}

export const MFE_SHARED_CONFIG_TOKEN = new InjectionToken<MfeSharedConfig>('Config for MFE Shared State', {
    providedIn: 'root',
    factory: () => ({baseHref: ''})
});

import {InjectionToken} from '@angular/core';

export interface MfeSharedConfig {
    baseRedirectUrl?: string;
    disablePage?: {
        redirectToPartners?: {
            path: string;
            queryParams?: string | ((url: string) => string);
        };
        redirectToPage?: string;
    };
    environment?: {
        isLocalEnv?: boolean;
        redirectEntrancePages?: boolean;
        platformPartnersRedirectURL?: string;
        platformPartners?: string;
        [key: string]: any;
    };
    auth?: {
        loginUrl?: string;
        forgotUrl?: string;
        signUpUrl?: string;
        signUpVerificationUrl: (token: string) => string;
    };
    redirectService?: {
        redirectToBase?: {
            admin: string;
            default: string;
        };
    };
}

export const MFE_SHARED_CONFIG = new InjectionToken<MfeSharedConfig>('Config for MFE Shared State', {
    providedIn: 'root',
    factory: () => ({})
});

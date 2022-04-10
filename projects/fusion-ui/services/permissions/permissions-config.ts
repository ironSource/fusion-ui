import {InjectionToken} from '@angular/core';
import {PermissionsOptions} from './permissions-options';

const PERMISSIONS_OPTIONS_DEFAULT_VALUES: PermissionsOptions = {
    permissions: {}
};

export const PERMISSIONS_OPTIONS_TOKEN = new InjectionToken<PermissionsOptions>('User options', {
    providedIn: 'root',
    factory: () => PERMISSIONS_OPTIONS_DEFAULT_VALUES
});

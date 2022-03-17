import {InjectionToken} from '@angular/core';
import {UserOptions} from './user-options';

const USER_OPTIONS_DEFAULT_VALUES: UserOptions = {
    userDataUrl: '',
    userDataPermissionsKey: 'permissions'
};

export const USER_OPTIONS_TOKEN = new InjectionToken<UserOptions>('User options', {
    providedIn: 'root',
    factory: () => USER_OPTIONS_DEFAULT_VALUES
});

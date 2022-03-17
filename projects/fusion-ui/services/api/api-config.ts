import {ApiOptions} from './api-entities';
import {InjectionToken} from '@angular/core';

export const API_OPTIONS_DEFAULT_VALUES: ApiOptions = {
    autoAuthHeader: false
};

export const API_OPTIONS_TOKEN = new InjectionToken<ApiOptions>('Api options', {
    providedIn: 'root',
    factory: () => API_OPTIONS_DEFAULT_VALUES
});

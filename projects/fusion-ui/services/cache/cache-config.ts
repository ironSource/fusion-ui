import {CacheOptions} from './cache-entities';
import {InjectionToken} from '@angular/core';

const CACHE_OPTIONS_DEFAULT_VALUES: CacheOptions = {
    isLocalEnv: false,
    persistentKeyPrefix: 'persistent_'
};

export const CACHE_OPTIONS_TOKEN = new InjectionToken<CacheOptions>('Cache options', {
    providedIn: 'root',
    factory: () => CACHE_OPTIONS_DEFAULT_VALUES
});

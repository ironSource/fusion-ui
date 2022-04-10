import {Inject, Injectable, Optional} from '@angular/core';
import {CacheType, CacheEntities, CacheOptions} from './cache-entities';
import {CACHE_OPTIONS_TOKEN} from './cache-config';

/**
 * @dynamic
 */
@Injectable({
    providedIn: 'root'
})
export class CacheService {
    cacheObject: any;

    constructor(
        @Optional()
        @Inject(CACHE_OPTIONS_TOKEN)
        private readonly cacheOptions: CacheOptions
    ) {
        this.cacheObject = {};
    }

    /**
     *
     * @param cacheType - cacheType (None, Application, SessionStorage, LocalStorage)
     * @param keyName - string keyName
     * @param persistent - is persistent
     */
    public get(cacheType: CacheType, keyName: string, {persistent = false}: CacheEntities = {}) {
        if (this.cacheOptions.isLocalEnv && !persistent) {
            cacheType = CacheType.SessionStorage;
        }

        keyName = persistent ? `${this.cacheOptions.persistentKeyPrefix}${keyName}` : keyName;
        let data = null;
        switch (cacheType) {
            case CacheType.Application:
                if (this.cacheObject[keyName]) {
                    data = this.cacheObject[keyName];
                }
                break;
            case CacheType.LocalStorage:
                const rawLSData = window.localStorage.getItem(keyName);
                data = JSON.parse(rawLSData ? this._b64DecodeUnicode(rawLSData) : rawLSData);
                break;
            case CacheType.SessionStorage:
                const rawSSData = window.sessionStorage.getItem(keyName);
                data = JSON.parse(rawSSData ? this._b64DecodeUnicode(rawSSData) : rawSSData);
                break;
        }
        return data;
    }

    /**
     * Set data in cache
     * @param cacheType - cacheType (None, Application, SessionStorage, LocalStorage)
     * @param keyName - string keyName
     * @param data - data to cache
     */
    public set(cacheType, keyName, data, {persistent = false}: CacheEntities = {}) {
        if (this.cacheOptions.isLocalEnv && !persistent) {
            cacheType = CacheType.SessionStorage;
        }

        keyName = persistent ? `${this.cacheOptions.persistentKeyPrefix}${keyName}` : keyName;
        switch (cacheType) {
            case CacheType.Application:
                this.cacheObject[keyName] = data;
                break;
            case CacheType.LocalStorage:
                window.localStorage.setItem(keyName, this._b64EncodeUnicode(JSON.stringify(data)));
                break;
            case CacheType.SessionStorage:
                window.sessionStorage.setItem(keyName, this._b64EncodeUnicode(JSON.stringify(data)));
                break;
        }
    }

    public remove(cacheType, keyName, {persistent = false}: CacheEntities = {}) {
        keyName = persistent ? `${this.cacheOptions.persistentKeyPrefix}${keyName}` : keyName;
        switch (cacheType) {
            case CacheType.Application:
                if (!!this.cacheObject[keyName]) {
                    // remove key from application cache if exist
                    delete this.cacheObject[keyName];
                }
                break;
            case CacheType.LocalStorage:
                window.localStorage.removeItem(keyName);
                break;
            case CacheType.SessionStorage:
                window.sessionStorage.removeItem(keyName);
                break;
        }
    }

    /**
     * Clear Cache in all cached objects
     */
    public clearCache() {
        this.cacheObject = {};
        this._clearLocalStorage();
        sessionStorage.clear();
    }

    /**
     * Clear Cache, for keys that start with partial key, in all cached objects
     */
    public clearCacheForPartialKey(cacheType, partialKey) {
        if (this.cacheOptions.isLocalEnv) {
            cacheType = CacheType.SessionStorage;
        }

        let keys = [];
        switch (cacheType) {
            case CacheType.Application:
                keys = Object.keys(this.cacheObject);
                break;
            case CacheType.LocalStorage:
                keys = Object.keys(window.localStorage);
                break;
            case CacheType.SessionStorage:
                keys = Object.keys(window.sessionStorage);
                break;
        }
        keys.forEach(key => {
            if (key.startsWith(partialKey)) {
                this.remove(cacheType, key);
            }
        });
    }

    private _clearLocalStorage() {
        const keys = Object.keys(localStorage);
        const persistentItems = [];
        // save persistent values
        keys.forEach(key => {
            if (key.startsWith(this.cacheOptions.persistentKeyPrefix)) {
                persistentItems.push({key, value: localStorage.getItem(key)});
            }
        });

        // clear cache
        localStorage.clear();

        // restore persistent values
        persistentItems.forEach(item => {
            localStorage.setItem(item.key, item.value);
        });
    }

    private _b64EncodeUnicode(str: string): string {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(Number('0x' + p1))));
    }

    private _b64DecodeUnicode(str: string): string {
        return decodeURIComponent(
            atob(str)
                .split('')
                .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
    }
}

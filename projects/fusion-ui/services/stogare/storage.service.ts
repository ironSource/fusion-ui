import {Injectable} from '@angular/core';
import {StorageType} from './storage.entities';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    cacheObject: any = {};

    public get(cacheType: StorageType, keyName: string) {
        let data = null;
        switch (cacheType) {
            case StorageType.Application:
                if (!isNullOrUndefined(this.cacheObject[keyName])) {
                    data = this.cacheObject[keyName];
                }
                break;
            case StorageType.LocalStorage:
                const rawLSData = window.localStorage.getItem(keyName);
                data = JSON.parse(rawLSData ? this._b64DecodeUnicode(rawLSData) : rawLSData);
                break;
            case StorageType.SessionStorage:
                const rawSSData = window.sessionStorage.getItem(keyName);
                data = JSON.parse(rawSSData ? this._b64DecodeUnicode(rawSSData) : rawSSData);
                break;
        }
        return data;
    }

    public set(cacheType: StorageType, keyName: string, data: any) {
        switch (cacheType) {
            case StorageType.Application:
                this.cacheObject[keyName] = data;
                break;
            case StorageType.LocalStorage:
                window.localStorage.setItem(keyName, this._b64EncodeUnicode(JSON.stringify(data)));
                break;
            case StorageType.SessionStorage:
                window.sessionStorage.setItem(keyName, this._b64EncodeUnicode(JSON.stringify(data)));
                break;
        }
    }

    public remove(cacheType: StorageType, keyName: string) {
        switch (cacheType) {
            case StorageType.Application:
                if (this.cacheObject[keyName]) {
                    delete this.cacheObject[keyName];
                }
                break;
            case StorageType.LocalStorage:
                window.localStorage.removeItem(keyName);
                break;
            case StorageType.SessionStorage:
                window.sessionStorage.removeItem(keyName);
                break;
        }
    }

    public clearCache() {
        this.cacheObject = {};
        localStorage.clear();
        sessionStorage.clear();
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

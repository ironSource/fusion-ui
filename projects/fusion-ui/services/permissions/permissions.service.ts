import {Inject, Injectable, Optional} from '@angular/core';
import {PERMISSIONS_OPTIONS_TOKEN} from './permissions-config';
import {PermissionsOptions} from './permissions-options';

@Injectable({
    providedIn: 'root'
})
export class PermissionsService {
    private _permissions: {[key: string]: string[]};

    constructor(
        @Optional()
        @Inject(PERMISSIONS_OPTIONS_TOKEN)
        private readonly permissionsOptions: PermissionsOptions
    ) {
        this._permissions = permissionsOptions.permissions;
    }

    public set permissions(permissions) {
        this._permissions = permissions;
    }

    public get permissions() {
        return this._permissions;
    }
}

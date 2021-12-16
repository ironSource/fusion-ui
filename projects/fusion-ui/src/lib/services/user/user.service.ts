import {Inject, Injectable, Optional} from '@angular/core';
import {isNullOrUndefined} from '../../utils';
import {ApiService} from '../api/api.service';
import {CacheService} from '../cache/cache.service';
import {PermissionsService} from '../permissions/permissions.service';
import {LogService} from '../log/log.service';
import {Observable, throwError as observableThrowError} from 'rxjs';
import {ApiRequestOptions, ApiResponseType} from '../api/api-entities';
import {CacheType} from '../cache/cache-entities';
import {catchError, tap} from 'rxjs/operators';
import {USER_OPTIONS_TOKEN} from './user-config';
import {UserOptions} from './user-options';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _userData: any = {};
    private _fetched = false;
    private _fetchUserDataSubject: Observable<any>;

    constructor(
        private apiService: ApiService,
        private cacheService: CacheService,
        private permissionsService: PermissionsService,
        private logService: LogService,
        @Optional()
        @Inject(USER_OPTIONS_TOKEN)
        private readonly userOptions: UserOptions
    ) {
        if (!this.userOptions.userDataUrl) {
            this.logService.error(new Error('userDataUrl is mandatory when using UserService'));
        }
    }

    public get userData() {
        return this._userData;
    }

    clearUserData() {
        this._userData = {};
        this._fetched = false;
    }

    fetchUserData(refresh?: boolean) {
        if (refresh || Object.keys(this._userData).length === 0) {
            const options: ApiRequestOptions = {
                responseType: ApiResponseType.Json,
                cache: CacheType.Application,
                retryStrategy: {maxRetryAttempts: 0}
            };
            this._fetchUserDataSubject = this.apiService.get(this.userOptions.userDataUrl, options).pipe(
                tap((response: {userData: any}) => {
                    this._userData = response.userData;
                    this._fetched = true;
                    return this._userData;
                }),
                catchError(err => {
                    this.clearUserData();
                    return observableThrowError(err);
                })
            );
            return this._fetchUserDataSubject;
        } else {
            return this._fetchUserDataSubject;
        }
    }

    isAllowed(permission): boolean {
        const userPermissions = this.getUserPermissions();
        return this.userData && userPermissions && !isNullOrUndefined(userPermissions[permission]) ? !!userPermissions[permission] : false;
    }

    getUserPermissions() {
        const permissionsPath = this.userOptions.userDataPermissionsKey.split('.');
        return permissionsPath.reduce((_, key) => this.userData[key]);
    }

    /**
     * check if user authorized to go into specific route
     * check that at least one permission exists in user data
     */
    isRouteAllowedByUser(route: string): boolean {
        return this.permissionsService.permissions[route] && this.permissionsService.permissions[route].length
            ? this.permissionsService.permissions[route].every(permission => this.isAllowed(permission))
            : true;
    }
}

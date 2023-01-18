import {Inject, Injectable, Optional} from '@angular/core';
import {ApiRequestOptions, ApiResponseType, ApiService} from '@ironsource/fusion-ui/services/api';

import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import {CacheType} from '@ironsource/fusion-ui/services/cache';
import {MFE_SHARED_CONFIG_TOKEN} from '@ironsource/fusion-ui/services/shared-config';

@Injectable({providedIn: 'root'})
export class UserService {
    private apiUrl = `${this.config?.environment?.platformJs}/users/userData`;
    private _fetched = false;
    public userData$ = new BehaviorSubject({});
    private _fetchUserDataSubject: Observable<any>;
    private userDataFetched$ = new BehaviorSubject<boolean>(false);
    public readonly userDataFetchedObservable$ = this.userDataFetched$.asObservable();

    constructor(private _apiService: ApiService, @Inject(MFE_SHARED_CONFIG_TOKEN) @Optional() private config) {}

    public get userUniqueId(): string {
        return this.userData.actualUser ? `as=${this.userData.userId}_from=${this.userData.actualUser}` : this.userData.userId;
    }

    public get userAdvertiser() {
        if (this.userData.tracking && this.userData.tracking.advertiserId) {
            return Object.assign(
                {id: this.userData.tracking.advertiserId},
                {
                    tracking: Object.assign(this.userData.tracking, {
                        isAdvertiserIndirect: this.isAllowed('isAdvertiserIndirect'),
                        isImpressionURLRequired: !this.isAllowed('createCampaignsWithoutImpressionURL')
                    })
                }
            );
        }
        return {id: 0, tracking: {}};
    }

    isRouteAllowedByUser(permissions: {[key: string]: string[]}, route: string): boolean {
        return permissions[route] && permissions[route].length ? permissions[route].every(permission => this.isAllowed(permission)) : true;
    }

    clearUserData() {
        this.userData$.next({});
        this._fetched = false;
    }

    isAllowed(permission): boolean {
        return this.userData?.permissions?.includes(permission);
    }

    get userData(): any {
        return this.userData$.getValue();
    }

    fetchUserData(refresh?: boolean): Observable<any> {
        const options: ApiRequestOptions = {
            responseType: ApiResponseType.Json,
            cache: CacheType.Application,
            retryStrategy: {maxRetryAttempts: 0}
        };
        if (!refresh && Object.keys(this.userData).length !== 0) {
            return this._fetchUserDataSubject;
        }

        this._fetchUserDataSubject = this._apiService.get(this.apiUrl, options).pipe(
            tap((response: {userData: any}) => {
                this.userData$.next(response);
                this._fetched = true;
                this.userDataFetched$.next(true);
                return response;
            }),
            catchError(err => {
                return throwError(err);
            })
        );
        return this._fetchUserDataSubject;
    }
}

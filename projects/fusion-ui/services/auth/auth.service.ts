import {throwError as observableThrowError} from 'rxjs';
import {Inject, Injectable, Optional} from '@angular/core';
import {ApiService, ApiResponseType} from '@ironsource/fusion-ui/services/api';

import {tap} from 'rxjs/operators';
import {UserService} from '@ironsource/fusion-ui/services/user';
import {MFE_SHARED_CONFIG_TOKEN, MfeSharedConfig} from '@ironsource/fusion-ui/services/shared-config';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _authTokenData: any;
    private _authTokenDataMaster: any;
    private _keyName: string;
    private _keyNameMaster: string;
    private _authHeader: string;
    private _authHeaderMaster: string;

    constructor(
        private _apiService: ApiService,
        private userService: UserService,
        @Inject(MFE_SHARED_CONFIG_TOKEN) @Optional() private mfeSharedConfig: MfeSharedConfig
    ) {
        this._authTokenData = null;
        this._authTokenDataMaster = null;
        this._keyName = 'authServiceDB';
        this._keyNameMaster = 'authServiceMasterDB';
        this.authToken = this.authToken; // emit change to authTokenChange in api service
        this.authTokenMaster = this.authTokenMaster; // emit change to authTokenMasterChange in api service
    }

    public set authHeader(token) {
        this._authHeader = token ? 'Advanced ' + token : null;
        this._apiService.authTokenChange.emit(this._authHeader);
    }

    public set authHeaderMaster(token) {
        this._authHeaderMaster = token ? 'Advanced ' + token : null;
        this._apiService.authTokenMasterChange.emit(this._authHeaderMaster);
    }

    public get authTokenMaster() {
        let tokenData = null;
        if (this._authTokenDataMaster && !this._isExpired(this._authTokenDataMaster.expiration)) {
            tokenData = this._authTokenDataMaster;
        } else if (localStorage.getItem(this._keyNameMaster)) {
            tokenData = JSON.parse(localStorage.getItem(this._keyNameMaster));
            this._authTokenDataMaster = tokenData;
        }

        return tokenData;
    }

    public get isLoggedAsUser(): boolean {
        return !!this._authHeaderMaster;
    }

    public get authToken() {
        let tokenData = null;
        if (this._authTokenData && !this._isExpired(this._authTokenData.expiration)) {
            tokenData = this._authTokenData;
        } else if (localStorage.getItem(this._keyName)) {
            tokenData = JSON.parse(localStorage.getItem(this._keyName));
            this._authTokenData = tokenData;
        }

        return tokenData;
    }

    public set authTokenMaster(data) {
        if (data && data.token && data.expiration) {
            this._authTokenDataMaster = Object.assign({}, data);
            this.authHeaderMaster = this._authTokenDataMaster.token;
            localStorage.setItem(this._keyNameMaster, JSON.stringify(data));
        } else {
            this.authHeaderMaster = null;
            this._authTokenDataMaster = null;
            localStorage.removeItem(this._keyNameMaster);
        }
    }

    public set authToken(data) {
        if (data && data.token && data.expiration) {
            this._authTokenData = Object.assign({}, data);
            this.authHeader = this._authTokenData.token;
            localStorage.setItem(this._keyName, JSON.stringify(data));
        } else {
            this.authHeader = null;
            this._authTokenData = null;
            localStorage.removeItem(this._keyName);
        }
    }

    private _isExpired(dateStr) {
        const dateParts = dateStr.split('-');
        const expiration = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2], 23, 59, 0));
        const now = new Date();
        return expiration < now;
    }

    public login(username, password) {
        this.logout();
        const apiUrl = this.mfeSharedConfig.auth.loginApiUrl;
        return this._apiService
            .post(
                apiUrl,
                {
                    username: username,
                    password: password
                },
                {
                    responseType: ApiResponseType.Json,
                    headers: {Authorization: ''}
                }
            )
            .pipe(
                tap(tokenData => {
                    this.authToken = tokenData;
                })
            );
    }

    public logout() {
        this.authTokenMaster = null;
        this.authToken = null;
        this.userService.clearUserData();
    }

    public signUp(name, userName, password, refId, captchaResponse) {
        const apiUrl = this.mfeSharedConfig.auth.signupApiUr;
        if (name && userName && password) {
            return this._apiService.post(
                apiUrl,
                {
                    name: name,
                    userName: userName,
                    password: password,
                    referrer: refId || null,
                    captchaResponse: captchaResponse || null,
                    demandSignup: true
                },
                {
                    responseType: ApiResponseType.Json,
                    headers: {Authorization: ''}
                }
            );
        } else {
            return observableThrowError('Missing Fields. Please check your details');
        }
    }

    public signUpVerification(token) {
        const apiUrl = `${this.mfeSharedConfig.auth.signupVerificationApiUrl}?token=${token}`;
        if (token) {
            return this._apiService.post(apiUrl, {token: token}, {responseType: ApiResponseType.Json});
        } else {
            return observableThrowError('Missing Fields. Please check your details');
        }
    }

    public resetPassword(userName) {
        const apiUrl = this.mfeSharedConfig.auth.forgotPasswordApiUrl;
        if (userName) {
            return this._apiService.post(
                apiUrl,
                {
                    captchaResponse: null,
                    username: userName
                },
                {responseType: ApiResponseType.Json}
            );
        } else {
            return observableThrowError('Missing Fields. Please check your details');
        }
    }
}

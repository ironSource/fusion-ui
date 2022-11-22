import {Observable, of, throwError, timer} from 'rxjs';
import {EventEmitter, Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, finalize, map, mergeMap, publishReplay, refCount, retryWhen} from 'rxjs/operators';
import {CapitalizePipe} from '@ironsource/fusion-ui/pipes/string';
import {CacheService} from '@ironsource/fusion-ui/services/cache';
import {ApiOptions, ApiPaginationOptions, ApiRequestOptions, ApiResponseType, ApiRetryStrategy} from './api-entities';
import {API_OPTIONS_TOKEN} from './api-config';
import {isObject} from '@ironsource/fusion-ui/utils';
import {HttpResponseStatusCodesEnum} from './http-response-status-codes.enum';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    public authTokenChange = new EventEmitter();
    public authTokenMasterChange = new EventEmitter();
    private authToken: any;
    private authTokenMaster: any;
    private observableList = {};
    private paginationRequests = {};

    constructor(
        protected http: HttpClient,
        protected cacheService: CacheService,
        protected capitalizePipe: CapitalizePipe,
        @Optional()
        @Inject(API_OPTIONS_TOKEN)
        protected readonly apiOptions: ApiOptions
    ) {
        // when token changed we update here for Authorization header
        this.authTokenChange.subscribe(newToken => {
            this.authToken = newToken;
        });
        this.authTokenMasterChange.subscribe(newToken => {
            this.authTokenMaster = newToken;
        });
    }

    /**
     * Create API GET request with cache options
     * @param url - request url
     * @param options - request options
     * @returns Observable
     */
    public get(rawUrl: string, options: ApiRequestOptions = {}) {
        const url = this._getPaginationFields(rawUrl, options.pagination);
        const action = options.parserAction ? `::${options.parserAction}` : '';
        let cachedData;
        if (options.cache && !options.refreshCache && (cachedData = this.cacheService.get(options.cache, `${url}${action}`))) {
            return of(cachedData);
        } else if (this.observableList[url]) {
            return this.observableList[url];
        } else {
            const requestOptions = this.buildRequestOptions(options);
            this.observableList[url] = this.http.get(url, requestOptions).pipe(
                map((responseBody: any) => {
                    this._setPaginationFields(rawUrl, options.pagination, responseBody);
                    const parsedData = this.parseResponse('Get', responseBody, options);
                    // check for parsed data.
                    // options.retryStrategy.onDataRequired - method that check if need to retry API call
                    // for example if we know that API MUST return data, but not (delay on DB slave), so we check if data arrive
                    // and if not - throw an error for enter to the retryWhen
                    if (options.retryStrategy && options.retryStrategy.onDataRequired) {
                        if (options.retryStrategy.onDataRequired(parsedData)) {
                            throw new Error('no data arrived, retry...');
                        }
                    }
                    if (options.cache) {
                        this.cacheService.set(options.cache, `${url}${action}`, parsedData);
                    }
                    return parsedData;
                }),
                retryWhen(this.genericRetryStrategy(options.retryStrategy)),
                catchError(this.handleError.bind(options)),
                finalize(() => {
                    delete this.observableList[url];
                }),
                publishReplay(1),
                refCount()
            );

            return this.observableList[url];
        }
    }

    /**
     * Create API PUT request
     * @param url - request url
     * @param body - request body
     * @param options - request options
     * @returns Observable<R|T> - response
     */
    public put(url, body: any = {}, options: ApiRequestOptions = {}) {
        body = this.parseRequest('Put', body, options);
        const requestOptions = this.buildRequestOptions(options);
        return this.http.put(url, body, requestOptions).pipe(
            map(res => this.parseResponse('Put', res, options)),
            catchError(this.handleError.bind(options))
        );
    }

    /**
     * Create API POST request
     * @param url - request url
     * @param body - request body
     * @param options - request options
     * @returns Observable<R|T> - response
     */
    public post(url, body: any = {}, options: ApiRequestOptions = {}) {
        body = this.parseRequest('Post', body, options);
        const requestOptions = this.buildRequestOptions(options);
        return this.http.post(url, body, requestOptions).pipe(
            map(res => this.parseResponse('Post', res, options)),
            catchError(this.handleError.bind(options))
        );
    }

    /**
     * Create API DELETE request
     * @param url - request url
     * @param options - request options
     * @returns Observable<R|T> - response
     */
    public delete(url, options: ApiRequestOptions = {}) {
        const requestOptions = this.buildRequestOptions(options);
        return this.http.delete(url, requestOptions).pipe(
            map(res => this.parseResponse('Delete', res, options)),
            catchError(this.handleError.bind(options))
        );
    }

    /**
     * Build angular request options object
     * @param options - request options
     * @returns headers - request headers
     */
    private buildRequestOptions({headers = {}, responseType, noAuthHeader}: ApiRequestOptions): {
        headers?: HttpHeaders;
        responseType: any;
    } {
        const options: {responseType: any; headers?: HttpHeaders} = {
            responseType
        };
        // adding Authorization header when user logged
        // if '' passed that means don't add Authorization header
        if (noAuthHeader) {
            delete headers.Authorization;
        } else if (this.apiOptions.autoAuthHeader) {
            if (!headers.Authorization && headers.Authorization !== '') {
                headers.Authorization = this.authTokenMaster ? this.authTokenMaster : this.authToken;
            } else if (headers.Authorization === '') {
                delete headers.Authorization;
            }
        }

        const headersCount = Object.keys(headers);
        if (headersCount && headersCount.length > 0) {
            options.headers = new HttpHeaders(headers);
        }

        return options;
    }

    /**
     * Handle http errors
     * @param error - error response
     * @returns ErrorObservable
     */
    private handleError(error: HttpErrorResponse | any): Observable<any> {
        const options = this as ApiRequestOptions;

        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;

        if (options.skipResponseErrorParsing) {
            return throwError(error);
        } else {
            if (!error) {
                errMsg = `Unknown error occurred`;
            } else {
                if (options.responseType === ApiResponseType.Text) {
                    // handle ApiResponseType.Text errors
                    try {
                        error.error = JSON.parse(error.error);
                    } catch (e) {}
                }

                const errorObj = isObject(error.error) ? error.error : error;
                errMsg = errorObj.message || errorObj.errorMessage || errorObj.error || `Unknown error occurred`;
            }

            return throwError({status: error.status, message: errMsg});
        }
    }

    /**
     *
     * @param action - request action: Post, Get, Put, Delete or other custom action
     * @param body - request body
     * @param options - request options
     * @returns any - parsed data
     */
    private parseRequest(action, body, options) {
        if (options.parserObj) {
            body = options.parserObj[`parse${action}Request`](body);
        }

        return body;
    }

    /**
     * Parse response to relevant object type.
     * Default type is Text
     * @param action - request action: Post, Get, Put, Delete or other custom action
     * @param res - response to parse
     * @param options - request options
     * @returns any - parsed data
     */
    private parseResponse(action, responseBody: any, options: ApiRequestOptions) {
        if (options.parserObj) {
            action = options.parserAction ? this.capitalizePipe.transform(options.parserAction) : action;
            responseBody = options.parserObj[`parse${action}Response`](responseBody);
        }

        return responseBody;
    }

    private _getPaginationFields(url: string, {resultsBulkSize, pageNumber}: ApiPaginationOptions = {}) {
        let pagination = '';
        if (pageNumber) {
            pagination = `resultsBulkSize=${resultsBulkSize}&pageNumber=${pageNumber}`;
            if (pageNumber > 1) {
                pagination = `${pagination}&requestId=${this.paginationRequests[url]}`;
            }
        }

        return pagination ? url + (url.includes('?') ? '&' : '?') + pagination : url;
    }

    private _setPaginationFields(url: string, {pageNumber}: ApiPaginationOptions = {}, responseBody: any) {
        if (pageNumber === 1 && responseBody.requestId) {
            this.paginationRequests[url] = responseBody.requestId;
        } else if (!pageNumber) {
            delete this.paginationRequests[url];
        }
    }

    private genericRetryStrategy =
        ({
            maxRetryAttempts = 3,
            scalingDuration = 500,
            excludedStatusCodes = [
                HttpResponseStatusCodesEnum.BadRequest,
                HttpResponseStatusCodesEnum.Unauthorized,
                HttpResponseStatusCodesEnum.NotFound,
                HttpResponseStatusCodesEnum.InternalServerError
            ]
        }: ApiRetryStrategy = {}) =>
        (attempts: Observable<any>) => {
            return attempts.pipe(
                mergeMap((error, i) => {
                    const retryAttempt = i + 1;
                    // if maximum number of retries have been reach
                    // or response is a status code we don't wish to retry, throw error
                    if (retryAttempt > maxRetryAttempts || excludedStatusCodes.find(e => e === error.status)) {
                        return throwError(error);
                    }
                    // console.log(`Attempt ${retryAttempt}: retrying in ${retryAttempt * scalingDuration}ms`);
                    return timer(scalingDuration);
                    // if we want SCALING duration
                    // return timer(retryAttempt * scalingDuration);
                }),
                finalize(() => {})
            );
        };
}

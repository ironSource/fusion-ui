import {CacheType} from '@ironsource/fusion-ui/services/cache';
import {BaseParser} from './base-parser';

export interface ApiOptions {
    autoAuthHeader: boolean;
}

/**
 * When working with pagination those are the options:
 * 1. no pagination: none of IPagionationOptions keys
 * 2. with pagination - paging (page 1, page 2, ...):
 * 2.1. first request 'resultsBulkSize' & 'pageNumber' - response have 'requestId'
 * 2.2. second request and above: 'resultsBulkSize' & 'pageNumber' & 'requestId'
 * 3. with pagination - offset
 * 3.1. first request 'resultsBulkSize' & 'resultsOffset' - response have 'requestId'
 * 3.1. second request and above: 'resultsBulkSize' & 'resultsOffset' & 'requestId'
 */
export interface ApiPaginationOptions {
    resultsBulkSize?: number;
    pageNumber?: number;
    requestId?: string;
    resultsOffset?: number;
}

/**
 * Custom Http Service Options - Extends Angular RequestOptionsArgs
 */
export interface ApiRequestOptions {
    cache?: CacheType;
    refreshCache?: boolean;
    headers?: any;
    responseType?: ApiResponseType;
    parserObj?: BaseParser;
    parserAction?: string;
    loginAs?: boolean;
    retryStrategy?: ApiRetryStrategy;
    pagination?: ApiPaginationOptions;
    skipResponseErrorParsing?: boolean;
    noAuthHeader?: boolean;
}

export interface ApiRetryStrategy {
    maxRetryAttempts?: number;
    scalingDuration?: number;
    onDataRequired?: (args) => any;
    excludedStatusCodes?: number[];
}

export enum ApiResponseType {
    Json = 'json',
    Text = 'text',
    Blob = 'blob',
    ArrayBuffer = 'arraybuffer'
}

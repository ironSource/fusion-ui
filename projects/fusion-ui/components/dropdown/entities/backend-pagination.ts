import {Observable} from 'rxjs';

export interface ApiPaginationOptions {
    resultsBulkSize?: number;
    pageNumber?: number;
    requestId?: string;
    resultsOffset?: number;
}

export interface BackendPagination {
    backendGetFunction: (options: any) => Observable<any>;
    mappingFunction?: (value: any) => any;
    sortingFunction?: (a, b) => number;
    getOptions: ApiPaginationOptions;
    responseDataPropertyName: string;
    responseTotalCountPropertyName: string;
}

import {Observable} from 'rxjs';
import {ApiPaginationOptions} from '@ironsource/fusion-ui/services/api';

export interface BackendPagination {
    backendGetFunction: (options: any) => Observable<any>;
    mappingFunction?: (value: any) => any;
    sortingFunction?: (a, b) => number;
    getOptions: ApiPaginationOptions;
    responseDataPropertyName: string;
    responseTotalCountPropertyName: string;
    allowBlacklist?: boolean;
}

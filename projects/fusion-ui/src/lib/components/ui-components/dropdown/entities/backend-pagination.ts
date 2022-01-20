import {Observable} from 'rxjs';
import {ApiPaginationOptions} from '../../../../services/api/api-entities';

export interface BackendPagination {
    backendGetFunction: (options: any) => Observable<any>;
    mappingFunction?: (value: any) => any;
    sortingFunction?: (a, b) => number;
    getOptions: ApiPaginationOptions;
    responseDataPropertyName: string;
    responseTotalCountPropertyName: string;
}

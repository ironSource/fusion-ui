import {TemplateRef} from '@angular/core';
import {Observable} from 'rxjs';

export abstract class ApiBase {
    templateRef: TemplateRef<any>;

    abstract valueSelected(): Observable<any>;
}

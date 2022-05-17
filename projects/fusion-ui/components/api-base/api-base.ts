import {TemplateRef} from '@angular/core';
import {Observable} from 'rxjs';

export abstract class ApiBase {
    templateRef: TemplateRef<any>;

    abstract isActive(): Observable<boolean>;

    abstract valueSelected(): Observable<any>;
}

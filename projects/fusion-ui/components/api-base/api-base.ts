import {TemplateRef} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export abstract class ApiBase {
    templateRef: TemplateRef<any>;
    isComponentDisabled$ = new BehaviorSubject<boolean>(false);

    abstract valueSelected(): Observable<any>;
}

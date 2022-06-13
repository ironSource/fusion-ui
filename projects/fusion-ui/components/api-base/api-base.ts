import {TemplateRef, ViewChild} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export abstract class ApiBase {
    templateRef: TemplateRef<any>;
    contentTemplate: TemplateRef<any>;
    isComponentDisabled$ = new BehaviorSubject<boolean>(false);

    abstract valueSelected(): Observable<any>;
}

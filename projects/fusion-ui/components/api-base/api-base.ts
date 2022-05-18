import {TemplateRef} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export abstract class ApiBase {
    templateRef: TemplateRef<any>;
    selectedValue$ = new BehaviorSubject<any>(null);

    abstract valueSelected(): Observable<any>;
}

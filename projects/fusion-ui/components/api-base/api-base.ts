import {TemplateRef} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

export abstract class ApiBase {
    templateRef: TemplateRef<any>;
    contentTemplate: TemplateRef<any>;
    isComponentDisabled$ = new BehaviorSubject<boolean>(false);
    resetState$ = new Subject<void>();

    abstract valueSelected(): Observable<any>;

    abstract changeConfig(val: any): void;

    abstract open(): void;
}

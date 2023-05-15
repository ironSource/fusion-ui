import {TemplateRef} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

export abstract class ApiBase {
    /** @internal */
    templateRef: TemplateRef<any>;
    /** @internal */
    contentTemplate: TemplateRef<any>;
    /** @internal */
    isComponentDisabled$ = new BehaviorSubject<boolean>(false);
    /** @internal */
    resetState$ = new Subject<void>();
    /** @internal */
    selectedTypeObject = false; // for chip-filter selected value-string. for top-filter object
    /** @internal */
    attributionName: string;
    /** @internal */
    abstract valueSelected(): Observable<any>;
    /** @internal */
    abstract changeConfig(val: any): void;
    /** @internal */
    abstract open(): void;
}

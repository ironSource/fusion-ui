import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

const INIT_TYPE = 'init';

@Injectable({
    providedIn: 'root'
})
export class PubSubService {
    private readonly subject$ = new BehaviorSubject<{
        type: string;
        value: any;
    }>({type: INIT_TYPE, value: null});
    private readonly observable$ = this.subject$.asObservable();

    constructor() {}

    notify({type, value}): void {
        this.subject$.next({type, value});
    }

    register(eventType): Observable<any> {
        return this.observable$.pipe(
            filter(({type}) => type === eventType),
            map(event => event.value)
        );
    }
}

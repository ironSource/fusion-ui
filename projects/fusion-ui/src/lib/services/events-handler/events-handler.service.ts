import {Injectable, OnDestroy} from '@angular/core';
import {ConnectableObservable, Observable, Subject} from 'rxjs';
import {filter, finalize, map, mergeAll, pluck, publishReplay, repeatWhen, takeUntil} from 'rxjs/operators';

@Injectable()
export class EventsHandlerService implements OnDestroy {
    private readonly observables$ = new Subject<Observable<{eventName: string; value: any}>>();
    private readonly takeUntilAll$ = new Subject<void>();
    private readonly repeatWhen$ = new Subject<void>();

    private readonly stream$ = this.observables$.asObservable().pipe(
        mergeAll(),
        takeUntil(this.takeUntilAll$),
        repeatWhen(() => this.repeatWhen$),
        publishReplay(1)
    ) as ConnectableObservable<{eventName: string; value: any}>;

    private registeredEvents: {[key: string]: boolean} = {};

    constructor() {
        this.stream$.connect();
    }

    ngOnDestroy() {
        this.takeUntilAll$.next();
        this.takeUntilAll$.complete();
    }

    registerStream({eventName, stream$}: {eventName: string; stream$: Observable<any>}): void {
        if (this.registeredEvents[eventName]) {
            console.warn(`Stream ${eventName} already registerd`);
            return;
        }
        const wrapStream$ = this.wrapStream({stream$, eventName});
        this.observables$.next(wrapStream$);
        this.registeredEvents[eventName] = true;
    }

    getStream({eventName}: {eventName: string}): Observable<any> {
        return this.stream$.pipe(
            filter(({eventName: event}) => event === eventName),
            pluck('value')
        );
    }

    clearAllStreams(): void {
        this.takeUntilAll$.next();
        this.registeredEvents = {};
        this.repeatWhen$.next();
    }

    private wrapStream({eventName, stream$}: {eventName: string; stream$: Observable<any>}): Observable<any> {
        return stream$.pipe(
            map(value => ({value, eventName})),
            finalize(() => delete this.registeredEvents[eventName])
        );
    }
}

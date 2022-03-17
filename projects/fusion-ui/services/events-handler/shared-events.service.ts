import {Injectable, OnDestroy} from '@angular/core';
import {fromEvent, merge, Observable, Subject} from 'rxjs';
import {filter, shareReplay, take, takeUntil} from 'rxjs/operators';
import {isUndefined} from '@ironsource/fusion-ui/utils';

@Injectable({
    providedIn: 'root'
})
export class SharedEventsService implements OnDestroy {
    private onDestroy$ = new Subject<void>();

    private mouseOver$ = merge(fromEvent(document.body, 'mouseover'), fromEvent(document.body, 'click')).pipe(
        shareReplay(1),
        takeUntil(this.onDestroy$)
    );

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    getMouseoverObservable({element, padding}): Observable<MouseEvent> {
        return this.mouseOver$.pipe(
            filter((event: MouseEvent) => {
                // if no event coordinate like event.clientX - this testim.io
                return isUndefined(event.clientX) || this.isInRegion({event, element, padding});
            })
        );
    }

    private isInRegion({event, element, padding}: {event: MouseEvent; element: Element; padding: number}): boolean {
        const {left, right, top, bottom} = element.getBoundingClientRect();
        const isInRect =
            event.clientX >= left - padding &&
            event.clientX <= right + padding &&
            event.clientY >= top - padding &&
            event.clientY <= bottom + padding;

        return isInRect;
    }
}

import {Injectable, OnDestroy} from '@angular/core';
import {ITooltipData} from './tooltip.entities';
import {BehaviorSubject, fromEvent, Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {delay} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TooltipService implements OnDestroy {
    private delayData$ = new BehaviorSubject<ITooltipData>({});
    public tooltipData$ = this.delayData$.asObservable().pipe(delay(0));
    private onDestroy$ = new Subject<void>();
    static mouseOver$ = fromEvent<MouseEvent>(document.body, 'mouseover');

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    public getMouseHoverObservable(element: Element) {
        return TooltipService.mouseOver$.pipe(filter((event: MouseEvent) => TooltipService.isEventInElementRegion({event, element})));
    }

    public showTooltip(tooltipData: ITooltipData) {
        this.delayData$.next(tooltipData);
    }

    public closeTooltip() {
        this.delayData$.next({});
    }

    static isEventInElementRegion({event, element}: {event: MouseEvent; element: Element}): boolean {
        return element.contains(event.target as Element);
    }
}

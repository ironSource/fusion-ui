import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BehaviorSubject, fromEvent, Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {isFunction} from '../../utils';

@Directive({
    selector: '[fusionClickOutside]'
})
export class ClickOutsideDirective implements OnInit, OnDestroy {
    @Input() set clickOutsideActivate(value: boolean) {
        this.listenClickOutside$.next(value);
    }

    /**
     * In case click was on element inside the component but this element was
     * removed from DOM (tag removed on TagsList). In this case directive
     * checked if click was inside by click event coordinates
     * @param value
     */
    @Input() set clickOutsideByCoordinates(value: boolean) {
        this.byCoordinatesMode = value;
    }
    @Output() fusionClickOutside = new EventEmitter();

    private onDestroy$ = new Subject();
    private listenClickOutside$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private clickOutSideSubscription: Subscription;
    private byCoordinatesMode = false;

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
        this.listenClickOutside$.asObservable().pipe(takeUntil(this.onDestroy$)).subscribe(this.handleClickOutSideListener.bind(this));
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    private handleClickOutSideListener(value: boolean): void {
        if (value && !this.clickOutSideSubscription) {
            this.clickOutSideSubscription = fromEvent(document, 'click').subscribe((event: MouseEvent) => {
                const clickedInside =
                    this.byCoordinatesMode && event.clientY !== 0 && event.clientY !== 0
                        ? this.isClickInsideByCoordinates(event)
                        : this.elementRef.nativeElement.contains(this.getEventElement(event));
                if (!clickedInside) {
                    this.fusionClickOutside.emit(event.target);
                }
            });
        } else {
            if (this.clickOutSideSubscription && typeof this.clickOutSideSubscription.unsubscribe === 'function') {
                this.clickOutSideSubscription.unsubscribe();
                this.clickOutSideSubscription = null;
            }
        }
    }

    private isClickInsideByCoordinates(event: MouseEvent): boolean {
        const parentRect = this.elementRef.nativeElement.getBoundingClientRect();
        return (
            parentRect.left <= event.clientX &&
            parentRect.right >= event.clientX &&
            parentRect.top <= event.clientY &&
            parentRect.bottom >= event.clientY
        );
    }

    getEventElement(event: MouseEvent) {
        let element;
        if (isFunction(event.composedPath)) {
            // event.composedPath()[0] support opened shadow root
            const elements = event.composedPath();
            element = elements.length > 0 ? elements[0] : null;
        }

        return element || event.target;
    }
}

import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WindowService implements OnDestroy {
    private bodyClassChanged$ = new BehaviorSubject<DOMTokenList>(this.nativeWindow.document.body.classList);
    private observer: MutationObserver;

    public get nativeWindow(): Window {
        return window;
    }

    public get bodyClass$(): Observable<DOMTokenList> {
        return this.bodyClassChanged$.asObservable();
    }

    public observeBody(): void {
        this.observer = new MutationObserver((mutationsList: MutationRecord[]) => {
            if (mutationsList.find(mutationType => mutationType.attributeName === 'class')) {
                this.bodyClassChanged$.next(this.nativeWindow.document.body.classList);
            }
        });

        this.observer.observe(this.nativeWindow.document.body, {attributes: true});
    }

    ngOnDestroy(): void {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

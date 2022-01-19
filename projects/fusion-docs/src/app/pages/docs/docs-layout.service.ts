import {Injectable, EventEmitter} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {LayoutComponentConfiguration, LayoutHeaderContentTitle} from '@ironsource/fusion-uifusion-ui';
import {map, startWith} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DocsLayoutService {
    private _layoutConfig$ = new BehaviorSubject<LayoutComponentConfiguration>(null);
    // if use header update from child component (page content) need to do it as async
    private asyncHeaderTitleUpdate = new EventEmitter<LayoutHeaderContentTitle>(true);

    layoutConfig$ = this.getLayoutConfigObservable();

    /**
     * Set Layout configuration
     */
    setLayoutConfig(value: LayoutComponentConfiguration): void {
        this._layoutConfig$.next(value);
    }

    /**
     * Update Layout configuration
     */
    updateLayoutConfig(value: LayoutComponentConfiguration): void {
        this._layoutConfig$.next({
            ...(this._layoutConfig$.getValue() ?? {}),
            ...value
        });
    }

    /**
     * Update Header in layout
     */
    updateLayoutHeaderTitle(value: LayoutHeaderContentTitle): void {
        this.asyncHeaderTitleUpdate.emit(value);
    }

    /**
     * Combine layout configuration with header configuration changes (async) and return as observable
     */
    private getLayoutConfigObservable(): Observable<LayoutComponentConfiguration> {
        const layoutConfig$ = this._layoutConfig$.asObservable();
        const headerTitleConfiguration$ = this.asyncHeaderTitleUpdate.asObservable().pipe(startWith(null));
        return combineLatest(layoutConfig$, headerTitleConfiguration$).pipe(
            map(([layoutConfig, headerTitleConfiguration]) =>
                !layoutConfig
                    ? null
                    : {
                          ...layoutConfig,
                          headerConfiguration: {
                              ...layoutConfig?.headerConfiguration,
                              ...{title: headerTitleConfiguration ?? layoutConfig?.headerConfiguration?.title}
                          }
                      }
            )
        );
    }
}

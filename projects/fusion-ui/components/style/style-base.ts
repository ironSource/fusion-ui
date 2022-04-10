import {ElementRef, AfterViewInit, Injector, Renderer2, OnDestroy, InjectionToken, Directive} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {FUSION_V1_CLASS, VersionService, StyleVersion} from '@ironsource/fusion-ui/services/version';
import {Observable, Subject} from 'rxjs';
import {ThemeBase} from './theme-base';

/* eslint-disable @angular-eslint/directive-class-suffix */
@Directive()
export abstract class StyleBase extends ThemeBase implements AfterViewInit, OnDestroy {
    protected onDestroy$ = new Subject<void>();

    constructor(protected injector: Injector, protected themeToken?: InjectionToken<any>) {
        super(injector, themeToken);
    }

    styleVersion = StyleVersion;
    selectedVersion$: Observable<StyleVersion> = this.injector.get(VersionService).styleVersion$.pipe(takeUntil(this.onDestroy$));

    ngAfterViewInit() {
        this.handleStyleVersion();
        super.ngAfterViewInit();
    }

    handleStyleVersion() {
        const element = this.injector.get(ElementRef);
        const renderer = this.injector.get(Renderer2);
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V1) {
                renderer.addClass(element.nativeElement, FUSION_V1_CLASS);
            } else {
                renderer.removeClass(element.nativeElement, FUSION_V1_CLASS);
            }
        });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}

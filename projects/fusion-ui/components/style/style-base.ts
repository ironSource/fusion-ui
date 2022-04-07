import {ElementRef, AfterViewInit, Injector, Renderer2, OnDestroy, Directive} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {VersionService, StyleVersion, FUSION_STYLE_VERSION_PREFIX} from '@ironsource/fusion-ui/services/version';
import {Observable, Subject} from 'rxjs';

/* eslint-disable @angular-eslint/directive-class-suffix */
@Directive()
export abstract class StyleBase implements AfterViewInit, OnDestroy {
    protected onDestroy$ = new Subject<void>();

    constructor(protected injector: Injector) {}

    styleVersion = StyleVersion;
    selectedVersion$: Observable<StyleVersion> = this.injector.get(VersionService).styleVersion$.pipe(takeUntil(this.onDestroy$));

    uiStyleVersion: string;

    ngAfterViewInit() {
        this.handleUIStyleVersion();
    }

    private handleUIStyleVersion(): void {
        const element = this.injector.get(ElementRef);
        const renderer = this.injector.get(Renderer2);

        this.uiStyleVersion = (getComputedStyle(element.nativeElement).getPropertyValue('--fu-style-version') ?? '3').trim();

        renderer.addClass(element.nativeElement, FUSION_STYLE_VERSION_PREFIX + this.uiStyleVersion);
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}

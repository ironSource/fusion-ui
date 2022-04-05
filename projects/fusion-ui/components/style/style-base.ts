import {ElementRef, AfterViewInit, Injector, Renderer2, OnDestroy, Directive} from '@angular/core';
import {filter, takeUntil} from 'rxjs/operators';
import {VersionService, StyleVersion, FUSION_STYLE_VERSION_PREFIX} from '@ironsource/fusion-ui/services/version';
import {Observable, Subject} from 'rxjs';

/* eslint-disable @angular-eslint/directive-class-suffix */
@Directive()
export abstract class StyleBase implements AfterViewInit, OnDestroy {
    protected onDestroy$ = new Subject<void>();

    constructor(protected injector: Injector) {}

    lastStyleVersion = VersionService.getLastStyleGVersion();
    styleVersion = StyleVersion;
    selectedVersion$: Observable<StyleVersion> = this.injector.get(VersionService).styleVersion$.pipe(takeUntil(this.onDestroy$));

    ngAfterViewInit() {
        this.selectedVersion$
            .pipe(takeUntil(this.onDestroy$), filter(this.isStyleVersionNotManual.bind(this)))
            .subscribe(this.handleStyleVersion.bind(this));
    }

    private isStyleVersionNotManual(): boolean {
        const element = this.injector.get(ElementRef);
        return ![...element.nativeElement.classList].some(item => item.startsWith(FUSION_STYLE_VERSION_PREFIX));
    }

    private handleStyleVersion(styleVersion: StyleVersion): void {
        const element = this.injector.get(ElementRef);
        const renderer = this.injector.get(Renderer2);

        element.nativeElement.classList.forEach(item => {
            if (item.startsWith(FUSION_STYLE_VERSION_PREFIX)) {
                renderer.removeClass(element.nativeElement, item);
            }
        });
        console.log('>>', element.nativeElement, [...element.nativeElement.classList]);

        if (styleVersion !== this.lastStyleVersion) {
            renderer.addClass(element.nativeElement, FUSION_STYLE_VERSION_PREFIX + styleVersion.toString());
        }

        console.log('<<', element.nativeElement, [...element.nativeElement.classList]);
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}

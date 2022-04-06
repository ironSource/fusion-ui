import {ElementRef, AfterViewInit, Injector, Renderer2, OnDestroy, Directive} from '@angular/core';
import {filter, takeUntil} from 'rxjs/operators';
import {VersionService, StyleVersion, FUSION_STYLE_VERSION_PREFIX} from '@ironsource/fusion-ui/services/version';
import {Observable, Subject} from 'rxjs';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

/* eslint-disable @angular-eslint/directive-class-suffix */
@Directive()
export abstract class StyleBase implements AfterViewInit, OnDestroy {
    protected onDestroy$ = new Subject<void>();

    constructor(protected injector: Injector) {}

    lastStyleVersion = VersionService.getLastStyleGVersion();
    styleVersion = StyleVersion;
    selectedVersion$: Observable<StyleVersion> = this.injector.get(VersionService).styleVersion$.pipe(takeUntil(this.onDestroy$));

    private isManualStyle: boolean;

    ngAfterViewInit() {
        this.selectedVersion$
            .pipe(takeUntil(this.onDestroy$), filter(this.isStyleVersionNotManual.bind(this)))
            .subscribe(this.handleStyleVersion.bind(this));
    }

    private isStyleVersionNotManual(): boolean {
        const element = this.injector.get(ElementRef);
        if (isNullOrUndefined(this.isManualStyle)) {
            this.isManualStyle = [...element.nativeElement.classList].some(item => item.startsWith(FUSION_STYLE_VERSION_PREFIX));
        }
        return !this.isManualStyle;
    }

    private handleStyleVersion(styleVersion: StyleVersion): void {
        const element = this.injector.get(ElementRef);
        const renderer = this.injector.get(Renderer2);

        element.nativeElement.classList.forEach(item => {
            if (item.startsWith(FUSION_STYLE_VERSION_PREFIX)) {
                renderer.removeClass(element.nativeElement, item);
            }
        });

        if (styleVersion !== this.lastStyleVersion) {
            renderer.addClass(element.nativeElement, FUSION_STYLE_VERSION_PREFIX + styleVersion.toString());
        }
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}

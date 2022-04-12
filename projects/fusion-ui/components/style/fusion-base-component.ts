import {AfterViewInit, Directive, ElementRef, Injector, OnDestroy, Renderer2} from '@angular/core';
import {FUSION_STYLE_VERSION_CSS_VAR_NAME, FUSION_STYLE_VERSION_PREFIX, StyleVersion} from './style-version.enum';
import {BehaviorSubject, Subject} from 'rxjs';

/* eslint-disable @angular-eslint/directive-class-suffix */
@Directive()
export abstract class FusionBaseComponent implements AfterViewInit, OnDestroy {
    onDestroy$ = new Subject<void>();

    styleVersion = StyleVersion;
    selectedVersion$: BehaviorSubject<StyleVersion> = new BehaviorSubject<StyleVersion>(
        StyleVersion[Object.values(StyleVersion)[Object.values(StyleVersion).length / 2 - 1]] // take latest from enum
    );

    constructor(protected injector: Injector) {}

    ngAfterViewInit() {
        this.handleStyleVersion();
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    private handleStyleVersion(): void {
        const element = this.injector.get(ElementRef);
        const renderer = this.injector.get(Renderer2);

        if (![...element.nativeElement.classList].some(item => item.startsWith(FUSION_STYLE_VERSION_PREFIX))) {
            let uiSelectedStyleVersion = getComputedStyle(element.nativeElement).getPropertyValue(FUSION_STYLE_VERSION_CSS_VAR_NAME).trim();
            uiSelectedStyleVersion = uiSelectedStyleVersion ? uiSelectedStyleVersion : this.selectedVersion$.getValue().toString();

            if (StyleVersion[`V${uiSelectedStyleVersion}`] !== this.selectedVersion$.getValue()) {
                setTimeout(() => {
                    this.selectedVersion$.next(StyleVersion[`V${uiSelectedStyleVersion}`]);
                });
            }

            renderer.addClass(element.nativeElement, FUSION_STYLE_VERSION_PREFIX + uiSelectedStyleVersion);
        }
    }
}

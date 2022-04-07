import {ElementRef, AfterViewInit, Injector, Renderer2, Directive, OnDestroy} from '@angular/core';
import {
    FUSION_STYLE_VERSION_CSS_VAR_NAME,
    FUSION_STYLE_VERSION_PREFIX,
    StyleVersion
} from '@ironsource/fusion-ui/components/style/style-version.enum';
import {BehaviorSubject, Subject} from 'rxjs';

/* eslint-disable @angular-eslint/directive-class-suffix */
@Directive()
export abstract class StyleBase implements AfterViewInit, OnDestroy {
    onDestroy$ = new Subject<void>();
    styleVersion: StyleVersion = StyleVersion[Object.values(StyleVersion)[Object.values(StyleVersion).length / 2 - 1]];
    selectedVersion$: BehaviorSubject<StyleVersion> = new BehaviorSubject<StyleVersion>(this.styleVersion);

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
        const uiStyleVersion = (
            getComputedStyle(element.nativeElement).getPropertyValue(FUSION_STYLE_VERSION_CSS_VAR_NAME) ?? this.styleVersion.toString()
        ).trim();

        // todo-andyk: fix with version
        this.styleVersion = StyleVersion.V2;
        this.selectedVersion$.next(this.styleVersion);

        renderer.addClass(element.nativeElement, FUSION_STYLE_VERSION_PREFIX + uiStyleVersion);
    }
}

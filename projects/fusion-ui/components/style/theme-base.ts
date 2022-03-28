import {ElementRef, AfterViewInit, InjectionToken, Injector, Directive} from '@angular/core';

export interface Theme {
    [key: string]: string;
}

/* eslint-disable @angular-eslint/directive-class-suffix */
@Directive()
export abstract class ThemeBase implements AfterViewInit {
    constructor(protected injector: Injector, protected themeToken?: InjectionToken<any>) {}

    ngAfterViewInit() {
        const token: InjectionToken<any> = this.themeToken ? this.injector.get(this.themeToken, null) : null;
        if (token) {
            const element = this.injector.get(ElementRef);
            Object.keys(token).forEach(key => {
                element.nativeElement.style.setProperty(key, token[key]);
            });
        }
    }
}

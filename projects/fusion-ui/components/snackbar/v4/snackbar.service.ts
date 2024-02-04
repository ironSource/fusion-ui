import {ApplicationRef, ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector, Renderer2, ViewContainerRef} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {take} from 'rxjs/operators';
import {SnackbarEntity, SnackbarLocation} from './snackbar.entities';
import {SNACKBAR_HOLDER_CLASS_NAME, SNACKBAR_LOCATION_STYLE_MAP} from './snackbar.configuration';
import {SnackbarComponent} from './snackbar.component';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {
    constructor(
        private renderer: Renderer2,
        private appRef: ApplicationRef,
        private vcr: ViewContainerRef,
        @Inject(DOCUMENT) private document: Document
    ) {}

    show(configuration: SnackbarEntity) {
        const snackbarLocation: SnackbarLocation = configuration.location || 'top-right';
        const snackbarHostElement = this.ensureHostElement(snackbarLocation);
        const snackbarComponentRef = this.createToastComponentRef({...configuration, ...{location: snackbarLocation}});

        this.appendElementLocation(
            snackbarLocation,
            snackbarHostElement,
            (snackbarComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement
        );
        this.removeOnClose(snackbarComponentRef);
    }

    private ensureHostElement(location: SnackbarLocation): HTMLElement {
        const selector = `.${SNACKBAR_HOLDER_CLASS_NAME}.${location}`;
        let snackbarHolderElement: HTMLElement = this.document.body.querySelector(selector);
        let useLocation: SnackbarLocation = location;
        if (!snackbarHolderElement) {
            snackbarHolderElement = this.renderer.createElement('div');
            if (!SNACKBAR_LOCATION_STYLE_MAP.hasOwnProperty(location)) {
                useLocation = 'top-right';
            }
            this.setStyleToElement(
                snackbarHolderElement,
                {...SNACKBAR_LOCATION_STYLE_MAP.common, ...SNACKBAR_LOCATION_STYLE_MAP[useLocation]},
                useLocation
            );
            this.renderer.appendChild(this.document.body, snackbarHolderElement);
        }
        return snackbarHolderElement as HTMLElement;
    }

    private setStyleToElement(element: HTMLElement, snackbarHolderStyleMap: {[key: string]: any}, location: string) {
        Object.keys(snackbarHolderStyleMap).forEach(key => {
            this.renderer.setStyle(element, key, snackbarHolderStyleMap[key]);
        });
        this.renderer.addClass(element, SNACKBAR_HOLDER_CLASS_NAME);
        this.renderer.addClass(element, location);
    }

    private createToastComponentRef(snackbarConfiguration: SnackbarEntity): ComponentRef<SnackbarComponent> {
        const snackbarComponentRef = this.vcr.createComponent(SnackbarComponent);
        Object.keys(snackbarConfiguration).forEach(key => {
            snackbarComponentRef.instance[key] = snackbarConfiguration[key];
        });
        return snackbarComponentRef;
    }

    private removeOnClose(componentRef: ComponentRef<SnackbarComponent>) {
        componentRef.instance.closed.pipe(take(1)).subscribe(() => {
            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
    }

    private appendElementLocation(location: string, snackbarHostElement: HTMLElement, snackbarElement: HTMLElement) {
        if (location.startsWith('top-')) {
            snackbarHostElement.prepend(snackbarElement);
        } else {
            snackbarHostElement.appendChild(snackbarElement);
        }
    }
}

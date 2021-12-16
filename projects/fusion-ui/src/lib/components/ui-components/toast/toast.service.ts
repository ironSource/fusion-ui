import {
    ApplicationRef,
    ComponentFactoryResolver,
    ComponentRef,
    EmbeddedViewRef,
    Inject,
    Injectable,
    Injector,
    Renderer2,
    RendererFactory2
} from '@angular/core';
import {ToastComponent} from './toast.component';
import {ToastEntity, ToastLocation} from './toast.entity';
import {TOAST_HOLDER_CLASS_NAME, TOAST_LOCATION_STYLE_MAP} from './toast.configuration';
import {LogService} from '../../../services/log/log.service';
import {take} from 'rxjs/operators';
import {DOCUMENT} from '@angular/common';

// @dynamic
@Injectable({
    providedIn: 'root'
})
export class ToastService {
    private renderer: Renderer2;

    constructor(
        private logService: LogService,
        private appRef: ApplicationRef,
        private cfr: ComponentFactoryResolver,
        private rendererFactory: RendererFactory2,
        private injector: Injector,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    show(configuration: ToastEntity) {
        // prepare toasts holder element (with location)
        const toastLocation: ToastLocation = configuration.location || 'top-right';
        const toastHostElement = this.ensureHostElement(toastLocation);

        // Create a component reference from the component
        const toastComponentRef = this.createToastComponentRef({...configuration, ...{location: toastLocation}});

        // Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(toastComponentRef.hostView);

        // append toast element to host;
        this.appendElementLocation(
            toastLocation,
            toastHostElement,
            (toastComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement
        );

        // remove it from the component tree and from the DOM on close
        this.removeOnClose(toastComponentRef);
    }

    private createToastComponentRef(toastConfiguration: ToastEntity): ComponentRef<ToastComponent> {
        const toastComponentRef = this.cfr.resolveComponentFactory(ToastComponent).create(this.injector);
        // set component's input props
        toastComponentRef.instance.shownByService = true;
        toastComponentRef.instance.configuration = toastConfiguration;

        return toastComponentRef;
    }

    private removeOnClose(componentRef: ComponentRef<ToastComponent>) {
        componentRef.instance.toastClosed.pipe(take(1)).subscribe(() => {
            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
    }

    private appendElementLocation(location: string, toastHostElement: HTMLElement, toastElement: HTMLElement) {
        if (location.startsWith('top-')) {
            toastHostElement.prepend(toastElement);
        } else {
            toastHostElement.appendChild(toastElement);
        }
    }

    private ensureHostElement(location: ToastLocation): HTMLElement {
        let toastsHolderElement: HTMLElement = this.document.body.querySelector(`.${TOAST_HOLDER_CLASS_NAME}`);
        let useLocation: ToastLocation = location;
        if (!toastsHolderElement) {
            toastsHolderElement = this.renderer.createElement('div');
            if (!TOAST_LOCATION_STYLE_MAP.hasOwnProperty(location)) {
                this.logService.error(
                    new Error(`Toast holder style configuration for location ${useLocation} not found. Will use default.`)
                );
                useLocation = 'top-right';
            }
            this.setStyleToElement(
                toastsHolderElement,
                {...TOAST_LOCATION_STYLE_MAP.common, ...TOAST_LOCATION_STYLE_MAP[useLocation]},
                useLocation
            );
            this.renderer.appendChild(this.document.body, toastsHolderElement);
        }
        return toastsHolderElement as HTMLElement;
    }

    private setStyleToElement(element: HTMLElement, toastHolderStyleMap: {[key: string]: any}, location: string) {
        Object.keys(toastHolderStyleMap).forEach(key => {
            this.renderer.setStyle(element, key, toastHolderStyleMap[key]);
        });
        this.renderer.addClass(element, TOAST_HOLDER_CLASS_NAME);
        this.renderer.addClass(element, location);
    }
}

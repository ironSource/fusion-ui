import 'zone.js';
import {Injector, DoBootstrap, InjectionToken} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {WRAPPER_TOKEN, WrapperComponent} from '../wrapper';
import {TableTransformer} from '../utils/table-transformer';

const NATIVE_TOKEN = new InjectionToken<boolean>('native token');

const transformerMapping = {
    'native-fusion-table': new TableTransformer()
};

export abstract class BaseModule implements DoBootstrap {
    constructor(protected injector: Injector, protected selector: string, protected component: any) {}

    ngDoBootstrap() {
        const currentComponent = {
            name: `native-${this.selector}`,
            componentInstance: this.component,
            type: null,
            avoidJsonParse: false
        };

        const injector = Injector.create({
            providers: [
                {
                    provide: WRAPPER_TOKEN,
                    useValue: {
                        component: currentComponent.componentInstance,
                        type: currentComponent.type,
                        transformer: transformerMapping[currentComponent.name],
                        avoidJsonParse: currentComponent.avoidJsonParse
                    }
                },
                {
                    provide: NATIVE_TOKEN,
                    useValue: true
                }
            ],
            parent: this.injector
        });

        const elem = createCustomElement(WrapperComponent, {injector});
        customElements.get(currentComponent.name) || customElements.define(currentComponent.name, elem);
    }
}

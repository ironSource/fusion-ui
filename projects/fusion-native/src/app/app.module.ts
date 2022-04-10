import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injector, DoBootstrap, Type} from '@angular/core';
import {AppComponent} from './app.component';
import {createCustomElement} from '@angular/elements';
import {components, services, enums} from './app-config';
import {WRAPPER_TOKEN} from './lib/components/wrapper/wrapper-entities';
import {WrapperModule} from './lib/components/wrapper/wrapper.module';
import {WrapperComponent} from './lib/components/wrapper/wrapper.component';
import {WindowService} from '@ironsource/fusion-ui/services/window';
import {NATIVE_TOKEN} from '@ironsource/fusion-ui/decorators';
import {EnumHelpers} from './lib/utils/enumHelper';
import {TableTransformer} from './lib/utils/table-transformer';

interface FusionWindow extends Window {
    fusion?: {
        services: any;
        enums: any;
    };
}

export const transformerMapping = {
    'native-fusion-table': new TableTransformer()
};

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, WrapperModule],
    providers: [
        {
            provide: NATIVE_TOKEN,
            useValue: true
        }
    ]
})
export class AppModule implements DoBootstrap {
    window: FusionWindow = Object.assign(this.windowService.nativeWindow, {
        fusion: {services: {}, enums: {}}
    });

    constructor(private injector: Injector, private windowService: WindowService) {}

    ngDoBootstrap() {
        this.windowService.observeBody();

        Object.entries(services).forEach(([serviceName, serviceInstance]: [string, Type<any>]) => {
            const service = this.injector.get(serviceInstance);
            this.window.fusion.services[serviceName] = service;
        });

        Object.keys(enums).forEach(key => {
            this.window.fusion.enums[key] = EnumHelpers.toFreezedObject(enums[key]);
        });

        components.forEach(currentComponent => {
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
                    }
                ],
                parent: this.injector
            });
            const elem = createCustomElement(WrapperComponent, {injector});
            customElements.define(currentComponent.name, elem);
        });
    }
}

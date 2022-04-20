import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ButtonNativeModule} from './button.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(ButtonNativeModule)
    .catch(err => console.error(err));

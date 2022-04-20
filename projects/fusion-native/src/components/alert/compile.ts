import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AlertNativeModule} from './alert.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(AlertNativeModule)
    .catch(err => console.error(err));

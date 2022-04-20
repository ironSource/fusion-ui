import {AlertModule, AlertComponent} from '@ironsource/fusion-ui/components/alert';
import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BaseModule} from '../../common/native/native.module';
import {WrapperModule} from '../../common/wrapper';

@NgModule({
    imports: [BrowserModule, WrapperModule, AlertModule]
})
export class AlertNativeModule extends BaseModule {
    constructor(injector: Injector) {
        super(injector, 'alert', AlertComponent);
    }
}

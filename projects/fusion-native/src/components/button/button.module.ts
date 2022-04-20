import {ButtonModule, ButtonComponent} from '@ironsource/fusion-ui/components/button';
import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BaseModule} from '../../common/native/native.module';
import {WrapperModule} from '../../common/wrapper';

@NgModule({
    imports: [BrowserModule, WrapperModule, ButtonModule]
})
export class ButtonNativeModule extends BaseModule {
    constructor(injector: Injector) {
        super(injector, 'button', ButtonComponent);
    }
}

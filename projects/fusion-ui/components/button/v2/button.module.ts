import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {SVG_OPTIONS_TOKEN} from '@ironsource/fusion-ui/components/svg';
import {ButtonOptions} from '@ironsource/fusion-ui/components/button/common/base/button-entities';
import {BUTTON_OPTIONS_DEFAULT_VALUE} from '@ironsource/fusion-ui/components/button/common/base/button-config';
import {ButtonLoadingModule} from '@ironsource/fusion-ui/components/button/v2/components/button-loading.module';

@NgModule({
    declarations: [ButtonComponent],
    exports: [ButtonComponent],
    imports: [CommonModule, IconModule, ButtonLoadingModule]
})
export class ButtonModule {
    static forRoot(options?: ButtonOptions): ModuleWithProviders<ButtonModule> {
        return {
            ngModule: ButtonModule,
            providers: [
                {
                    provide: SVG_OPTIONS_TOKEN,
                    useValue: options ? options.svgOptions : BUTTON_OPTIONS_DEFAULT_VALUE.svgOptions
                }
            ]
        };
    }
}

import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button.component';
import {IconModule} from '../icon/icon.module';
import {SVG_OPTIONS_TOKEN} from '../svg/svg-config';
import {ButtonOptions} from './button-entities';
import {BUTTON_OPTIONS_DEFAULT_VALUE} from './button-config';

@NgModule({
    declarations: [ButtonComponent],
    exports: [ButtonComponent],
    imports: [CommonModule, IconModule]
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

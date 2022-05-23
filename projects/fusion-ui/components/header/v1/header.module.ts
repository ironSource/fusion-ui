import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {RouterModule} from '@angular/router';
import {TruncateModule} from '@ironsource/fusion-ui/pipes/string';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {SVG_OPTIONS_TOKEN} from '@ironsource/fusion-ui/components/svg';
import {MENU_OPTIONS_DEFUALT_VALUE, MenuModuleOptions} from '@ironsource/fusion-ui/components/header/common/base';

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [CommonModule, IconModule, DynamicComponentsModule, RouterModule, TruncateModule, ClickOutsideModule]
})
export class HeaderModule {
    static forRoot(options?: MenuModuleOptions): ModuleWithProviders<HeaderModule> {
        return {
            ngModule: HeaderModule,
            providers: [
                {
                    provide: SVG_OPTIONS_TOKEN,
                    useValue: options ? options.svgOptions : MENU_OPTIONS_DEFUALT_VALUE
                }
            ]
        };
    }
}

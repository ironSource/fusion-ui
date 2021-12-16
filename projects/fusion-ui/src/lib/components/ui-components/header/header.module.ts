import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {IconModule} from '../icon/icon.module';
import {DynamicComponentsModule} from '../dynamic-components/dynamic-components.module';
import {RouterModule} from '@angular/router';
import {TruncateModule} from '../../../pipes/string/truncate/truncate.module';
import {ClickOutsideModule} from '../../../directives/click-outside/click-outside.module';
import {SVG_OPTIONS_TOKEN} from '../svg/svg-config';
import {MENU_OPTIONS_DEFUALT_VALUE} from './menu-config';
import {MenuModuleOptions} from './menu-entities';

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [CommonModule, IconModule, DynamicComponentsModule, RouterModule, TruncateModule, ClickOutsideModule],
    entryComponents: [HeaderComponent]
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

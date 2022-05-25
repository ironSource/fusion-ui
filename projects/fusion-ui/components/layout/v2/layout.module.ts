import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {LayoutModuleOptions} from './layout.entity';
import {SVG_OPTIONS_TOKEN} from '@ironsource/fusion-ui/components/svg';
import {LAYOUT_OPTIONS_DEFAULT_VALUE} from './layout-config';
import {LayoutHeaderModule} from './components/layout-header/layout-header.module';
import {SidebarModule} from '@ironsource/fusion-ui/components/sidebar/v2';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';

@NgModule({
    declarations: [LayoutComponent],
    imports: [CommonModule, LayoutHeaderModule, SidebarModule, IconModule, DynamicComponentsModule],
    exports: [LayoutComponent]
})
export class LayoutModule {
    static forRoot(options?: LayoutModuleOptions): ModuleWithProviders<LayoutModule> {
        return {
            ngModule: LayoutModule,
            providers: [
                {
                    provide: SVG_OPTIONS_TOKEN,
                    useValue: options ? options.svgOptions : LAYOUT_OPTIONS_DEFAULT_VALUE
                }
            ]
        };
    }
}

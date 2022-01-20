import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {LayoutModuleOptions} from './layout.entity';
import {SVG_OPTIONS_TOKEN} from '../svg/svg-config';
import {LAYOUT_OPTIONS_DEFAULT_VALUE} from './layout-config';
import {LayoutHeaderModule} from './layout-header/layout-header.module';
import {SidebarModule} from '../sidebar/sidebar.module';
import {IconModule} from '../icon/icon.module';
import {DynamicComponentsModule} from '../dynamic-components/dynamic-components.module';

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

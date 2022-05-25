import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {HeaderModule} from '@ironsource/fusion-ui/components/header';
import {MenuModule} from '@ironsource/fusion-ui/components/menu';
import {SVG_OPTIONS_TOKEN} from '@ironsource/fusion-ui/components/svg';
import {LayoutModuleOptions} from './layout-entities';
import {LAYOUT_OPTIONS_DEFAULT_VALUE} from './layout-config';

@NgModule({
    declarations: [LayoutComponent],
    exports: [LayoutComponent],
    imports: [CommonModule, HeaderModule, MenuModule]
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

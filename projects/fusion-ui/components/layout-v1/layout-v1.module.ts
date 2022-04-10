import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutV1Component} from './layout-v1.component';
import {HeaderModule} from '@ironsource/fusion-ui/components/header';
import {MenuModule} from '@ironsource/fusion-ui/components/menu';
import {SVG_OPTIONS_TOKEN} from '@ironsource/fusion-ui/components/svg';
import {LayoutModuleOptions} from './layout-v1-entities';
import {LAYOUT_OPTIONS_DEFAULT_VALUE} from './layout-v1-config';

@NgModule({
    declarations: [LayoutV1Component],
    exports: [LayoutV1Component],
    imports: [CommonModule, HeaderModule, MenuModule]
})
export class LayoutV1Module {
    static forRoot(options?: LayoutModuleOptions): ModuleWithProviders<LayoutV1Module> {
        return {
            ngModule: LayoutV1Module,
            providers: [
                {
                    provide: SVG_OPTIONS_TOKEN,
                    useValue: options ? options.svgOptions : LAYOUT_OPTIONS_DEFAULT_VALUE
                }
            ]
        };
    }
}

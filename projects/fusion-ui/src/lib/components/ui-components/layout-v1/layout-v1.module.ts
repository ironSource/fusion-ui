import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutV1Component} from './layout-v1.component';
import {HeaderModule} from '../header/header.module';
import {MenuModule} from '../menu/menu.module';
import {SVG_OPTIONS_TOKEN} from '../svg/svg-config';
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

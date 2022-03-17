import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvgComponent} from './svg.component';
import {SvgOptions} from './svg-entities';
import {SVG_OPTIONS_DEFAULT_VALUES, SVG_OPTIONS_TOKEN} from './svg-config';
import {HttpClientModule} from '@angular/common/http';
import {ApiModule} from '@ironsource/fusion-ui/services';

@NgModule({
    declarations: [SvgComponent],
    exports: [SvgComponent],
    imports: [CommonModule, HttpClientModule, ApiModule]
})
export class SvgModule {
    static forRoot(options?: SvgOptions): ModuleWithProviders<SvgModule> {
        return {
            ngModule: SvgModule,
            providers: [
                {
                    provide: SVG_OPTIONS_TOKEN,
                    useValue: options ? options : SVG_OPTIONS_DEFAULT_VALUES,
                    ...options
                }
            ]
        };
    }
}

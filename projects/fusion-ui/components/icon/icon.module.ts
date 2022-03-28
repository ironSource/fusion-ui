import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent} from './icon.component';
import {IconOptions} from './icon-entities';
import {ICON_OPTIONS_DEFUALT_VALUE} from './icon-config';
import {SvgModule, SVG_OPTIONS_TOKEN} from '@ironsource/fusion-ui/components/svg';

@NgModule({
    declarations: [IconComponent],
    exports: [IconComponent],
    imports: [CommonModule, SvgModule]
})
export class IconModule {
    static forRoot(options?: IconOptions): ModuleWithProviders<IconModule> {
        return {
            ngModule: IconModule,
            providers: [
                {
                    provide: SVG_OPTIONS_TOKEN,
                    useValue: options ? options.svgOptions : ICON_OPTIONS_DEFUALT_VALUE
                }
            ]
        };
    }
}

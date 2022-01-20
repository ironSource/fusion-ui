import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvgModule} from './svg/svg.module';
import {IconModule} from './icon/icon.module';
import {ButtonModule} from './button/button.module';
import {DynamicComponentsModule} from './dynamic-components/dynamic-components.module';
import {AccordionModule} from './accordion/accordion.module';
import {PopupModule} from './popup/popup.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, SvgModule, IconModule, ButtonModule, DynamicComponentsModule, AccordionModule, PopupModule]
})
export class UiComponentsModule {}

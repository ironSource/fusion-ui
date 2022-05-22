import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionComponent} from './accordion.component';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {AccordionHeaderModule} from '@ironsource/fusion-ui/components/accordion/common/base';
import {AccordionContentModule} from '@ironsource/fusion-ui/components/accordion/common/base';

@NgModule({
    declarations: [AccordionComponent],
    exports: [AccordionComponent],
    imports: [CommonModule, AccordionHeaderModule, AccordionContentModule, DynamicComponentsModule]
})
export class AccordionModule {}

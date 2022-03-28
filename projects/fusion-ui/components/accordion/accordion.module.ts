import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionComponent} from './accordion.component';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {AccordionHeaderModule} from './accordion-header/accordion-header.module';
import {AccordionContentModule} from './accordion-content/accordion-content.module';

@NgModule({
    declarations: [AccordionComponent],
    exports: [AccordionComponent],
    imports: [CommonModule, AccordionHeaderModule, AccordionContentModule, DynamicComponentsModule]
})
export class AccordionModule {}

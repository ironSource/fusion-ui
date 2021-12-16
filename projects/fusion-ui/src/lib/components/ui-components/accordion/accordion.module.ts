import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionComponent} from './accordion.component';
import {DynamicComponentsModule} from '../dynamic-components/dynamic-components.module';
import {AccordionHeaderModule} from './accordion-header/accordion-header.module';
import {AccordionContentModule} from './accordion-content/accordion-content.module';

@NgModule({
    declarations: [AccordionComponent],
    exports: [AccordionComponent],
    imports: [CommonModule, AccordionHeaderModule, AccordionContentModule, DynamicComponentsModule],
    entryComponents: [AccordionComponent]
})
export class AccordionModule {}

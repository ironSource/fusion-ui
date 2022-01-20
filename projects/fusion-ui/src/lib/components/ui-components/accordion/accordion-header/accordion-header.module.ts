import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '../../icon/icon.module';
import {AccordionHeaderComponent} from './accordion-header.component';

@NgModule({
    declarations: [AccordionHeaderComponent],
    imports: [CommonModule, IconModule]
})
export class AccordionHeaderModule {}

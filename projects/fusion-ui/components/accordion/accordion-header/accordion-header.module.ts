import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {AccordionHeaderComponent} from './accordion-header.component';

@NgModule({
    declarations: [AccordionHeaderComponent],
    imports: [CommonModule, IconModule]
})
export class AccordionHeaderModule {}

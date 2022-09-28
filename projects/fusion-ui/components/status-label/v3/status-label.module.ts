import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusLabelComponent} from './status-label.component';

@NgModule({
    declarations: [StatusLabelComponent],
    imports: [CommonModule],
    exports: [StatusLabelComponent]
})
export class StatusLabelModule {}

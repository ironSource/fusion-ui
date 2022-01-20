import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusLabelComponent} from './status-label.component';
import {IconModule} from '../icon/icon.module';

@NgModule({
    declarations: [StatusLabelComponent],
    imports: [CommonModule, IconModule],
    exports: [StatusLabelComponent]
})
export class StatusLabelModule {}

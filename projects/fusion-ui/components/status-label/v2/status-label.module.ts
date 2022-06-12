import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusLabelComponent} from './status-label.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@NgModule({
    declarations: [StatusLabelComponent],
    imports: [CommonModule, IconModule],
    exports: [StatusLabelComponent]
})
export class StatusLabelModule {}

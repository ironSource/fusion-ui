import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbTestOptionComponent} from './ab-test-option.component';
import {IconStatusModule} from '@ironsource/fusion-ui/components/icon-status';

@NgModule({
    declarations: [AbTestOptionComponent],
    imports: [CommonModule, IconStatusModule],
    exports: [AbTestOptionComponent]
})
export class AbTestOptionModule {}

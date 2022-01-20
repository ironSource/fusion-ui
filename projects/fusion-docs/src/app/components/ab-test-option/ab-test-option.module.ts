import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbTestOptionComponent} from './ab-test-option.component';
import {IconStatusModule} from '../../../../../fusion-ui/src/lib/components/ui-components/icon-status/icon-status.module';

@NgModule({
    declarations: [AbTestOptionComponent],
    imports: [CommonModule, IconStatusModule],
    exports: [AbTestOptionComponent]
})
export class AbTestOptionModule {}

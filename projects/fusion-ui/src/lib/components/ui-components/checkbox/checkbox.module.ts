import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxComponent} from './checkbox.component';
import {IconModule} from '../icon/icon.module';
import {FlagModule} from '../flag/flag.module';
import {TooltipModule} from '../tooltip/tooltip.module';

@NgModule({
    declarations: [CheckboxComponent],
    exports: [CheckboxComponent],
    imports: [CommonModule, IconModule, FlagModule, TooltipModule],
    entryComponents: [CheckboxComponent]
})
export class CheckboxModule {}

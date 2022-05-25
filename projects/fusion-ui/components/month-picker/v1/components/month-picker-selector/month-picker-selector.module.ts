import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonthPickerSelectorComponent} from './month-picker-selector.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';

@NgModule({
    declarations: [MonthPickerSelectorComponent],
    imports: [CommonModule, IconModule],
    exports: [MonthPickerSelectorComponent]
})
export class MonthPickerSelectorModule {}

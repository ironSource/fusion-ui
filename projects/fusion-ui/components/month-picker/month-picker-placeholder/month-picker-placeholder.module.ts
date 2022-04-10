import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {MonthPickerPlaceholderComponent} from './month-picker-placeholder.component';

@NgModule({
    declarations: [MonthPickerPlaceholderComponent],
    imports: [CommonModule, IconModule],
    exports: [MonthPickerPlaceholderComponent]
})
export class MonthPickerPlaceholderModule {}

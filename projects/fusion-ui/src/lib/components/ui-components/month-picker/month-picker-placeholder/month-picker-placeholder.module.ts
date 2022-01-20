import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '../../icon/icon.module';
import {MonthPickerPlaceholderComponent} from './month-picker-placeholder.component';

@NgModule({
    declarations: [MonthPickerPlaceholderComponent],
    imports: [CommonModule, IconModule],
    exports: [MonthPickerPlaceholderComponent]
})
export class MonthPickerPlaceholderModule {}

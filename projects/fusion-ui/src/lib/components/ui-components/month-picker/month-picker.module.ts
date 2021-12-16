import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonthPickerComponent} from './month-picker.component';
import {ClickOutsideModule} from '../../../directives/click-outside/click-outside.module';
import {MonthPickerPlaceholderModule} from './month-picker-placeholder/month-picker-placeholder.module';
import {MonthPickerSelectorModule} from './month-picker-selector/month-picker-selector.module';

@NgModule({
    declarations: [MonthPickerComponent],
    imports: [CommonModule, ClickOutsideModule, MonthPickerPlaceholderModule, MonthPickerSelectorModule],
    exports: [MonthPickerComponent]
})
export class MonthPickerModule {}

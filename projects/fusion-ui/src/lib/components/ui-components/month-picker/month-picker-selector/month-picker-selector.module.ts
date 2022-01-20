import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonthPickerSelectorComponent} from './month-picker-selector.component';
import {IconModule} from '../../icon/icon.module';

@NgModule({
    declarations: [MonthPickerSelectorComponent],
    imports: [CommonModule, IconModule],
    exports: [MonthPickerSelectorComponent]
})
export class MonthPickerSelectorModule {}

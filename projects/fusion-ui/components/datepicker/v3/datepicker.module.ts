import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DaterangeModule} from '@ironsource/fusion-ui/components/daterange/v3';
import {DatepickerComponent} from './datepicker.component';

@NgModule({
    declarations: [DatepickerComponent],
    imports: [CommonModule, ReactiveFormsModule, DaterangeModule],
    exports: [DatepickerComponent]
})
export class DatepickerModule {}

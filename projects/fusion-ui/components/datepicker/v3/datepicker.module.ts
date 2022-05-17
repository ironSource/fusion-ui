import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatepickerComponent} from './datepicker.component';
import {DaterangeModule} from '../../daterange/daterange/v3';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [DatepickerComponent],
    imports: [CommonModule, ReactiveFormsModule, DaterangeModule],
    exports: [DatepickerComponent]
})
export class DatepickerModule {}

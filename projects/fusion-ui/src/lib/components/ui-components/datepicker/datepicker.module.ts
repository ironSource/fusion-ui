import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {DatepickerComponent} from './datepicker.component';
import {DatepickerHeaderComponent} from './datepicker-header/datepicker-header.component';
import {DatepickerSelectionComponent} from './datepicker-selection/datepicker-selection.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '../icon/icon.module';
import {InputModule} from '../input/input.module';
import {DropdownModule} from '../dropdown/dropdown/dropdown.module';
import {ClickOutsideModule} from '../../../directives/click-outside/click-outside.module';

@NgModule({
    declarations: [DatepickerComponent, DatepickerHeaderComponent, DatepickerSelectionComponent],
    exports: [DatepickerComponent],
    imports: [CommonModule, ReactiveFormsModule, IconModule, InputModule, DropdownModule, ClickOutsideModule],
    providers: [DatePipe],
    entryComponents: [DatepickerComponent]
})
export class DatepickerModule {}

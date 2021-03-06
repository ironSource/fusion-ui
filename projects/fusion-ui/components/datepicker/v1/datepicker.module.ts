import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input/v1';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {DatepickerComponent} from './datepicker.component';
import {DatepickerHeaderComponent} from './datepicker-header/datepicker-header.component';
import {DatepickerSelectionComponent} from './datepicker-selection/datepicker-selection.component';

@NgModule({
    declarations: [DatepickerComponent, DatepickerHeaderComponent, DatepickerSelectionComponent],
    exports: [DatepickerComponent],
    imports: [CommonModule, ReactiveFormsModule, IconModule, InputModule, DropdownModule, ClickOutsideModule],
    providers: [DatePipe]
})
export class DatepickerModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ClickOutsideModule} from '../../../../directives/click-outside';
import {IconModule} from '../../../icon';
import {DropdownSelectModule} from '../../../dropdown/';
import {ButtonModule} from '../../../button/v3';
import {CalendarModule} from '../../calendar/v3/calendar.module';
import {DaterangeService} from '../common/daterange.service';
import {DaterangeComponent} from './daterange.component';

@NgModule({
    declarations: [DaterangeComponent],
    imports: [CommonModule, IconModule, ReactiveFormsModule, ClickOutsideModule, CalendarModule, ButtonModule, DropdownSelectModule],
    providers: [DaterangeService],
    exports: [DaterangeComponent]
})
export class DaterangeModule {}

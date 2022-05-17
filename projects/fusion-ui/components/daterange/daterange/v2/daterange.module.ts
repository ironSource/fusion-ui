import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ClickOutsideModule} from '../../../../directives/click-outside';
import {IconModule} from '../../../icon';
import {ButtonModule} from '../../../button/v2';
import {DropdownSelectModule} from '../../../dropdown/';
import {CalendarModule} from '../../calendar/v2/calendar.module';
import {DaterangeService} from '../common/daterange.service';
import {DaterangeComponent} from './daterange.component';

@NgModule({
    declarations: [DaterangeComponent],
    imports: [CommonModule, IconModule, ReactiveFormsModule, ClickOutsideModule, CalendarModule, ButtonModule, DropdownSelectModule],
    providers: [DaterangeService],
    exports: [DaterangeComponent]
})
export class DaterangeModule {}

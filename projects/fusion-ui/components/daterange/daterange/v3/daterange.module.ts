import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {DropdownSelectModule} from '@ironsource/fusion-ui/components/dropdown/';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v3';
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

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DaterangeComponent} from './daterange.component';
import {IconModule} from '../../../icon';
import {ModalModule} from '../../../modal/v1';
import {ButtonModule} from '../../../button/v1';
import {DropdownSelectModule} from '../../../dropdown/';
import {ClickOutsideModule} from '../../../../directives/click-outside';
import {CalendarModule} from '../../calendar/v1/calendar.module';
import {DaterangeService} from '../common/daterange.service';

@NgModule({
    declarations: [DaterangeComponent],
    imports: [
        CommonModule,
        IconModule,
        ModalModule,
        ReactiveFormsModule,
        ClickOutsideModule,
        CalendarModule,
        ButtonModule,
        DropdownSelectModule
    ],
    providers: [DaterangeService],
    exports: [DaterangeComponent]
})
export class DaterangeModule {}

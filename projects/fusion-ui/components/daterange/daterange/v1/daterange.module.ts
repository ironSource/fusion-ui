import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DaterangeComponent} from './daterange.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {ModalModule} from '@ironsource/fusion-ui/components/modal/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v1';
import {DropdownSelectModule} from '@ironsource/fusion-ui/components/dropdown/';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
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

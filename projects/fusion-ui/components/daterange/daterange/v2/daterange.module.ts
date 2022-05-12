import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {ModalModule} from '@ironsource/fusion-ui/components/modal/v2';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {DropdownSelectModule} from '@ironsource/fusion-ui/components/dropdown/';
import {CalendarModule} from '../../calendar/v2/calendar.module';
import {DaterangeService} from '../common/daterange.service';
import {DaterangeComponent} from './daterange.component';

@NgModule({
    declarations: [DaterangeComponent],
    imports: [
        CommonModule,
        InputModule,
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

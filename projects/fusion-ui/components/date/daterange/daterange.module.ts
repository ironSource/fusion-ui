import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DaterangeComponent} from './daterange.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {ModalModule} from '@ironsource/fusion-ui/components/modal';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {CalendarModule} from '../calendar/calendar.module';
import {DaterangeService} from './daterange.service';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {DropdownSelectModule} from '@ironsource/fusion-ui/components/dropdown';

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

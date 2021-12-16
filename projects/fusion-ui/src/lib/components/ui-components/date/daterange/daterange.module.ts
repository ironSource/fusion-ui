import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DaterangeComponent} from './daterange.component';
import {IconModule} from '../../icon/icon.module';
import {ModalModule} from '../../modal/modal.module';
import {ClickOutsideModule} from '../../../../directives/click-outside/click-outside.module';
import {CalendarModule} from '../calendar/calendar.module';
import {DaterangeService} from './daterange.service';
import {InputModule} from '../../input/input.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from '../../button/button.module';
import {DropdownSelectModule} from '../../dropdown/dropdown-select/dropdown-select.module';

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
    exports: [DaterangeComponent],
    entryComponents: [DaterangeComponent]
})
export class DaterangeModule {}

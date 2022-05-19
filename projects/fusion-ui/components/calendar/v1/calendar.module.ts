import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarService} from '@ironsource/fusion-ui/components/calendar/common/base';
import {CalendarComponent} from './calendar.component';

@NgModule({
    declarations: [CalendarComponent],
    imports: [CommonModule],
    providers: [CalendarService],
    exports: [CalendarComponent]
})
export class CalendarModule {}

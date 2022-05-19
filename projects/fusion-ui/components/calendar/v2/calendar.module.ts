import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './calendar.component';
import {CalendarService} from '@ironsource/fusion-ui/components/calendar/common/base';

@NgModule({
    declarations: [CalendarComponent],
    imports: [CommonModule],
    providers: [CalendarService],
    exports: [CalendarComponent]
})
export class CalendarModule {}

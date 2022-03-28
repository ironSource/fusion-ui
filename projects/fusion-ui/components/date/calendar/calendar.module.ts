import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './calendar.component';
import {CalendarService} from './calendar.service';

@NgModule({
    declarations: [CalendarComponent],
    imports: [CommonModule],
    providers: [CalendarService],
    exports: [CalendarComponent]
})
export class CalendarModule {}

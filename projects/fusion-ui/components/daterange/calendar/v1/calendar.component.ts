import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CalendarBaseComponent} from '../common/base/calendar.base.component';

@Component({
    selector: 'fusion-calendar',
    templateUrl: '../common/base/calendar.base.component.html',
    styleUrls: ['./calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent extends CalendarBaseComponent {}

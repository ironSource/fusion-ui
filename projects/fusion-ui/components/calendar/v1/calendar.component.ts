import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CalendarBaseComponent} from '@ironsource/fusion-ui/components/calendar/common/base';

@Component({
    selector: 'fusion-calendar',
    templateUrl: '../common/base/calendar.base.component.html',
    styleUrls: ['./calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CalendarComponent extends CalendarBaseComponent {}

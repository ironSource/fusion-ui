import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CalendarBaseComponent} from '@ironsource/fusion-ui/components/calendar/common/base';

@Component({
    selector: 'fusion-calendar',
    templateUrl: '../common/base/calendar.base.component.html',
    styleUrls: ['./calendar.component.scss'],
    host: {'ui-version': '1'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent extends CalendarBaseComponent {}

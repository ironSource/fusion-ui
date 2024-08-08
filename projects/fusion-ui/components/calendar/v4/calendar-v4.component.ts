import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarService} from '../common/base';
import {CalendarComponent} from '../v3';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@Component({
    selector: 'fusion-calendar',
    standalone: true,
    host: {class: 'fusion-v4'},
    imports: [CommonModule, IconModule],
    providers: [CalendarService],
    templateUrl: './calendar-v4.component.html',
    styleUrl: './calendar-v4.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarV4Component extends CalendarComponent {}

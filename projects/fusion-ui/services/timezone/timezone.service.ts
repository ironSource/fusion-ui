import {Injectable} from '@angular/core';
import {Timezone} from './timezone';
import {TIMEZONES} from './timezone.config';

@Injectable({
    providedIn: 'root'
})
export class TimezoneService {
    public get timeZones(): Timezone[] {
        return TIMEZONES;
    }
}

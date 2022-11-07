/*
 * Created on 2020.9.23 By Andy Kononenko (andyk@ironsrc.com)
 */

import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {isNumber} from '@ironsource/fusion-ui/utils';

@Injectable({
    providedIn: 'root'
})
@Pipe({
    name: 'secondsToMinutes',
    standalone: true
})
export class SecondsToMinutesPipe implements PipeTransform {
    transform(value: number): string {
        let minutes;
        if (value && isNumber(value)) {
            const _minutes = Math.floor(value / 60);
            const seconds = value - _minutes * 60;
            minutes = `${_minutes < 10 ? '0' : ''}${_minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        } else {
            minutes = '00:00';
        }

        return minutes;
    }
}

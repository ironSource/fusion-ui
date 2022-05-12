import {EventEmitter, Injectable, Output, Directive} from '@angular/core';
import {Day} from '../../entities/day';
import {Month} from '../../entities/month';

/* eslint-disable @angular-eslint/directive-class-suffix */
@Directive()
@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    @Output() dayHoverStart: EventEmitter<{parentDaterangeId: string; day: Day; hoveredElement: Node}> = new EventEmitter();
    @Output() dayHoverEnd: EventEmitter<{parentDaterangeId: string}> = new EventEmitter();

    parsedMonths: {[monthKey: string]: Month} = {};

    daysInMonth(month: number, year: number): number {
        return 32 - new Date(year, month, 32).getDate();
    }

    getMonthKey(month: Date): string {
        return month.getFullYear().toString() + '_' + month.getMonth().toString();
    }

    getParsedMonth(month, maxDate?: Date): Month {
        if (month) {
            const key = maxDate ? `${this.getMonthKey(month)}-${maxDate.getDate()}` : this.getMonthKey(month);
            return this.parsedMonths[key];
        }
        return {weeks: []};
    }

    createMonth(monthToCreateAsUtc: Date, maxDate?: Date): Month {
        const parsedMonth: Month = {weeks: []};
        const year = monthToCreateAsUtc.getFullYear();
        const month = monthToCreateAsUtc.getMonth();
        const firstDay = new Date(year, month, 1);
        const firstDayInMonth = firstDay.getDay();
        const now = this.getCurrentDateUTC();
        const maxDay = this.daysInMonth(month, year);
        const key = maxDate ? `${this.getMonthKey(monthToCreateAsUtc)}-${maxDate.getDate()}` : this.getMonthKey(monthToCreateAsUtc);
        let day: Day;
        let week: Day[];
        let dayCounter = 1;

        if (this.parsedMonths[key]) {
            return this.parsedMonths[key];
        }

        for (let weekNum = 0; weekNum < 6; weekNum++) {
            week = [];
            for (let currDayInWeek = 0; currDayInWeek < 7; currDayInWeek++) {
                day = {date: null, isToday: false, isInFuture: false};
                if ((weekNum > 0 || currDayInWeek >= firstDayInMonth) && dayCounter <= maxDay) {
                    day.date = new Date(year, month, dayCounter);
                    dayCounter++;

                    if (now < day.date || (maxDate && maxDate < day.date)) {
                        day.isInFuture = true;
                    }
                    if (day.date.getTime() === now.getTime()) {
                        day.isToday = true;
                    }
                }
                week.push(day);
            }
            parsedMonth.weeks.push(week);
        }
        this.parsedMonths[key] = parsedMonth;

        return parsedMonth;
    }

    getCurrentDateUTC(): Date {
        const d = new Date();
        return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
    }

    getDateAsUTC(date: Date): Date {
        return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    }

    compareDates(firstDate: Date, secondDate: Date): boolean {
        return (
            firstDate.getDate() === secondDate.getDate() &&
            firstDate.getMonth() === secondDate.getMonth() &&
            firstDate.getFullYear() === secondDate.getFullYear()
        );
    }
}

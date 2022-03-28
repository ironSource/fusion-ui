import {TestBed} from '@angular/core/testing';
import {CalendarService} from './calendar.service';

describe('CalendarService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CalendarService = TestBed.inject(CalendarService);
        expect(service).toBeTruthy();
    });

    it('should create month', () => {
        const service: CalendarService = TestBed.inject(CalendarService);
        const month = service.createMonth(new Date(2018, 1, 15));
        expect(month.weeks.length).toEqual(6);
        expect(month.weeks[0].length).toEqual(7);
        // partial starting week
        expect(month.weeks[0][0].date).toEqual(null);
        expect(month.weeks[0][1].date).toEqual(null);
        expect(month.weeks[0][2].date).toEqual(null);
        expect(month.weeks[0][3].date).toEqual(null);
        expect(month.weeks[0][4].date).not.toEqual(null);
        expect(month.weeks[0][5].date).not.toEqual(null);
        expect(month.weeks[0][6].date).not.toEqual(null);
        // partial ending week
        expect(month.weeks[4][0].date).not.toEqual(null);
        expect(month.weeks[4][1].date).not.toEqual(null);
        expect(month.weeks[4][2].date).not.toEqual(null);
        expect(month.weeks[4][3].date).not.toEqual(null);
        expect(month.weeks[4][4].date).toEqual(null);
        expect(month.weeks[4][5].date).toEqual(null);
        expect(month.weeks[4][6].date).toEqual(null);
        // empty week
        expect(month.weeks[5][0].date).toEqual(null);
        expect(month.weeks[5][1].date).toEqual(null);
        expect(month.weeks[5][2].date).toEqual(null);
        expect(month.weeks[5][3].date).toEqual(null);
        expect(month.weeks[5][4].date).toEqual(null);
        expect(month.weeks[5][5].date).toEqual(null);
        expect(month.weeks[5][6].date).toEqual(null);
    });

    it('should detect future', () => {
        const service: CalendarService = TestBed.inject(CalendarService);
        const now = new Date();
        const month = service.createMonth(now);

        // partial starting week
        for (const week of month.weeks) {
            for (const day of week) {
                if (!day.date || day.date.getDate() < now.getDate()) {
                    expect(day.isToday).toBeFalsy();
                    expect(day.isInFuture).toBeFalsy();
                } else if (day.date && day.date.getDate() === now.getDate()) {
                    expect(day.isToday).toBeTruthy();
                    expect(day.isInFuture).toBeFalsy();
                } else {
                    expect(day.isToday).toBeFalsy();
                    expect(day.isInFuture).toBeTruthy();
                }
            }
        }
    });
});

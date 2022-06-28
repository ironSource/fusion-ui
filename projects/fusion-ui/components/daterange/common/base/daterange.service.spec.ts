import {TestBed} from '@angular/core/testing';
import {DaterangeService} from './daterange.service';
import {DaterangePresets} from '@ironsource/fusion-ui/components/daterange/entities';

describe('DaterangeService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: DaterangeService = TestBed.inject(DaterangeService);
        expect(service).toBeTruthy();
    });

    it('should fail determining preset - not in available list', () => {
        const service: DaterangeService = TestBed.inject(DaterangeService);
        let now = new Date();
        now = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
        const preset = service.determinePreset({startDate: now, endDate: now}, [DaterangePresets.Yesterday]);
        expect(preset).toBeFalsy();
    });

    it('should fail determining preset - not a recognized preset', () => {
        const service: DaterangeService = TestBed.inject(DaterangeService);
        let someDay = new Date();
        someDay = new Date(someDay.getUTCFullYear(), someDay.getUTCMonth(), someDay.getUTCDate());
        someDay.setDate(someDay.getDate() - 3);
        const preset = service.determinePreset({startDate: someDay, endDate: someDay}, [
            DaterangePresets.Yesterday,
            DaterangePresets.Today,
            DaterangePresets.Last3Days
        ]);
        expect(preset).toBeFalsy();
    });

    it('should determine preset - available in list', () => {
        const service: DaterangeService = TestBed.inject(DaterangeService);
        let now = new Date();
        now = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
        const preset = service.determinePreset({startDate: now, endDate: now}, [DaterangePresets.Today]);
        expect(preset).toEqual(DaterangePresets.Today);
    });

    it('should determine preset - list has several items', () => {
        const service: DaterangeService = TestBed.inject(DaterangeService);
        let yesterday = new Date();
        yesterday = new Date(yesterday.getUTCFullYear(), yesterday.getUTCMonth(), yesterday.getUTCDate() - 1);
        const preset = service.determinePreset(
            {
                startDate: yesterday,
                endDate: yesterday
            },
            [DaterangePresets.Today, DaterangePresets.Yesterday]
        );
        expect(preset).toEqual(DaterangePresets.Yesterday);
    });
});

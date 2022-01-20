import {TestBed} from '@angular/core/testing';

import {ScrollToService} from './scroll-to.service';

describe('ScrollToService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ScrollToService = TestBed.inject(ScrollToService);
        expect(service).toBeTruthy();
    });
});

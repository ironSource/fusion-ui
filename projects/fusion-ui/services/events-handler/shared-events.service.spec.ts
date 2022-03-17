import {TestBed} from '@angular/core/testing';

import {SharedEventsService} from './shared-events.service';

describe('SharedEventsService', () => {
    let service: SharedEventsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SharedEventsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

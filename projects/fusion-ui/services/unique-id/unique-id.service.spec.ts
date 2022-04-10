import {TestBed} from '@angular/core/testing';

import {UniqueIdService} from './unique-id.service';

describe('UniqueIdService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: UniqueIdService = TestBed.inject(UniqueIdService);
        expect(service).toBeTruthy();
    });
});

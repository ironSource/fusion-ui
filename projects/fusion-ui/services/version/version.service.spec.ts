import {TestBed} from '@angular/core/testing';

import {VersionService} from './version.service';

describe('VersionService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: VersionService = TestBed.inject(VersionService);
        expect(service).toBeTruthy();
    });
});

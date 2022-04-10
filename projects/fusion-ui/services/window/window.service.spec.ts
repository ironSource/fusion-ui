import {TestBed} from '@angular/core/testing';

import {WindowService} from './window.service';

describe('WindowService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: WindowService = TestBed.inject(WindowService);
        expect(service).toBeTruthy();
    });
});

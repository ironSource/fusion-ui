import {TestBed} from '@angular/core/testing';

import {DomSanitizerService} from './dom-sanitizer.service';

describe('DomSanitizerService', () => {
    let service: DomSanitizerService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DomSanitizerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

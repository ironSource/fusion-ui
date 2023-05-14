import {TestBed} from '@angular/core/testing';

import {AttributionService} from './attribution.service';

describe('AttributionService', () => {
    let service: AttributionService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AttributionService]
        });
        service = TestBed.inject(AttributionService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should set name string and get name in kebab-case', () => {
        service.name = 'Attribution Name'
        expect(service.name).toEqual('attribution-name')
    });
});

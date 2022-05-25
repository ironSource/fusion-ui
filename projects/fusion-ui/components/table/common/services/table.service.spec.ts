import {TestBed} from '@angular/core/testing';

import {TableService} from './table.service';

describe('TableService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [TableService]
        })
    );

    it('should be created', () => {
        const service: TableService = TestBed.inject(TableService);
        expect(service).toBeTruthy();
    });
});

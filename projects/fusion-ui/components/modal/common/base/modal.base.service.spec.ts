import {TestBed} from '@angular/core/testing';

import {ModalService} from './modal.base.service';

describe('ModalService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ModalService = TestBed.inject(ModalService);
        expect(service).toBeTruthy();
    });
});

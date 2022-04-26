import {TestBed} from '@angular/core/testing';
import {TooltipService} from './tooltip.base.service';

describe('TooltipService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: []
        })
    );

    it('should be created', () => {
        const service: TooltipService = TestBed.inject(TooltipService);
        expect(service).toBeTruthy();
    });
});

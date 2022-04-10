import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {CapitalizePipe} from '@ironsource/fusion-ui/pipes/string';
import {Observable, of} from 'rxjs';
import {ApiService} from '@ironsource/fusion-ui/services/api';

class MockApiService {
    get(): Observable<any> {
        return of('');
    }
}

describe('UserService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [UserService, CapitalizePipe, {provide: ApiService, useClass: MockApiService}]
        })
    );

    it('should be created', () => {
        const service: UserService = TestBed.inject(UserService);
        expect(service).toBeTruthy();
    });
});

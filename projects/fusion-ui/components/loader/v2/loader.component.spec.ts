import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoaderComponent} from './loader.component';
import {ApiService} from '@ironsource/fusion-ui/services/api';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {Observable, of} from 'rxjs';

class MockApiService {
    get(): Observable<any> {
        return of('');
    }
}

describe('LoaderComponent', () => {
    let component: LoaderComponent;
    let fixture: ComponentFixture<LoaderComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [LoaderComponent],
            imports: [IconModule],
            providers: [{provide: ApiService, useClass: MockApiService}]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

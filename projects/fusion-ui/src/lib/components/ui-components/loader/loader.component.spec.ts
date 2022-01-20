import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoaderComponent} from './loader.component';
import {ApiService} from '../../../services/api/api.service';
import {IconModule} from '../icon/icon.module';
import {Observable, of} from 'rxjs';

class MockApiService {
    get(): Observable<any> {
        return of('');
    }
}

describe('LoaderComponent', () => {
    let component: LoaderComponent;
    let fixture: ComponentFixture<LoaderComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [LoaderComponent],
                imports: [IconModule],
                providers: [{provide: ApiService, useClass: MockApiService}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(LoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoaderInlineComponent} from './loader-inline.component';
import {Observable, of} from 'rxjs';
import {ApiService} from '@ironsource/fusion-ui/services';
import {IconModule} from '@ironsource/fusion-ui/components/icon';

class MockApiService {
    get(): Observable<any> {
        return of('');
    }
}

describe('LoaderInlineComponent', () => {
    let component: LoaderInlineComponent;
    let fixture: ComponentFixture<LoaderInlineComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [LoaderInlineComponent],
                imports: [IconModule],
                providers: [{provide: ApiService, useClass: MockApiService}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(LoaderInlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

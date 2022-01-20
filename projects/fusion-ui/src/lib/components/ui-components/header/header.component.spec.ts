import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {DynamicComponentsModule} from '../dynamic-components/dynamic-components.module';
import {IconModule} from '../icon/icon.module';
import {TruncateModule} from '../../../pipes/string/truncate/truncate.module';
import {RouterModule} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ApiService} from '../../../services/api/api.service';

// Mocking
class MockApiService {
    get(): Observable<any> {
        return of('');
    }
}

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [HeaderComponent],
                imports: [DynamicComponentsModule, IconModule, TruncateModule, RouterModule],
                providers: [{provide: ApiService, useClass: MockApiService}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

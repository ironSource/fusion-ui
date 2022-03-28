import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputComponent} from './input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '../icon/icon.module';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {Observable, of} from 'rxjs';
import {ApiService} from '@ironsource/fusion-ui/services';
import {LoaderInlineModule} from '../loader-inline/loader-inline.module';

class MockApiService {
    get(): Observable<any> {
        return of('');
    }
}

describe('InputComponent', () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [InputComponent],
                providers: [{provide: ApiService, useClass: MockApiService}],
                imports: [ReactiveFormsModule, IconModule, TooltipModule, LoaderModule, LoaderInlineModule, ClickOutsideModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

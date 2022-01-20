import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputComponent} from './input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '../icon/icon.module';
import {TooltipModule} from '../tooltip/tooltip.module';
import {LoaderModule} from '../loader/loader.module';
import {ClickOutsideModule} from '../../../directives/click-outside/click-outside.module';
import {Observable, of} from 'rxjs';
import {ApiService} from '../../../services/api/api.service';
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

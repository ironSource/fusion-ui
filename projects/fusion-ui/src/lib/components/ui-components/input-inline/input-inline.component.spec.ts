import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputInlineComponent} from './input-inline.component';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LoaderModule} from '../loader/loader.module';
import {IconModule} from '../icon/icon.module';
import {InputModule} from '../input/input.module';
import {TooltipModule} from '../tooltip/tooltip.module';
import {ClickOutsideModule} from '../../../directives/click-outside/click-outside.module';
import {Observable, of} from 'rxjs';
import {ApiService} from '../../../services/api/api.service';

class MockApiService {
    get(): Observable<any> {
        return of('');
    }
}

describe('InputInlineComponent', () => {
    let component: InputInlineComponent;
    let fixture: ComponentFixture<InputInlineComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [InputInlineComponent],
                providers: [CurrencyPipe, {provide: ApiService, useClass: MockApiService}],
                imports: [ReactiveFormsModule, LoaderModule, IconModule, InputModule, TooltipModule, ClickOutsideModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(InputInlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

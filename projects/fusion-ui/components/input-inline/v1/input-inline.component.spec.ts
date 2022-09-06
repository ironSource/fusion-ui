import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputInlineComponent} from './input-inline.component';
import {CurrencyPipe} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {Observable, of} from 'rxjs';
import {ApiService} from '@ironsource/fusion-ui/services/api';

class MockApiService {
    get(): Observable<any> {
        return of('');
    }
}

describe('InputInlineComponent', () => {
    let component: InputInlineComponent;
    let fixture: ComponentFixture<InputInlineComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [InputInlineComponent],
            providers: [CurrencyPipe, {provide: ApiService, useClass: MockApiService}],
            imports: [ReactiveFormsModule, LoaderModule, IconModule, InputModule, TooltipModule, ClickOutsideModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputInlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

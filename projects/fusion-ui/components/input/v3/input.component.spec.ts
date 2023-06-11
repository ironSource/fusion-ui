import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputComponent} from './input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v2';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {Observable, of} from 'rxjs';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline/v2';

describe('InputComponent', () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [InputComponent],
            imports: [ReactiveFormsModule, IconModule, TooltipModule, LoaderModule, LoaderInlineModule, ClickOutsideModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

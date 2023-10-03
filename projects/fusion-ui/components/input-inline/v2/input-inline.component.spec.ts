import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputInlineComponent} from './input-inline.component';
import {CurrencyPipe} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v2';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';

describe('InputInlineComponent', () => {
    let component: InputInlineComponent;
    let fixture: ComponentFixture<InputInlineComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [InputInlineComponent],
            providers: [CurrencyPipe],
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

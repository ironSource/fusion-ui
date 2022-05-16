import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatepickerHeaderComponent} from './datepicker-header.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {DatePipe} from '@angular/common';

describe('DatepickerHeaderComponent', () => {
    let component: DatepickerHeaderComponent;
    let fixture: ComponentFixture<DatepickerHeaderComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [IconModule, InputModule, DropdownModule, ClickOutsideModule],
                declarations: [DatepickerHeaderComponent],
                providers: [DatePipe]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DatepickerHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

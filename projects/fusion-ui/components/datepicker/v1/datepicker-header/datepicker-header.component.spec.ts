import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatepickerHeaderComponent} from './datepicker-header.component';
import {IconModule} from '../../../icon';
import {InputModule} from '../../../input';
import {DropdownModule} from '../../../dropdown';
import {ClickOutsideModule} from '../../../../directives/click-outside';
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

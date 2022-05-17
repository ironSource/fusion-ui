import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {IconModule} from '../../../icon';
import {InputModule} from '../../../input';
import {DropdownModule} from '../../../dropdown';
import {ClickOutsideModule} from '../../../../directives/click-outside';
import {DatePipe} from '@angular/common';
import {DatepickerSelectionComponent} from './datepicker-selection.component';

describe('DatepickerSelectionComponent', () => {
    let component: DatepickerSelectionComponent;
    let fixture: ComponentFixture<DatepickerSelectionComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [IconModule, InputModule, DropdownModule, ClickOutsideModule],
                providers: [DatePipe],
                declarations: [DatepickerSelectionComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DatepickerSelectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

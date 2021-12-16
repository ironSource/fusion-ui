import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {IconModule} from '../../icon/icon.module';
import {InputModule} from '../../input/input.module';
import {DropdownModule} from '../../dropdown/dropdown/dropdown.module';
import {ClickOutsideModule} from '../../../../directives/click-outside/click-outside.module';
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

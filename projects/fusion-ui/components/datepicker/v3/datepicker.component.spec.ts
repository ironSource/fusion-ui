import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DatepickerComponent} from './datepicker.component';
import {DaterangeModule} from "@ironsource/fusion-ui/components/daterange/v3";
import {ReactiveFormsModule} from "@angular/forms";

describe('DatepickerComponent', () => {
    let component: DatepickerComponent;
    let fixture: ComponentFixture<DatepickerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DatepickerComponent],
            imports: [DaterangeModule, ReactiveFormsModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DatepickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

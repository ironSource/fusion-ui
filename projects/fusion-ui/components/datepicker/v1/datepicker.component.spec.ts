import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown';
import {DatePipe} from '@angular/common';

import {DatepickerComponent} from './datepicker.component';
import {DatepickerHeaderComponent} from './datepicker-header/datepicker-header.component';
import {DatepickerSelectionComponent} from './datepicker-selection/datepicker-selection.component';
import {ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {LogService} from '../../../services/log';
import {TimezoneService} from '@ironsource/fusion-ui/services/timezone';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {MockTimeZonesService, MockUniqueIdService} from '@ironsource/fusion-ui/services/mocks';
import {DebugElement} from '@angular/core';

describe('DatepickerComponent', () => {
    let component: DatepickerComponent;
    let fixture: ComponentFixture<DatepickerComponent>;
    let debugEl: DebugElement;
    let datePickerHolderEl: DebugElement;
    let inpEl: DebugElement;
    let dropDownSelectEl: DebugElement;
    let el: HTMLElement;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [IconModule, InputModule, DropdownModule, ClickOutsideModule, ReactiveFormsModule],
                providers: [
                    DatePipe,
                    LogService,
                    {provide: TimezoneService, useClass: MockTimeZonesService},
                    {provide: UniqueIdService, useClass: MockUniqueIdService}
                ],
                declarations: [DatepickerComponent, DatepickerHeaderComponent, DatepickerSelectionComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DatepickerComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        component.cdr.detectChanges();
        debugEl = fixture.debugElement.query(By.css('div'));
        el = debugEl.nativeElement;
        datePickerHolderEl = fixture.debugElement.query(By.css('.is-datepicker-holder'));
        inpEl = fixture.debugElement.query(By.css('input'));
        dropDownSelectEl = fixture.debugElement.query(By.css('fusion-datepicker-selection'));
        component.ngAfterViewInit();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Must has class "opened" if parameter isOpened is true (pre-open)', () => {
        component.isOpened = true;
        component.cdr.detectChanges();
        expect(datePickerHolderEl.nativeElement.classList).toContain('opened');
    });

    it('Must have class "opened" on input take focus and closed by click outside', () => {
        const isDatepickerSelectionEl = fixture.debugElement.query(By.directive(DatepickerSelectionComponent));
        const isDatepickerSelectEl = isDatepickerSelectionEl.nativeElement.querySelector('.is-datepicker-select');
        isDatepickerSelectEl.dispatchEvent(new Event('click'));
        component.cdr.detectChanges();
        expect(datePickerHolderEl.nativeElement.classList).toContain('opened');

        component.onOutsideClick();

        component.cdr.detectChanges();
        expect(datePickerHolderEl.nativeElement.classList).not.toContain('opened');
    });

    it('Must set date by click on calendar day', () => {
        const strDate = '2017-05-08';
        // inpEl.triggerEventHandler('focus', null);
        dropDownSelectEl.triggerEventHandler('click', null);
        component.cdr.detectChanges();
        component.datesInputs.patchValue({dateVal: strDate});
        component.cdr.detectChanges();
        fixture.debugElement.query(By.css('tbody tr td[title="2017-05-11"]')).triggerEventHandler('click', null);
        component.cdr.detectChanges();
        expect(component.selectedDate.date.toLocaleString().slice(0, 9)).toBe('5/11/2017');
    });

    it('Must change date by click on calendar input', () => {
        const strDate = '2017-05-08';
        // inpEl.triggerEventHandler('focus', null);
        dropDownSelectEl.triggerEventHandler('click', null);
        component.cdr.detectChanges();
        component.datesInputs.patchValue({dateVal: strDate});
        component.cdr.detectChanges();

        expect(fixture.debugElement.query(By.css('thead th.month')).nativeElement.innerText).toContain('May 2017');
        expect(fixture.debugElement.query(By.css('tbody td.day.active')).nativeElement.innerText).toContain('08');

        fixture.debugElement.query(By.css('tbody tr td[title="2017-05-11"]')).triggerEventHandler('click', null);
        component.cdr.detectChanges();
        expect(component.selectedDate.date.toLocaleString().slice(0, 9)).toBe('5/11/2017');
    });

    it('Must change calendar render my click on month change buttons', () => {
        const strDate = '2017-05-08';
        // inpEl.triggerEventHandler('focus', null);
        dropDownSelectEl.triggerEventHandler('click', null);
        component.cdr.detectChanges();
        component.datesInputs.patchValue({dateVal: strDate});
        component.cdr.detectChanges();

        // check selected
        expect(fixture.debugElement.query(By.css('thead th.month')).nativeElement.innerText).toContain('May 2017');

        fixture.debugElement.query(By.css('thead th.next')).triggerEventHandler('click', null);
        component.cdr.detectChanges();
        expect(fixture.debugElement.query(By.css('thead th.month')).nativeElement.innerText).toContain('June 2017');

        fixture.debugElement.query(By.css('thead th.prev')).triggerEventHandler('click', null);
        component.cdr.detectChanges();
        fixture.debugElement.query(By.css('thead th.prev')).triggerEventHandler('click', null);
        component.cdr.detectChanges();
        expect(fixture.debugElement.query(By.css('thead th.month')).nativeElement.innerText).toContain('April 2017');
    });

    it('Must not render time picker and time-zone picker if not asked', () => {
        component.cdr.detectChanges();
        expect(fixture.debugElement.query(By.css('div.is-timepicker-holder'))).not.toBeTruthy();
        expect(fixture.debugElement.query(By.css('div.is-timezone-holder'))).not.toBeTruthy();
    });

    it('Can have time picker and time-zone picker', () => {
        component.isTimePicker = true;
        component.cdr.detectChanges();

        expect(fixture.debugElement.query(By.css('div.is-timepicker-holder'))).toBeTruthy();
        const expected = '<fusion-dropdown placeholder="Default Selection"></fusion-dropdown>';

        const elHourSel = fixture.debugElement.query(By.css('fusion-input[name="hoursPicker"]')).nativeElement;
        const elMinSel = fixture.debugElement.query(By.css('fusion-input[name="minutesPicker"]')).nativeElement;

        expect(elHourSel.getAttribute('name')).toEqual('hoursPicker');
        expect(elMinSel.getAttribute('name')).toEqual('minutesPicker');
    });
});

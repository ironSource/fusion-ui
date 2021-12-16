import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {DaterangeComponent} from './daterange.component';
import {IconModule} from '../../icon/icon.module';
import {CalendarModule} from '../calendar/calendar.module';
import {ModalModule} from '../../modal/modal.module';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('DaterangeComponent', () => {
    let component: DaterangeComponent;
    let fixture: ComponentFixture<DaterangeComponent>;
    let now: Date;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                declarations: [DaterangeComponent],
                imports: [IconModule, CalendarModule, ModalModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DaterangeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        now = new Date();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize', () => {
        now = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
        const thisMonth = now.getMonth();
        now.setMonth(now.getMonth() - 1, 1);
        const prevMonth = now.getMonth();
        expect(component.currentMonths[0].getMonth()).toEqual(prevMonth);
        expect(component.currentMonths[1].getMonth()).toEqual(thisMonth);
    });

    it('should get Value from form', () => {
        now = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
        const lastWeek = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 6);
        component.writeValue({startDate: lastWeek, endDate: now});

        expect(component.selection.startDate).toEqual(lastWeek);
        expect(component.selection.endDate).toEqual(now);
        expect(component.originalSelection.startDate).toEqual(lastWeek);
        expect(component.originalSelection.endDate).toEqual(now);
    });

    it('should allow custom date selection', () => {
        now = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
        const lastWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6);
        const olderDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 8);
        component.writeValue({startDate: lastWeek, endDate: now});
        const day = {date: lastWeek, isInFuture: false, isToday: false};
        const olderDay = {date: olderDate, isInFuture: false, isToday: false};
        component.isOpen = true;

        let displayedText = component.getCurrentSelectionFormatted();
        expect(displayedText).toEqual('Last 7 days');

        // --- start selection
        component.onSelectDay(day);
        // selection started - should start and end on the same day
        expect(component.selection.startDate).toEqual(lastWeek);
        expect(component.selection.endDate).toEqual(lastWeek);
        // original selection should not be affected
        expect(component.originalSelection.startDate).toEqual(lastWeek);
        expect(component.originalSelection.endDate).toEqual(now);
        // should mark the day as the start of a selection
        expect(component.selectionStarted).toEqual(day);
        // displayed text should not be affected
        displayedText = component.getCurrentSelectionFormatted();
        expect(displayedText).toEqual('Last 7 days');

        // --- select day in the past
        component.onSelectDay(olderDay);
        // selection started - should start and end on the same day
        expect(component.selection.startDate).toEqual(olderDate);
        expect(component.selection.endDate).toEqual(olderDate);
        // original selection should not be affected
        expect(component.originalSelection.startDate).toEqual(lastWeek);
        expect(component.originalSelection.endDate).toEqual(now);
        // should mark the day as the start of a selection
        expect(component.selectionStarted).toEqual(olderDay);
        // displayed text should not be affected
        displayedText = component.getCurrentSelectionFormatted();
        expect(displayedText).toEqual('Last 7 days');

        // --- end selection
        component.onSelectDay(day);
        // selection ended - should change to proper start and end range
        expect(component.selection.startDate).toEqual(olderDate);
        expect(component.selection.endDate).toEqual(lastWeek);
        // original selection should not be affected
        expect(component.originalSelection.startDate).toEqual(lastWeek);
        expect(component.originalSelection.endDate).toEqual(now);
        // should mark the day as the start of a selection
        expect(component.selectionStarted).toEqual(null);
        // displayed text should not be affected
        displayedText = component.getCurrentSelectionFormatted();
        expect(displayedText).toEqual('Last 7 days');

        // --- cancel selection
        component.close();
        // should revert to the original selection
        expect(component.selection.startDate).toEqual(lastWeek);
        expect(component.selection.endDate).toEqual(now);
        // original selection should not be affected
        expect(component.originalSelection.startDate).toEqual(lastWeek);
        expect(component.originalSelection.endDate).toEqual(now);
        // displayed text should not be affected
        displayedText = component.getCurrentSelectionFormatted();
        expect(displayedText).toEqual('Last 7 days');

        // --- apply selection
        component.isOpen = true;
        component.onSelectDay(olderDay);
        component.onSelectDay(day);
        component.apply();
        // should change to the new selection
        expect(component.selection.startDate).toEqual(olderDate);
        expect(component.selection.endDate).toEqual(lastWeek);
        // original selection change to the new selection
        expect(component.originalSelection.startDate).toEqual(olderDate);
        expect(component.originalSelection.endDate).toEqual(lastWeek);
        // displayed text should update to the new selection
        displayedText = component.getCurrentSelectionFormatted();
        expect(displayedText).not.toEqual('Last 7 days');
        expect(displayedText).toBeTruthy();
    });

    it('should allow change months displayed', () => {
        now = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
        const thisMonth = now.getMonth();
        now.setMonth(now.getMonth() - 1, 1);
        const prevMonth = now.getMonth();
        now.setMonth(now.getMonth() + 2, 1);
        const nextMonth = now.getMonth();
        expect(component.currentMonths[0].getMonth()).toEqual(prevMonth);
        expect(component.currentMonths[1].getMonth()).toEqual(thisMonth);

        component.onMonthChange('next');
        expect(component.currentMonths[0].getMonth()).toEqual(thisMonth);
        expect(component.currentMonths[1].getMonth()).toEqual(nextMonth);

        component.onMonthChange('previous');
        expect(component.currentMonths[0].getMonth()).toEqual(prevMonth);
        expect(component.currentMonths[1].getMonth()).toEqual(thisMonth);
    });
});

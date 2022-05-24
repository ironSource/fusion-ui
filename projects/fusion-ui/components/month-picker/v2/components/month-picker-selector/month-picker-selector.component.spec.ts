import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MonthPickerSelectorComponent} from './month-picker-selector.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {MONTH_NAMES_SHORT} from '@ironsource/fusion-ui/components/month-picker/common/base';

describe('MonthPickerSelectorComponent', () => {
    let component: MonthPickerSelectorComponent;
    let fixture: ComponentFixture<MonthPickerSelectorComponent>;
    let debugNativeEl: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MonthPickerSelectorComponent],
            imports: [IconModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MonthPickerSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        debugNativeEl = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    describe('should render DOM elements', () => {
        it('year selector', () => {
            const yearSelector = debugNativeEl.querySelector('.fu-year-selector');
            expect(yearSelector).toBeTruthy();

            const arrowHolderEls = yearSelector.querySelectorAll('.fu-arrow-holder');
            expect(arrowHolderEls.length).toEqual(2);
        });
        it('year selector previous icon', () => {
            const arrowPrevEls = debugNativeEl.querySelectorAll('.fu-year-selector .fu-arrow-holder fusion-icon.fu-arrow-prev');
            expect(arrowPrevEls).toBeTruthy();
        });
        it('year selector next icon', () => {
            const arrowPrevEls = debugNativeEl.querySelectorAll('.fu-year-selector .fu-arrow-holder fusion-icon.fu-arrow-next');
            expect(arrowPrevEls).toBeTruthy();
        });
        it('month selector', () => {
            const monthSelector = debugNativeEl.querySelector('.fu-month-selector');
            expect(monthSelector).toBeTruthy();
        });
        it('month names', () => {
            const monthNameEls = debugNativeEl.querySelectorAll('.fu-month-selector .fu-month-name');
            expect(monthNameEls.length).toEqual(MONTH_NAMES_SHORT.en.length);

            monthNameEls.forEach((el, idx) => {
                expect(el.textContent.trim()).toEqual(MONTH_NAMES_SHORT.en[idx]);
            });
        });
    });
});

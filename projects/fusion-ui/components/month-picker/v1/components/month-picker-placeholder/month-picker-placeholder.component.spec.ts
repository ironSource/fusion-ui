import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {MonthPickerPlaceholderComponent} from './month-picker-placeholder.component';
import {MONTH_PICKER_PLACEHOLDER} from '@ironsource/fusion-ui/components/month-picker/common/base';

describe('MonthPickerButtonComponent', () => {
    let component: MonthPickerPlaceholderComponent;
    let fixture: ComponentFixture<MonthPickerPlaceholderComponent>;
    let debugNativeEl: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MonthPickerPlaceholderComponent],
            imports: [IconModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MonthPickerPlaceholderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        debugNativeEl = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    describe('should render default DOM elements', () => {
        it('picker icon', () => {
            const pickerIcon = debugNativeEl.querySelector('fusion-icon.fu-calendar-icon');
            expect(pickerIcon).toBeTruthy();
            expect(pickerIcon.classList).toContain('calendar-2');
        });
        it('picker placeholder', () => {
            const pickerPlaceholder = debugNativeEl.querySelector('.fu-placeholder');
            expect(pickerPlaceholder).toBeTruthy();
            expect(pickerPlaceholder.textContent).toEqual(MONTH_PICKER_PLACEHOLDER.text);
        });
        it('arrow icon', () => {
            const arrowIcon = debugNativeEl.querySelector('fusion-icon.icon-arrow');
            expect(arrowIcon).toBeTruthy();
            expect(arrowIcon.classList).toContain('arrow-dropdown');
        });
    });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MonthPickerComponent} from './month-picker.component';
import {MonthPickerPlaceholderModule} from './components/month-picker-placeholder/month-picker-placeholder.module';
import {MonthPickerSelectorModule} from './components/month-picker-selector/month-picker-selector.module';

describe('MonthPickerComponent', () => {
    let component: MonthPickerComponent;
    let fixture: ComponentFixture<MonthPickerComponent>;
    let debugNativeEl: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MonthPickerComponent],
            imports: [MonthPickerPlaceholderModule, MonthPickerSelectorModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MonthPickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        debugNativeEl = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    describe('should render DOM elements', () => {
        it('wrapper', () => {
            expect(debugNativeEl.querySelector('.fu-month-picker-wrapper')).toBeTruthy();
        });
        it('fusion-month-picker-placeholder component', () => {
            expect(debugNativeEl.querySelector('fusion-month-picker-placeholder')).toBeTruthy();
        });
        it('fusion-month-selector component', () => {
            expect(debugNativeEl.querySelector('fusion-month-picker-selector')).toBeTruthy();
        });
    });
});

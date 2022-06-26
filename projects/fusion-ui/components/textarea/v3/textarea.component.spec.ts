import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TextareaComponent} from './textarea.component';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy} from '@angular/core';
import {FormsModule} from '@angular/forms';

describe('TextareaComponent', () => {
    let component: TextareaComponent;
    let fixture: ComponentFixture<TextareaComponent>;
    let debugEl: DebugElement;
    let inputEl: DebugElement;
    let errEl: DebugElement;
    let helperEl: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [TextareaComponent]
        });

        fixture = TestBed.overrideComponent(TextareaComponent, {
            set: {changeDetection: ChangeDetectionStrategy.Default}
        }).createComponent(TextareaComponent);

        component = fixture.componentInstance;

        debugEl = fixture.debugElement;
        el = debugEl.nativeElement;

        inputEl = fixture.debugElement.query(By.css('textarea'));
    });

    it('Must exist and have textarea with class "is-textarea" ', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
        expect(inputEl.nativeElement.classList).toContain('is-textarea');
    });

    it('Can have placeholder attribute', () => {
        const testPlaceholder = 'TestPlaceholder';
        component.placeholder = testPlaceholder;
        fixture.detectChanges();

        expect(inputEl.nativeElement.getAttribute('placeholder')).toContain(testPlaceholder);
    });

    it('Can have cols, rows, resize and require attribute', () => {
        component.resize = false;
        component.required = false;

        fixture.detectChanges();

        expect(Array.from(inputEl.nativeElement.classList)).not.toContain('resize');
        expect(inputEl.nativeElement.getAttribute('required')).toBe(null);
    });

    it('Can set disabled / enabled', () => {
        component.isDisabled = true;
        fixture.detectChanges();
        inputEl = fixture.debugElement.query(By.css('textarea'));
        expect(Array.from(inputEl.nativeElement.classList)).toContain('disabled');

        component.isDisabled = false;
        fixture.detectChanges();
        inputEl = fixture.debugElement.query(By.css('textarea'));
        expect(Array.from(inputEl.nativeElement.classList)).not.toContain('disabled');
    });

    it('Can have an error message', () => {
        const testErr = 'error message';
        component.error = testErr;
        fixture.detectChanges();
        errEl = fixture.debugElement.query(By.css('.fu-error-msg'));
        expect(errEl.nativeElement.innerText).toBe(testErr);
    });

    it('Can have an helper text', () => {
        const testHelpText = 'Help text';
        component.helperText = testHelpText;
        fixture.detectChanges();
        helperEl = fixture.debugElement.query(By.css('.fu-helper-text'));
        expect(helperEl.nativeElement.innerText).toBe(testHelpText);
    });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TextareaV4Component} from './textarea-v4.component';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TabV4Component} from "@ironsource/fusion-ui/components/tabs/v4/tab/tab-v4.component";

describe('TextareaComponent', () => {
    let component: TextareaV4Component;
    let fixture: ComponentFixture<TextareaV4Component>;
    let debugEl: DebugElement;
    let inputEl: DebugElement;
    let errEl: DebugElement;
    let helperEl: DebugElement;
    let el: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ TextareaV4Component ]
        })
            .compileComponents();

        fixture = TestBed.overrideComponent(TextareaV4Component, {
            set: {changeDetection: ChangeDetectionStrategy.Default}
        }).createComponent(TextareaV4Component);

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
});

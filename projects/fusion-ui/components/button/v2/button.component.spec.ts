/**
 * Created by andyk on 18/05/2017.
 */

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Component, DebugElement, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {ButtonComponent} from './button.component';

const innerText = 'Test Button';

// do dummy component - holder
@Component({
    template: ` <button fusion-button [disabled]="isDisabled">${innerText}</button> `
})
class TestButtonComponent {
    isDisabled = false;
}
// ------------------------------------------------------

describe('ButtonComponent', () => {
    let component: TestButtonComponent;
    let fixture: ComponentFixture<TestButtonComponent>;
    let debugEl: DebugElement;
    let buttonEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [TestButtonComponent, ButtonComponent]
        });

        fixture = TestBed.createComponent(TestButtonComponent);

        component = fixture.componentInstance;

        debugEl = fixture.debugElement;
        buttonEl = debugEl.query(By.css('button'));

        fixture.detectChanges();
    });

    it('Must exist', () => {
        expect(component).toBeTruthy();
    });

    it('Must have inner text', () => {
        expect(buttonEl.nativeElement.textContent.trim()).toBe(innerText);
    });

    it('Must be enabled by default', () => {
        expect(buttonEl.nativeElement.classList).not.toContain('disabled');
    });

    it('Can be set disabled and than enabled', () => {
        component.isDisabled = true;
        fixture.detectChanges();
        expect(buttonEl.nativeElement.classList).toContain('disabled');

        component.isDisabled = false;
        fixture.detectChanges();
        expect(buttonEl.nativeElement.classList).not.toContain('disabled');
    });
});

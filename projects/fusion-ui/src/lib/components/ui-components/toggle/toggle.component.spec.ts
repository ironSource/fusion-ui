/**
 * Created by andyk on 21/05/2017.
 */

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {ToggleComponent} from './toggle.component';
import {UniqueIdService} from '../../../services/unique-id/unique-id.service';

class MockUniqueIdService extends UniqueIdService {
    getUniqueId() {
        return 123456789;
    }
}

// TODO: check component with Daniel - has so,e question about test plan.

describe('ToggleComponent', () => {
    let component: ToggleComponent;
    let fixture: ComponentFixture<ToggleComponent>;
    let debugEl: DebugElement;
    let inputEl: DebugElement;
    let holderEl: DebugElement;
    let labelEl: DebugElement;
    let sliderEl: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [ToggleComponent],
            providers: [{provide: UniqueIdService, useClass: MockUniqueIdService}]
        });

        fixture = TestBed.overrideComponent(ToggleComponent, {
            set: {changeDetection: ChangeDetectionStrategy.Default}
        }).createComponent(ToggleComponent);

        component = fixture.componentInstance;

        debugEl = fixture.debugElement;
        el = debugEl.nativeElement;

        inputEl = fixture.debugElement.query(By.css('input[type="checkbox"]'));
        holderEl = fixture.debugElement.query(By.css('label.is-toggle'));
        labelEl = fixture.debugElement.query(By.css('span.label'));
        sliderEl = fixture.debugElement.query(By.css('span.slider'));
    });

    it('Must exist and input must have id', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
        expect(inputEl.nativeElement.getAttribute('id')).toContain('is-toggle-123456789');
    });

    it('Can have an Label text', () => {
        const testLbl = 'Test Label';
        component.label = testLbl;
        fixture.detectChanges();
        const labelEle = fixture.debugElement.query(By.css('span.label'));

        expect(labelEle.nativeElement.innerText).toContain(testLbl);
    });

    it('Can have an value', () => {
        const testValue = 'TestVal';

        component.value = testValue;
        fixture.detectChanges();

        expect(inputEl.nativeElement.getAttribute('value')).toContain(testValue);
    });

    it('Can have an model', () => {
        const testModel = true;

        component.model = testModel;
        fixture.detectChanges();

        expect(inputEl.nativeElement.getAttribute('ng-reflect-model')).toContain(testModel);

        component.model = !testModel;
        fixture.detectChanges();

        expect(inputEl.nativeElement.getAttribute('ng-reflect-model')).toContain(!testModel);
    });

    it('Can set in loading mode with default text', () => {
        component.loading = true;
        fixture.detectChanges();
        expect(holderEl.nativeElement.classList).toContain('loading');

        component.loading = false;
        fixture.detectChanges();

        expect(holderEl.nativeElement.classList).not.toContain('loading');
    });

    it('Can set disabled / enabled', () => {
        component.isDisabled = true;
        fixture.detectChanges();
        expect(holderEl.nativeElement.classList).toContain('disabled');

        component.isDisabled = false;
        fixture.detectChanges();
        expect(holderEl.nativeElement.classList).not.toContain('disabled');
    });
});

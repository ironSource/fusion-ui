/**
 * Created by andyk on 06/06/2017.
 */

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {CheckboxComponent} from './checkbox.component';
import {UniqueIdService} from '@ironsource/fusion-ui/services';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';

class MockUniqueIdService extends UniqueIdService {
    getUniqueId() {
        return 123456789;
    }
}

class MockGlobalService {
    public commonState: any = {
        title: '',
        isMainMenuCollapsed: false
    };

    public get loading() {
        return false;
    }
    closeTooltip() {}
}

describe('CheckboxComponent', () => {
    let component: CheckboxComponent;
    let fixture: ComponentFixture<CheckboxComponent>;
    let debugEl: DebugElement;
    let inputEl: DebugElement;

    let labelEl: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, TooltipModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [CheckboxComponent],
            providers: [{provide: UniqueIdService, useClass: MockUniqueIdService}]
        });

        fixture = TestBed.createComponent(CheckboxComponent);

        component = fixture.componentInstance;

        debugEl = fixture.debugElement;
        el = debugEl.nativeElement;

        inputEl = fixture.debugElement.query(By.css('input[type="checkbox"]'));
        labelEl = fixture.debugElement.query(By.css('label'));
    });

    it('Must exist and input must have id', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
        expect(inputEl.nativeElement.getAttribute('id')).toContain('is-checkboxes-123456789');
    });

    it('Can have an Label text', () => {
        const testLbl = 'Test Label';
        component.label = testLbl;
        fixture.detectChanges();

        expect(labelEl.nativeElement.innerText).toContain(testLbl);
    });

    it('Can have an value', () => {
        const testValue = 'TestVal';

        component.value = testValue;
        fixture.detectChanges();

        expect(inputEl.nativeElement.getAttribute('value')).toContain(testValue);
    });
});

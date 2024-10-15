import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Injectable} from "@angular/core";
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToggleV4Component} from './toggle-v4.component';
import {UniqueIdService} from '@ironsource/fusion-ui';

@Injectable()
class MockUniqueIdService extends UniqueIdService {
    getUniqueId() {
        return 987654321;
    }
}

const HELPER_TEXT = 'Helper text';
const LABEL_TEXT = 'Label text';
const TOOLTIP_TEXT = 'Tooltip text';
const ICON_NAME = 'icon-name';

describe('ToggleV4Component', () => {
    let component: ToggleV4Component;
    let fixture: ComponentFixture<ToggleV4Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ToggleV4Component, FormsModule, ReactiveFormsModule],
            providers: [{provide: UniqueIdService, useClass: MockUniqueIdService}]
        }).compileComponents();

        fixture = TestBed.createComponent(ToggleV4Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have label and input type:checkbox', () => {
        expect(fixture.nativeElement.querySelector('label')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('label input[type="checkbox"]')).toBeTruthy();
    });

    it('by default label should have class "size-small"', () => {
        const inputEl = fixture.nativeElement.querySelector('label.fu-toggle-size-small');
        expect(inputEl).toBeTruthy();
    });

    it('by default label should have class "color-primary"', () => {
        const inputEl = fixture.nativeElement.querySelector('label.fu-toggle-color-primary');
        expect(inputEl).toBeTruthy();
    });

    it('input should have id', () => {
        const inputEl = fixture.nativeElement.querySelector('label input[type="checkbox"]');
        expect(inputEl).toBeTruthy();
        expect(inputEl.id).toBe('fuToggle_987654321');
    });

    it('should not be "checked" ', () => {
        const inputEl = fixture.nativeElement.querySelector('label input[type="checkbox"]');
        expect(inputEl).toBeTruthy();
        expect(inputEl.checked).toBeFalse();
    });

    it('should be "checked" if formControl value is true', () => {
        const formControl = new FormControl(true)
        fixture = TestBed.createComponent(ToggleV4Component);
        component = fixture.componentInstance;
        component.writeValue(formControl.value);
        fixture.detectChanges();
        const inputEl = fixture.nativeElement.querySelector('label input[type="checkbox"]');
        expect(inputEl).toBeTruthy();
        expect(inputEl.checked).toBeTruthy();
    });

    it('should be "disabled" if formControl disabled', () => {
        const formControl = new FormControl({value: true, disabled: true})
        fixture = TestBed.createComponent(ToggleV4Component);
        component = fixture.componentInstance;
        component.writeValue(formControl.value);
        component.setDisabledState(formControl.disabled);
        fixture.detectChanges();
        const inputEl = fixture.nativeElement.querySelector('label input[type="checkbox"]');
        expect(inputEl).toBeTruthy();
        expect(inputEl.checked).toBeTruthy();
        expect(inputEl.disabled).toBeTruthy();
    });

    it('should be "disabled" if input disabled set true', () => {
        const formControl = new FormControl(true)
        fixture = TestBed.createComponent(ToggleV4Component);
        component = fixture.componentInstance;
        component.writeValue(formControl.value);
        component.disabled = true;
        fixture.detectChanges();
        const inputEl = fixture.nativeElement.querySelector('label input[type="checkbox"]');
        expect(inputEl).toBeTruthy();
        expect(inputEl.checked).toBeTruthy();
        expect(inputEl.disabled).toBeTruthy();
    });


    it('should have loading class if set loading', () => {
        fixture = TestBed.createComponent(ToggleV4Component);
        component = fixture.componentInstance;
        component.loading = true;
        fixture.detectChanges();
        const wrapperEl = fixture.nativeElement.querySelector('div.fu-toggle-wrapper.fu-toggle-loading');
        expect(wrapperEl).toBeTruthy();
    });

    it('should have "color-test" class if set color "test"', () => {
        fixture = TestBed.createComponent(ToggleV4Component);
        component = fixture.componentInstance;
        component.color = 'test';
        fixture.detectChanges();

        const wrapperEl = fixture.nativeElement.querySelector('label.fu-toggle-holder.fu-toggle-color-test');
        expect(wrapperEl).toBeTruthy();
    });

    it('should have "size-medium" class if set size "medium"', () => {
        fixture = TestBed.createComponent(ToggleV4Component);
        component = fixture.componentInstance;
        component.size = 'medium';
        fixture.detectChanges();

        const wrapperEl = fixture.nativeElement.querySelector('label.fu-toggle-holder.fu-toggle-size-medium');
        expect(wrapperEl).toBeTruthy();
    });


    it('should have helper component if set helper', () => {
        fixture = TestBed.createComponent(ToggleV4Component);
        component = fixture.componentInstance;
        component.helperText = HELPER_TEXT;
        fixture.detectChanges();

        const helperEl = fixture.nativeElement.querySelector('fusion-input-helper');
        expect(helperEl).toBeTruthy();
        expect(helperEl.textContent).toBe(HELPER_TEXT);
    });


    it('should have label text if set label text', () => {
        fixture = TestBed.createComponent(ToggleV4Component);
        component = fixture.componentInstance;
        component.labelText = LABEL_TEXT;
        fixture.detectChanges();

        const labelEl = fixture.nativeElement.querySelector('.fu-toggle-label .fu-toggle-label-text');
        expect(labelEl).toBeTruthy();
        expect(labelEl.textContent).toBe(LABEL_TEXT);
    });

    it('should have start icon if it set', () => {
        fixture = TestBed.createComponent(ToggleV4Component);
        component = fixture.componentInstance;
        component.startIcon = ICON_NAME;
        fixture.detectChanges();

        const iconEl = fixture.nativeElement.querySelector('fusion-icon.fu-toggle-start-icon');
        expect(iconEl).toBeTruthy();
        expect(iconEl.getAttribute('ng-reflect-name')).toBe(ICON_NAME);
        expect(iconEl.classList).toContain(ICON_NAME);

    });

    it('should have end icon if it set - labelText must be set', () => {
        fixture = TestBed.createComponent(ToggleV4Component);
        component = fixture.componentInstance;
        component.labelText = LABEL_TEXT
        component.endIcon = ICON_NAME;
        fixture.detectChanges();

        const iconEl = fixture.nativeElement.querySelector('fusion-icon.fu-toggle-end-icon');
        expect(iconEl).toBeTruthy();
        expect(iconEl.getAttribute('ng-reflect-name')).toBe(ICON_NAME);
        expect(iconEl.classList).toContain(ICON_NAME);
    });

    it('should have help icon with tooltip if it set - labelText must be set', () => {
        fixture = TestBed.createComponent(ToggleV4Component);
        component = fixture.componentInstance;
        component.labelText = LABEL_TEXT
        component.labelHelpIcon = ICON_NAME;
        component.labelTooltipText = TOOLTIP_TEXT;
        fixture.detectChanges();

        const iconEl = fixture.nativeElement.querySelector('fusion-icon.fu-toggle-label-icon');

        expect(iconEl).toBeTruthy();
        expect(iconEl.getAttribute('ng-reflect-fusion-tooltip')).toBe(TOOLTIP_TEXT);
    });


});

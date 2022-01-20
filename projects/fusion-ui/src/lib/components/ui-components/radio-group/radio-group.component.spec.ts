import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RadioGroupComponent} from './radio-group.component';
import {UniqueIdService} from '../../../services/unique-id/unique-id.service';
import {ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {RadioComponent} from '../radio/radio.component';
import {FormsModule} from '@angular/forms';
import {LogService} from '../../../services/log/log.service';
import {By} from '@angular/platform-browser';
import {RadioModule} from '../radio/radio.module';

class MockUniqueIdService extends UniqueIdService {
    getUniqueId() {
        return 123456789;
    }
}

const mockOptions: Array<any> = [
    {id: 1, label: 'First'},
    {id: 2, label: 'Second'},
    {id: 3, label: 'Third'}
];

describe('RadioGroupComponent', () => {
    let component: RadioGroupComponent;
    let fixture: ComponentFixture<RadioGroupComponent>;
    let debugEl: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, RadioModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [RadioGroupComponent],
            providers: [LogService, {provide: UniqueIdService, useClass: MockUniqueIdService}]
        });

        fixture = TestBed.overrideComponent(RadioGroupComponent, {
            set: {changeDetection: ChangeDetectionStrategy.Default}
        }).createComponent(RadioGroupComponent);

        component = fixture.componentInstance;

        component.options = mockOptions;

        debugEl = fixture.debugElement;
        el = debugEl.nativeElement;
    });

    it('Must exist', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('Must have rendered needed elements', () => {
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('div[id="is-rbgroup-123456789"]'))).toBeTruthy();

        const elRadios = fixture.debugElement.queryAll(By.css('fusion-radio'));
        expect(elRadios.length).toBe(mockOptions.length);

        const elDInputs = fixture.debugElement.queryAll(By.css('input[type="radio"]'));
        const elDLabels = fixture.debugElement.queryAll(By.css('label'));

        expect(elDInputs.length).toBe(mockOptions.length);
        expect(elDLabels.length).toBe(mockOptions.length);

        elDInputs.forEach((elem, idx) => {
            expect(elem.nativeElement.value).toBe(mockOptions[idx].id.toString());
            expect(elem.nativeElement.getAttribute('id')).toBe('is-rbgroup-123456789_' + mockOptions[idx].id);
        });

        elDLabels.forEach((elem, idx) => {
            expect(elem.nativeElement.innerText.trim()).toBe(mockOptions[idx].label);
            expect(elem.nativeElement.getAttribute('for')).toBe('is-rbgroup-123456789_' + mockOptions[idx].id);
            expect(elem.nativeElement.innerHTML).toContain('<span _ngcontent-');
        });
    });

    it('Must select correct option as selected', () => {
        component.selected = mockOptions[1];
        fixture.detectChanges();
        expect(component.selected).toEqual(mockOptions[1]);
    });

    it('Must auto select first option as selected if was not set', () => {
        component.selected = mockOptions[0];
        fixture.detectChanges();
        expect(component.selected).toEqual(mockOptions[0]);
    });
});

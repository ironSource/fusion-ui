import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {SwitcherComponent} from './switcher.component';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {SwitcherItem} from '@ironsource/fusion-ui/components/switcher/common/entities';

class MockUniqueIdService extends UniqueIdService {
    getUniqueId() {
        return parseInt(Math.random().toString().replace('0.', ''), 10);
    }
}

const mockOptions: SwitcherItem[] = [
    {id: 1, title: 'one'},
    {id: 2, title: 'two'},
    {id: 3, title: 'three'}
];

describe('SwitcherComponent', () => {
    let component: SwitcherComponent;
    let fixture: ComponentFixture<SwitcherComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [SwitcherComponent],
                imports: [FormsModule],
                providers: [{provide: UniqueIdService, useClass: MockUniqueIdService}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(SwitcherComponent);
        component = fixture.componentInstance;

        component.name = 'switcherTest';
        component.options = mockOptions;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Must have rendered needed elements', () => {
        const items = component.options;

        expect(fixture.debugElement.query(By.css('div.is-switcher-holder'))).toBeTruthy();

        const elDInputs = fixture.debugElement.queryAll(By.css('input[type="radio"]'));
        const elDLabels = fixture.debugElement.queryAll(By.css('label'));

        expect(elDInputs.length).toBe(mockOptions.length);
        expect(elDLabels.length).toBe(mockOptions.length);

        elDInputs.forEach((elem, idx) => {
            expect(elem.nativeElement.getAttribute('id')).toBe(elem.nativeElement.getAttribute('name') + '_' + items[idx].id.toString());
            expect(elem.nativeElement.getAttribute('name')).toBe('switcherTest');
        });

        elDLabels.forEach((elem, idx) => {
            expect(elem.nativeElement.innerText).toBe(mockOptions[idx].title);
            expect(elem.nativeElement.getAttribute('for')).toBe(component.name + '_' + items[idx].id.toString());
        });
    });
});

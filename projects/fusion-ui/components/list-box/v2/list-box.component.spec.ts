import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ListBoxComponent} from './list-box.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {ListBoxOption} from '@ironsource/fusion-ui/components/list-box/common/base';

const OPTIONS_MOCK: ListBoxOption[] = [
    {id: 1, displayText: 'First option'},
    {id: 2, displayText: 'Second option'}
];

describe('ListBoxComponent', () => {
    let component: ListBoxComponent;
    let fixture: ComponentFixture<ListBoxComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IconModule, TooltipModule],
            declarations: [ListBoxComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListBoxComponent);
        component = fixture.componentInstance;
        component.options = OPTIONS_MOCK;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render options with inner text', () => {
        const liElements = fixture.debugElement.nativeElement.querySelectorAll('li');
        expect(liElements).toBeTruthy();

        OPTIONS_MOCK.forEach((item, idx) => {
            expect(liElements[idx].innerText).toBe(OPTIONS_MOCK[idx].displayText);
        });
    });

    it('should render options with icon "checked"', () => {
        const liElements = fixture.debugElement.nativeElement.querySelectorAll('li');
        expect(liElements).toBeTruthy();
        expect(liElements.length).toBe(OPTIONS_MOCK.length);

        OPTIONS_MOCK.forEach((item, idx) => {
            expect(liElements[idx].querySelector('fusion-icon.checkIcon')).toBeTruthy();
        });
    });

    it('should render options with icon "remove"', () => {
        const liElements = fixture.debugElement.nativeElement.querySelectorAll('li');
        expect(liElements).toBeTruthy();
        expect(liElements.length).toBe(OPTIONS_MOCK.length);

        OPTIONS_MOCK.forEach((item, idx) => {
            expect(liElements[idx].querySelector('fusion-icon.removeIcon')).toBeTruthy();
        });
    });

    it('should render options with tooltip ', () => {
        const liElements = fixture.debugElement.nativeElement.querySelectorAll('li');
        expect(liElements).toBeTruthy();
        expect(liElements.length).toBe(OPTIONS_MOCK.length);

        OPTIONS_MOCK.forEach((item, idx) => {
            expect(liElements[idx].querySelector('.option-label[role=tooltiped]')).toBeTruthy();
        });
    });
});

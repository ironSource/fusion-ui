import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {IconSelectListComponent} from './icon-select-list.component';
import {UniqueIdService} from '../../../services/unique-id/unique-id.service';
import {IconSelectItem} from './entities/icon-select-item';
import {DebugElement} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IconModule} from '../icon/icon.module';
import {CheckboxModule} from '../checkbox/checkbox.module';
import {RadioModule} from '../radio/radio.module';
import {By} from '@angular/platform-browser';

class MockUniqueIdService extends UniqueIdService {
    getUniqueId() {
        return 123456789;
    }
}

const optionMock: Array<IconSelectItem> = [
    {
        id: 'phone',
        icon: 'circle-phone',
        label: 'Phone'
    },
    {
        id: 'tablet',
        icon: 'circle-tablet',
        label: 'Tablet'
    }
];

describe('IconSelectListComponent', () => {
    let component: IconSelectListComponent;
    let fixture: ComponentFixture<IconSelectListComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [FormsModule, IconModule, CheckboxModule, RadioModule],
                declarations: [IconSelectListComponent],
                providers: [{provide: UniqueIdService, useClass: MockUniqueIdService}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(IconSelectListComponent);
        component = fixture.componentInstance;
        component.options = optionMock;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render options', () => {
        fixture.detectChanges();

        expect(component.options.length).toBe(optionMock.length);
        expect(component.selected.length).toBe(0);
    });

    it('should render DOM Elements options for multiple (checkbox mode - default) selection', () => {
        fixture.detectChanges();

        const liDLabels = fixture.debugElement.queryAll(By.css('li.is-icon-select-item'));
        expect(liDLabels.length).toBe(optionMock.length);

        const iconHoldersDLabels = fixture.debugElement.queryAll(By.css('div.is-icon-holder'));
        expect(iconHoldersDLabels.length).toBe(optionMock.length);

        const iconsDLabels = fixture.debugElement.queryAll(By.css('fusion-icon'));
        expect(iconsDLabels.length).toBe(optionMock.length);

        const checkboxesDLabels = fixture.debugElement.queryAll(By.css('fusion-checkbox'));
        expect(checkboxesDLabels.length).toBe(optionMock.length);
    });

    it('should render DOM Elements options for only one (radio button mode) selection', () => {
        component.isMultiSelect = false;
        fixture.detectChanges();

        const liDLabels = fixture.debugElement.queryAll(By.css('li.is-icon-select-item'));
        expect(liDLabels.length).toBe(optionMock.length);

        const iconHoldersDLabels = fixture.debugElement.queryAll(By.css('div.is-icon-holder'));
        expect(iconHoldersDLabels.length).toBe(optionMock.length);

        const iconsDLabels = fixture.debugElement.queryAll(By.css('fusion-icon'));
        expect(iconsDLabels.length).toBe(optionMock.length);

        const checkboxesDLabels = fixture.debugElement.queryAll(By.css('fusion-radio'));
        expect(checkboxesDLabels.length).toBe(optionMock.length);
    });
});

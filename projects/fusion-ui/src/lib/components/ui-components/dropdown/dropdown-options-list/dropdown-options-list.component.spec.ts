import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {DropdownOptionsListComponent} from './dropdown-options-list.component';
import {DropdownOptionModule} from '../dropdown-option/dropdown-option.module';
import {DropdownService} from '../dropdown.service';

describe('DropdownOptionsListComponent', () => {
    let component: DropdownOptionsListComponent;
    let fixture: ComponentFixture<DropdownOptionsListComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [DropdownOptionsListComponent],
                imports: [DropdownOptionModule],
                providers: [DropdownService]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownOptionsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

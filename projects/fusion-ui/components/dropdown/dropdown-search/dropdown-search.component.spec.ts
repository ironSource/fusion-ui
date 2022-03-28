import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownSearchComponent} from './dropdown-search.component';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {ReactiveFormsModule} from '@angular/forms';

describe('DropdownSearchComponent', () => {
    let component: DropdownSearchComponent;
    let fixture: ComponentFixture<DropdownSearchComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [InputModule, ReactiveFormsModule],
                declarations: [DropdownSearchComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

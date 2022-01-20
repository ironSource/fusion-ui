import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownDualMultiSelectFooterComponent} from './dropdown-dual-multi-select-footer.component';

describe('DropdownDualMultiSelectFooterComponent', () => {
    let component: DropdownDualMultiSelectFooterComponent;
    let fixture: ComponentFixture<DropdownDualMultiSelectFooterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownDualMultiSelectFooterComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownDualMultiSelectFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

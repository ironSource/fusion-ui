import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownDualMultiSelectDocsComponent} from './dropdown-dual-multi-select-docs.component';

describe('DropdownDualMultiSelectDocsComponent', () => {
    let component: DropdownDualMultiSelectDocsComponent;
    let fixture: ComponentFixture<DropdownDualMultiSelectDocsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownDualMultiSelectDocsComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownDualMultiSelectDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

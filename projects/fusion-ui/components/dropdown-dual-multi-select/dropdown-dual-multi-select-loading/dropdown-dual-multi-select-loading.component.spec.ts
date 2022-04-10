import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownDualMultiSelectLoadingComponent} from './dropdown-dual-multi-select-loading.component';

describe('DropdownDualMultiSelectLoadingComponent', () => {
    let component: DropdownDualMultiSelectLoadingComponent;
    let fixture: ComponentFixture<DropdownDualMultiSelectLoadingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownDualMultiSelectLoadingComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownDualMultiSelectLoadingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

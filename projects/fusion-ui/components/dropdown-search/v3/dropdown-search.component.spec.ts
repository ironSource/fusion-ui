import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownSearchComponent} from './dropdown-search.component';

describe('DropdownSearchComponent', () => {
    let component: DropdownSearchComponent;
    let fixture: ComponentFixture<DropdownSearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownSearchComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

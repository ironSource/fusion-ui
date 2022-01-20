import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownCustomPlaceholderComponent} from './dropdown-custom-placeholder.component';

describe('DropdownCustomPlaceholderComponent', () => {
    let component: DropdownCustomPlaceholderComponent;
    let fixture: ComponentFixture<DropdownCustomPlaceholderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownCustomPlaceholderComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownCustomPlaceholderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

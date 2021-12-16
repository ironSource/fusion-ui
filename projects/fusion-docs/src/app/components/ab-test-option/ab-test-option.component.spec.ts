import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AbTestOptionComponent} from './ab-test-option.component';

describe('AbTestOptionComponent', () => {
    let component: AbTestOptionComponent;
    let fixture: ComponentFixture<AbTestOptionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AbTestOptionComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AbTestOptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
